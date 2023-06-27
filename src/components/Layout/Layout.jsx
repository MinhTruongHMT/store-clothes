import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyleLayout = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    margin: 31px 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #e3e3e3;
    .header_link {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .Logo {
        font-family: "Cormorant Garamond", serif;
        font-size: 42px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
      }
      .LinkStore {
        font-family: "Cormorant Garamond", serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
  .content {
    margin: 31px 300px;
    border: 1px solid black;
  }
`;
export const Layout = ({ children }) => {
  return (
    <StyleLayout>
      <div className="header">
        <div className="header_search_icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="header_link">
          <div className="Logo">
            <NavLink to="/">Lisa Store</NavLink>
          </div>
          <div className="LinkStore">
            <NavLink to="/">
              <i class="fa-regular fa-user" />
              Account
            </NavLink>
            <NavLink to="/">
              <i class="fa-solid fa-bag-shopping" />
              Shoping
            </NavLink>
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
      <div className="footer">footer</div>
    </StyleLayout>
  );
};
