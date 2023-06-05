import { styled } from "styled-components";
import { Card } from "components/Card";
const StyleDiv = styled.div`    
  padding: 0 110px;
  .ListProduct {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Newsletter = () => {
  return (
    <StyleDiv>
      <h1>Or subscribe to the newsletter</h1>
      <div>Menu</div>
      <div className="ListProduct">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyleDiv>
  );
};
