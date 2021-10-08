import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ReportIcon } from '../../assets/reports2.svg';

import { api } from '../../services/api';

import { getDate, getRevertDate, getWeek, getMonth, getYear } from '../../utils/Date';
import { formatCurrency } from '../../utils/Currency';

import { ReportPageContainer } from './style';

const CSSClasses = {
  enter: 'table-content-enter',
  enterActive: 'table-content-active',
  exit: 'table-content-exit',
  exitActive: 'table-content-exit-active',
};

interface ReportData {
  product_name: string;
  quantity: number;
  payment_type: string;
  amount: number;
}

interface Entry {
  product_name: string,
  quantity: number,
  created_at: string,
  payment_type: string,
  amount: number
}

interface ReportProps {
  entry: Entry[]
}

export function Report(props: ReportProps) {

  useEffect(() => {
    api.get(`report/daily/${getRevertDate('-')}`)
      .then(response => setDailyReport(response.data.results))
      
    api.get(`report/monthly/${getMonth()}`)
      .then(response => setMonthlyReport(response.data.results))

    api.get(`report/yearly/${getYear()}`)
      .then(response => setYearlyReport(response.data.results))

    api.get(`report/daily/total/${getRevertDate('-')}`)
      .then(response => setDailyTotal(response.data[0]))

    api.get(`report/monthly/total/9`)
      .then(response => setMonthlyTotal(response.data[0]))
      
    api.get(`report/yearly/total/2021`)
      .then(response => setYearlyTotal(response.data[0]))
  }, [props.entry])

  const [ dailyReport, setDailyReport ] = useState<ReportData[]>([]);
  const [ monthlyReport, setMonthlyReport ] = useState<ReportData[]>([]);
  const [ yearlyReport, setYearlyReport ] = useState<ReportData[]>([]);

  const [ dailyTotal, setDailyTotal ] = useState({
    quantity: 0,
    amount: 0
  });
  const [ monthlyTotal, setMonthlyTotal ] = useState({
    quantity: 0,
    amount: 0
  });
  const [ yearlyTotal, setYearlyTotal ] = useState({
    quantity: 0,
    amount: 0
  });

  const Routes = [
    {
      path: '/reports/daily',
      name: 'Relatório diário',
      state: dailyReport,
      total: dailyTotal
    },
    {
      path: '/reports/monthly',
      name: 'Relatório mensal',
      state: monthlyReport,
      total: monthlyTotal
    },
    {
      path: '/reports/yearly',
      name: 'Relatório anual',
      state: yearlyReport,
      total: yearlyTotal
    },
  ];

  return (
    <ReportPageContainer>
      <h1>Relatórios</h1>
      
      <div className="report-content">
        <div className="report-header">
          <NavLink to="/reports/daily">
            <div className="report-tab">
              <ReportIcon />
              Relatório diário
            </div>
          </NavLink>
          <NavLink to="/reports/monthly">
            <div className="report-tab">
              <ReportIcon />
              Relatório mensal
            </div>
          </NavLink>
          <NavLink to="/reports/yearly">
            <div className="report-tab">
              <ReportIcon />
              Relatório anual
            </div>
          </NavLink>
        </div>

        <div className="report-divider"></div>

        <div className="report-body">
          <div className="report-date-print">
            <div className="report-date">{getDate('/')} ({getWeek()})</div>
          </div>
          
          <div className="table-container">
            {Routes.map(({ path, state, total }) => (
              <Route key={path} exact path={path}>
                {({match}) => (
                  <CSSTransition
                    in={match != null}
                    classNames={CSSClasses}
                    timeout={300}
                    classname="table-content"
                    unmountOnExit
                  >
                    <div className="table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Pagamento</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.map((item, index) => (
                            <tr key={index}>
                              <td>{item.product_name}</td>
                              <td>{item.quantity} und</td>
                              <td>{item.payment_type}</td>
                              <td>{formatCurrency(item.amount)}</td>
                            </tr>                        
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL</td>
                            <td>{total.quantity} und</td>
                            <td colSpan={2}>{formatCurrency(total.amount)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </div>

      </div>
    </ReportPageContainer>
  );
}