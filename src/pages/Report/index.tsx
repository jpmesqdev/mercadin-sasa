import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ReportIcon } from '../../assets/reports2.svg';

import { api } from '../../services/api';

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

interface TotalData {
  quantity: number;
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

  function getDate() {
    return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  }

  function getWeek() {
    return `${new Date().toLocaleString('pt-br', {weekday: 'long'})}`;
  }

  useEffect(() => {
    api.get(`report/daily/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
      .then(response => setDailyReport(response.data.results))
    api.get(`report/daily/total/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
      .then(response => setDailyTotal(response.data))
    // api.get("report/monthly/2021-09-01/2021-09-30/Pix")
    //   .then(response => setMonthlyReport(response.data.results))
    // api.get("report/yearly")
    //   .then(response => setYearlyReport(response.data.results))
  }, [props.entry])

  const [ dailyReport, setDailyReport ] = useState<ReportData[]>([]);
  const [ dailyTotal, setDailyTotal ] = useState<TotalData[]>([]);
  const [ monthlyReport, setMonthlyReport ] = useState<ReportData[]>([]);
  const [ yearlyReport, setYearlyReport ] = useState<ReportData[]>([]);

  const Routes = [
    {
      path: '/reports/daily',
      name: 'Relatório diário',
      state: dailyReport,
    },
    {
      path: '/reports/monthly',
      name: 'Relatório mensal',
      state: monthlyReport,
    },
    {
      path: '/reports/yearly',
      name: 'Relatório anual',
      state: yearlyReport,
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
            <div className="report-date">{getDate()} ({getWeek()})</div>
          </div>
          
          <div className="table-container">
            {Routes.map(({ path, state }) => (
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
                              <td>R$ {item.amount}</td>
                            </tr>                        
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>TOTAL</td>
                            <td>{dailyTotal[0].quantity} und</td>
                            <td colSpan={2}>R$ {dailyTotal[0].amount}</td>
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