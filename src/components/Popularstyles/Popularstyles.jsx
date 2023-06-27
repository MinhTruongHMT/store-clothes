import LoGo1 from "assets/brand-1.svg";
import LoGo2 from "assets/brand-2.svg";
import LoGo3 from "assets/brand-3.svg";
import LoGo4 from "assets/brand-4.svg";
import LoGo5 from "assets/brand-5.svg";
import Model1 from "assets/model1.svg";
import { styled } from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 110px;
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .contentLeft {
    width: 50%;
    position: relative;
    img {
      width: 100%;
    }
    h2 {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-left: -165px;
      transform: rotate(270deg);
      transform-origin: (0, 0);
    }
  }
  .contentRight {
    width: 50%;
  }
`;
const StyleImage = styled.img`
  width: 210px;
  height: auto;
`;

export const Popularstyles = () => {
  return (
    <StyleDiv>
      <div className="logo">
        <img src={LoGo1} alt="" />
        <img src={LoGo2} alt="" />
        <img src={LoGo3} alt="" />
        <img src={LoGo4} alt="" />
        <img src={LoGo5} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="contentLeft">
          <h2>Explore new and popular styles</h2>
          <img src={Model1} alt="" />
        </div>
        <div
          className="contentRight"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginLeft: "20px",
            justifyContent: "space-between",
          }}
        >
          <StyleImage src={Model1} alt="" />
          <StyleImage src={Model1} alt="" />
          <StyleImage src={Model1} alt="" />
          <StyleImage src={Model1} alt="" />
        </div>
      </div>
    </StyleDiv>
  );
};
