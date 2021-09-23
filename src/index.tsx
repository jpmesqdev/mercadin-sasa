import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyles';

// createServer({
//   models: {
//     entry: Model,
//   },
//   seeds(server) {
//     server.db.loadData({
//       entries: [
//         {
//           id: 1,
//           productName: "Coca-cola 1l",
//           quantity: 2,
//           amount: 14.99,
//           paymentType: "Pix",
//           createdAt: new Date('2021-09-18 20:40')
//         },
//         {
//           id: 2,
//           productName: "Salgadinho Cheetos 65g",
//           quantity: 1,
//           amount: 2.99,
//           paymentType: "Débito",
//           createdAt: new Date('2021-09-18 20:55')
//         },
//         {
//           id: 3,
//           productName: "Coca-cola 1l",
//           quantity: 2,
//           amount: 14.99,
//           paymentType: "Pix",
//           createdAt: new Date('2021-09-18 20:40')
//         },
//         {
//           id: 4,
//           productName: "Coca-cola 1l",
//           quantity: 2,
//           amount: 14.99,
//           paymentType: "Pix",
//           createdAt: new Date('2021-09-18 20:40')
//         },
//       ]
//     })
//   },
//   routes() {
//     this.namespace = 'api';

//     // this.get("/entry", () => {
//     //   return this.schema.all('entry');
//     // })
    
//     this.post("/entry", (schema, request) => {
//       const data = JSON.parse(request.requestBody);
//       return schema.create('entry', data);
//     })

//     this.get("/report/daily", () => {
//       return [
//         {id: 1, productName: 'Recheado Amori', productQuantity: 56, productValue: 126.00},
//         {id: 2, productName: 'Salgadinho Cheetos', productQuantity: 27, productValue: 852.00},
//         {id: 3, productName: 'Refrigerante Coca-cola', productQuantity: 16, productValue: 600.69}
//       ]
//     })
//     this.get("/report/monthly", () => {
//       return [
//         {id: 1, productName: 'Recheado Amori', productQuantity: 116, productValue: 536.00},
//         {id: 2, productName: 'Salgadinho Cheetos', productQuantity: 42, productValue: 999.00},
//         {id: 3, productName: 'Refrigerante Coca-cola', productQuantity: 3, productValue: 22.69}
//       ]
//     })
//     this.get("/report/yearly", () => {
//       return [
//         {id: 1, productName: 'Recheado Amori', productQuantity: 112, productValue: 597.00},
//         {id: 2, productName: 'Salgadinho Cheetos', productQuantity: 89, productValue: 1225.00},
//         {id: 3, productName: 'Refrigerante Coca-cola', productQuantity: 15, productValue: 96.69}
//       ]
//     })
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
