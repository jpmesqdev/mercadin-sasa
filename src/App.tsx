import { Route } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Entry } from './pages/Entry';
import { Sale } from './pages/Sale';
import { Report } from './pages/Report';

import { AppContainer } from './styles/App.style';
import { CSSTransition } from 'react-transition-group';
import { Login } from './pages/Login';
import { useEffect, useState } from 'react';
import { api } from './services/api';
import { Product } from './pages/Product';

interface Entry {
  product_name: string,
  quantity: number,
  created_at: string,
  payment_type: string,
  amount: number
}

export function App() {

  const [ entry, setEntry ] = useState<Entry[]>([]);
  const [ entryUpdate, setEntryUpdate ] = useState(1);
  const [ isLogged, setIsLogged ] = useState(true);
  
  useEffect(() => {
    api.get("/entry")
      .then(response => setEntry(response.data.results))
  }, [entryUpdate])

  if (isLogged !== true) {
    return (<Login />)
  } 

  const CSSClasses = {
    enter: 'page-enter',
    enterActive: 'page-active',
    exit: 'page-exit',
    exitActive: 'page-exit-active',
  };

  return (
    <AppContainer>
      <Sidebar />
      <div className="content">
        <Route path="/" exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={CSSClasses}
              unmountOnExit
            >
              <div className="page-container">
                <h1>Lançamentos</h1>
                <div>
                  {entry.length !== 0 &&
                    entry.map((entry, index) => (
                      <Entry
                        key={index}
                        productName={entry.product_name}
                        quantity={entry.quantity}
                        dateTime={entry.created_at}
                        paymentType={entry.payment_type}
                        amount={entry.amount}
                      />
                    ))
                  }

                  {entry.length === 0 &&
                    <div className="no-data">Não há dados</div>
                  }
                  
                </div>
              </div>
            </CSSTransition>
          )}
        </Route>

        <Route path="/sales">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={CSSClasses}
              unmountOnExit
            >
              <div className="page-container">
                <Sale entryUpdate={entryUpdate} updateFunc={setEntryUpdate}/>
              </div>
            </CSSTransition>
          )}
        </Route>

        <Route path="/products">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={CSSClasses}
              unmountOnExit
            >
              <div className="page-container">
                <Product />
              </div>
            </CSSTransition>
          )}
        </Route>

        <Route path="/reports">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={CSSClasses}
              unmountOnExit
            >
              <div className="page-container">
                <Report entry={entry} />
              </div>
            </CSSTransition>
          )}
        </Route>
      </div>
    </AppContainer>
  )
}
