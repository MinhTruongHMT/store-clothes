import { styled } from "styled-components";

const StyleTag = styled.div`
  width: 100px;
  height: 50px;
  color: white;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Tag = ({ title, bgColor }) => {
  return <StyleTag bgColor={bgColor}>{title}</StyleTag>;
};
