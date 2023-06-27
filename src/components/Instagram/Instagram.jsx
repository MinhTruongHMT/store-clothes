import { styled } from "styled-components";
import Product1 from "assets/image-product-8.svg";
import Product2 from "assets/image-product-9.svg";
import Product3 from "assets/image-product-10.svg";
import Product4 from "assets/image-product-11.svg";
import Product5 from "assets/image-product-12.svg";
import Product6 from "assets/image-product-13.svg";
const StyleLayout = styled.div`
  margin-top: 50px;
  background-color: #f0f0f0;
  padding: 20px 120px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 150px;
      height: 150px;
    }
  }
  .idIntagram {
    //styleName: H4;
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: center;
    color: #ff6f61;
  }
`;
export const Instagram = () => {
  return (
    <StyleLayout>
      <h1>Follow products and discounts on Instagram</h1>
      <div>
        <img src={Product1} alt="" />
        <img src={Product2} alt="" />
        <img src={Product3} alt="" />
        <img src={Product4} alt="" />
        <img src={Product5} alt="" />
        <img src={Product6} alt="" />
      </div>
      <h3 className="idIntagram">@lisa.official</h3>
    </StyleLayout>
  );
};
