import styled from "styled-components";

export const ReportPageContainer = styled.section`
  margin-bottom: 2rem;

  h1 {
    margin-top: 40px;
  }

  .report-content {
    width: 950px;
    padding: 2px;
    /* border-radius: 10px; */
    margin-top: 60px;
    background: var(--color-white);

    .report-header {
      display: flex;

      a {
        transition: ease 0.25s;
        &:hover {
          filter: brightness(0.9);
        } 
      }
  
      .report-tab {
        padding: 16px;
        margin: 2px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.2rem;
        }
      }
    }
  }

  .report-divider {
    background: var(--color-black);
    height: 1px;
  }

  .report-body {
    padding: 0px 25px;
    margin-top: 16px;
    margin-bottom: 25px;

    .report-date-print {
      display: flex;
      justify-content: space-between;
      .report-date {
        font-weight: 700;
        color: var(--color-primary);
      }
      svg {
        cursor: pointer;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .table-container {
    position: relative;

    .table-content {
      position: absolute;
      width: 106%;
      top: 27px;
      left: -27px;
      background-color: var(--color-white);
      
    }

    .table-content-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .table-content-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity 300ms, transform 300ms;
    }

    .table-content-exit {
      opacity: 1;
      transform: scale(1);
    }

    .table-content-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 300ms, transform 300ms;
    }

  }

  .active {
    background-color: var(--color-primary);
    color: var(--color-white);
    svg {
      path {
        fill: var(--color-white);
      }
    }
  }

`;