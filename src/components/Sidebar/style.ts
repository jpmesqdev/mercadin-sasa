import styled from "styled-components";

export const NavLinkStyle = {
    width: "100%",
    display: "flex",
    alignContent: "center",
    textDecoration: "none",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 22,
    borderRadius: 10
};

export const SidebarContainer = styled.div`
  background-color: var(--color-white);

  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 200px;
  height: 100vh;

  .logo {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1.3rem;
      font-weight: 700;

      span {
          display: block;
          margin-top: 1rem;
      }
    }

  .menu {

      display: flex;
      justify-content: center;

      ul {
        list-style: none;
        width: 90%;

        li {
            display: flex;
            align-items: center;
            text-align: left;
            line-height: 25px;

            transition: ease 0.2s;

            svg {
                margin-right: 1rem;
            }

            &:hover {
                filter: brightness(0.9);
            }

            .active {
                background-color: var(--color-primary);
                color: var(--color-white);
                    svg {
                        margin-right: 1rem;

                        path {
                            fill: var(--color-white);
                        }
                    
                    }
                }
            }
        }
    }

  .logout-icon {

    text-align: center;
    margin-bottom: 1rem;

    svg {
        path {
            fill: red;
        }
    }
      
}

`;