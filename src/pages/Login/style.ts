import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 400px;
  margin: auto;

  text-align: center;

  div {

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      margin-top: 1rem;
      padding: 0.8rem 1rem;
      border-radius: 0.2rem;
      border: 1px solid var(--color-white);

      transition: ease 0.6s;

      &:focus {
        border: 1px solid var(--color-primary);
        outline: 0;
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 1rem;
      border: 0;
      border-radius: 0.2rem;
      background-color: var(--color-primary);
      color: var(--color-white);

      transition: ease 0.6s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;