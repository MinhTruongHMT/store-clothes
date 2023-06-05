import { styled } from "styled-components";
import Product5 from "assets/image-product-5.svg";
const StyleDiv = styled.div`
  width: 250px;
  .type-price {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    .price {
      //styleName: Span;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: right;
      font-family: 'Cormorant Garamond', serif;
    }
  }
  img {
    width: 100%;
  }
`;

export const Card = () => {
  return (
    <StyleDiv>
      <img src={Product5} alt="" />
      <h3 style={{ textAlign: "left", padding: "0px 10px" }}>
        Adicolor Classics Joggers
      </h3>
      <div className="type-price">
        <span>Dress</span>
        <span className="price">$63.85</span>
      </div>
    </StyleDiv>
  );
};
