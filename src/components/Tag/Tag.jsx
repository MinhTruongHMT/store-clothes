import { styled } from "styled-components";

const StyleTag = styled.div`
  width: 100px;
  height: 50px;
`;
export const Tag = ({ title, bgColor }) => {
  return <div>{title}</div>;
};
