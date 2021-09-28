import styled from "styled-components";

export const EntryPageContainer = styled.section`

  .entry-container {
    display: flex;
    flex-wrap: wrap;
  }

  .pagination {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style: none;
    }
  }
`;
  
export const EntryInfo = styled.div`
  background-color: var(--color-white);
  //padding-bottom: 0.1rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 22rem;
  border-radius: 0.8rem;

  .entry-type {
    color: var(--color-gray);
    font-size: 12px;
    font-weight: 700;
  }

  .entry-content {
    font-size: 14px;
    font-weight: 700;
  }
  
  .header {
    display: flex;
    align-items: center;
    .title-group {
      margin-right: 1rem;

      .entry-name {
        font-size: 15px;
        font-weight: 700;
      }
      
    }
    
    .icon {
      
    }
  }
  
  .body {
    margin: 1rem 0rem;
    
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0rem;
    .left-side {
      
    }
    
    .divisor {
      height: 25px;
      border: 0.01rem solid var(--color-gray);
    }
    
    .right-side {

    }
  }
`;