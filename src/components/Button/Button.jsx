import { styled } from "styled-components";

const StyleButton = styled.button`
  height: 72px;
  width: 223px;
  left: 304px;
  top: 591px;
  border-radius: 0px;
  padding: 19px 26px 19px 26px;
  background-color: ${(props) => props.bgclor}; // #1e2832
  color:${props=>props.textColor};
  font-size: 29px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  border: 0;
`;
export const Button = ({ children, title, bgclor, textColor }) => {
  return (
    <StyleButton bgclor={bgclor} textColor={textColor}>
      {children}
      {title}
    </StyleButton>
  );
};
