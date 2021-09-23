import styled from "styled-components"

export const ReportTableContainer = styled.table`
  border: 1px solid var(--color-primary);
  text-align: center;
  width: 95%;
  margin: 16px auto;
  tr, td, th {
    padding: 5px;
  }
  
  thead {
    background-color: var(--color-primary);
    tr {
      border: 1px solid var(--color-primary);
      font-size: 14px;
      color: var(--color-white);
    }
  } 

  tbody {
    
    tr {
      transition: ease 0.25s;
      &:hover {
        background-color: var(--color-secondary);
      }
    }
    
    td {
      border: 1px solid var(--color-primary);
      font-size: 12px;
      font-weight: 700;
    }
  }

  tfoot {
    background-color: var(--color-primary);
    tr {
      border: 1px solid var(--color-primary);
      font-size: 14px;
      font-weight: 700;
      color: var(--color-white);
    }
  }
`;

