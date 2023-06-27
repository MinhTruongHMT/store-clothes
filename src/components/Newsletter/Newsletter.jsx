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
        <Card price={"$212"} tagcolor={"#FF6F61"} title={"HOT"} />
        <Card price={"$212"} />
        <Card pricesale={"$100"} price={"$212"} />
        <Card price={"$212"} />
        <Card pricesale={"$212"} price={"$212"} tagcolor={"#000"} title={"SALE"}/>
        <Card price={"$212"} />
        <Card price={"$212"} />
        <Card pricesale={"$100"} price={"$212"} tagcolor={"#000"} title={"SALE"} />
      </div>
    </StyleDiv>
  );
};
