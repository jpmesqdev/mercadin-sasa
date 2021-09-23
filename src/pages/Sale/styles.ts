import styled from "styled-components";

export const SalePageContainer = styled.section`
  margin-top: 40px;
  width: 500px;

  form {
    input, select {
      margin-top: 2rem;
      width: 500px;

      datalist {
        position: absolute;
      }
  
      & + input {
        margin-top: 1rem;
      }

      & + select {
        margin-top: 1rem;
      }
  
      transition: ease 0.6s;
  
      border-radius: 0.2rem;
      width: 100%;
      border: 1px solid var(--color-white);
      padding: 0.8rem 1rem;

        &:focus {
        outline: 0;
        border: 1px solid var(--color-primary);
      }
    }

  &::placeholder {
    color: var(--color-gray);
  }

  

    .button-group {
      margin-top: 2rem;
    }

  
  }

`;