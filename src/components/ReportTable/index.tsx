import { useState, useEffect } from "react";
import { ReportTableContainer } from "./style";

interface ReportData {
  product_name: string,
  product_quantity: number,
  product_value: number 
}

interface ReportTableProps {
  dataTable: ReportData[];
}

export function ReportTable(props: ReportTableProps) {

  const [ undTotals, setUndTotals ] = useState(0);
  const [ valueTotals, setValuesTotals ] = useState(0);

  useEffect(() => {
    // calcular os totais e colocar nos states
  }, [])

  return(
    <ReportTableContainer>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {
          props.dataTable.map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.product_quantity} und</td>
              <td>R$ {item.product_value}</td>
            </tr>
          ))
        }

      </tbody>
      <tfoot>
        <tr>
          <td>TOTAL</td>
          <td>{undTotals} und</td>
          <td>R$ {valueTotals}</td>
        </tr>
      </tfoot>
    </ReportTableContainer>
  );
}