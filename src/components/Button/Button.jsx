import { styled } from "styled-components";

const StyleButton = styled.button`
  height: 72px;
  width: 223px;
  left: 304px;
  top: 591px;
  border-radius: 0px;
  padding: 19px 26px 19px 26px;
  background-color: #1e2832;
  color: white;
  font-size: 29px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
`;
export const Button = ({ children }) => {
  return <StyleButton>{children}shop now</StyleButton>;
};
