import { styled } from "styled-components";
import { Button } from "components/Button";
import CollectionsImage from "assets/imageCollections.svg";
import ShopingIcon from "assets/iconshopping.svg";
const StyleDiv = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 565px;
  .contentRight {
    position: relative;
    border: 1px solid #848484;
    border-bottom-right-radius: 30%;
    border-top-left-radius: 30%;
    width: 35%;
    img {
      position: absolute;
      top: 47%;
      left: 43%;
      transform: translate(-50%, -50%);
    }
  }
  .contentLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StyleImage = styled.img`
  border-bottom-right-radius: 30%;
  border-top-left-radius: 30%;
`;
export const Collections = () => {
  return (
    <StyleDiv>
      <div className="contentLeft">
        <h1>Collections</h1>
        <p>
          you can explore ans shop many differnt collection from various barands
          here.
        </p>
        <Button title={"Shop Now"} bgclor={"#1e2832"} textColor={"white"}>
          <img src={ShopingIcon} alt="" />

        </Button>
      </div>
      <div className="contentRight">
        <StyleImage src={CollectionsImage} alt="FDKSFKDSH" />
      </div>
    </StyleDiv>
  );
};
