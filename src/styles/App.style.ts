import styled from 'styled-components';

export const AppContainer = styled.section`
  display: flex;
  
  .content {
    margin-left: 3rem;
    margin-bottom: 40px;
    position: relative;
    left: 200px; 

    .page-container {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 15px;
      left: 15px;

      > div {
        margin-top: 2rem;
        width: 1000px;
        display: flex;
        flex-wrap: wrap;
      }
      .no-data {
        color: var(--color-gray);
      }
    }

    .page-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .page-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity 300ms, transform 300ms;
    }

    .page-exit {
      opacity: 1;
      transform: scale(1);
    }

    .page-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 300ms, transform 300ms;
    }
  }
`;