import { EntryPageContainer, EntryInfo } from "./style";

interface EntryProps {
  productName: string,
  quantity: number,
  dateTime: string,
  paymentType: string,
  amount: number
}

export function Entry(props: EntryProps) {

  return (
    <EntryPageContainer>
      <div className="entry-container">

        <EntryInfo>
          <div className="header">
            <div className="title-group">
              <div className="entry-type">Produto</div>
              <div className="entry-name">{props.productName}</div>
            </div>
          </div>
          <div className="body">
            <div className="entry-type">Quantidade</div>
            <div className="entry-content">x {props.quantity}</div>
          </div>
          <div className="footer">
            <div className="left-side">
              <div className="entry-type">Data/Hora</div>
              <div className="entry-content">{new Intl.DateTimeFormat('pt-BR').format(
                new Date(props.dateTime)
              )}</div>
            </div>
            <div className="divisor"></div>
            <div className="right-side">
              <div className="entry-type">Pagamento</div>
              <div className="entry-content">{props.paymentType} - {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(props.amount)}
              </div>
            </div>
          </div>
        </EntryInfo>
 
      </div>
      
    </EntryPageContainer>
  );
}