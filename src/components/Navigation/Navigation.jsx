import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const StyleDiv = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const Navigation = ({ icon, title }) => {
  return (
    <StyleDiv>
      <NavLink>
        <img src={icon} alt="" />
        <span> {title}</span>
      </NavLink>
    </StyleDiv>
  );
};
