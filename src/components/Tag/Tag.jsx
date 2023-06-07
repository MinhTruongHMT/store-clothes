import { styled } from "styled-components";

const StyleTag = styled.div`
  padding: 10px;
  color: white;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 0;
`;
export const Tag = ({ title, bgColor }) => {
  return <StyleTag bgColor={bgColor}>{title}</StyleTag>;
};
