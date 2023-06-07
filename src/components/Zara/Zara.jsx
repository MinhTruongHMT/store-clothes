import { styled } from "styled-components";
import ModelZara from "assets/ModelZara.svg";
import { Button } from "components/Button";
import Logo_zara from "assets/Zara_Logo 2.svg";
const StyleTag = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;
const StyleDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  color: red;
  .about {
    //styleName: Paragraph;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff6f61;
  }
  .Logo {
    height: 81px;
    width: 191px;
    left: 1083px;
    top: 233px;
    border-radius: 0px;
  }
`;
export const Zara = ({ title, bgColor }) => {
  return (
    <div style={{ position: "relative" }}>
      <StyleTag src={ModelZara}></StyleTag>
      <StyleDiv>
        <img src={Logo_zara} alt="" />
        <p className="about">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <Button title={"see collection"} />
      </StyleDiv>
    </div>
  );
};
