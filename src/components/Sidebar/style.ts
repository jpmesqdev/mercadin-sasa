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

  .user-content {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }

  .user-avatar {
      width: 50px;
      height: 50px;
      border: 1px solid var(--color-gray);
      margin-right: 1rem;
    }

  .user-titles {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
          color: var(--color-gray);
          font-size: 0.7rem;
      }

      .name {
          margin-top: 0.3rem;
          font-size: 0.9rem;
          font-weight: 700;
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

    transition: ease 0.5s;
    &:hover {
        filter: brightness(0.9);
    }

    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;

    svg {
        path {
            fill: red;
        }
    }
      
}

`;