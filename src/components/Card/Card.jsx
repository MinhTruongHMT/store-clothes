import { styled } from "styled-components";
import Product5 from "assets/image-product-5.svg";
import { Tag } from "components/Tag";
const StyleDiv = styled.div`
  position: relative;
  width: 250px;
  .type-price {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    .price {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: right;
      font-family: "Cormorant Garamond", serif;
    }
    .pricesalle {
      color: #ff6f61;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: right;
      font-family: "Cormorant Garamond", serif;
    }
  }
  img {
    width: 100%;
  }
`;

export const Card = ({ pricesale, price ,tagcolor,title}) => {
  return (
    <StyleDiv>
      <img src={Product5} alt="" />
      <Tag bgColor={tagcolor} title={title}></Tag>
      <h3 style={{ textAlign: "left", padding: "0px 10px" }}>
        Adicolor Classics Joggers
      </h3>
      <div className="type-price">
        <span>Dress</span>
        <div>
          {pricesale ? (
            <div>
              <span style={{ marginRight: 10 ,textDecoration:"line-through",color:"#D3D3D3"}} className="price">
                {price} 
              </span>
              <span className="pricesalle" >{pricesale}</span>
            </div>
          ) : (
            <span style={{ marginRight: 10 }} className="price">
              {price}
            </span>
          )}
        </div>
      </div>
    </StyleDiv>
  );
};
