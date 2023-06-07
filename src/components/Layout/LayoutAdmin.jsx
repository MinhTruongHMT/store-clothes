import { Navigation } from "components/Navigation";
import { styled } from "styled-components";
import Layergroup from "assets/layergroup.svg";
import { useMediaQuery } from "react-responsive";
const StyleLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  .navigation {
    width: 15%;
    height: 100%;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 40px;
    .Logo {
      margin: 60px 0px;
      font-family: Roboto;
      font-size: 34px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .contents {
    width: 85%;
    height: 100%;
    background-color: blue;
  }
`;
export const LayoutAdmin = ({ children }) => {
  const isRetina = useMediaQuery({ query: '(max-width: 375px)' })
  const isBigScreen = useMediaQuery({ query: '(max-width: 5824px)' })
  return (
    <StyleLayout>
      <div className="navigation ">
        {isRetina && (
          <div>
            <Navigation icon={Layergroup} />
            <Navigation icon={Layergroup} />
            <Navigation icon={Layergroup} />
            <Navigation icon={Layergroup} />
            <Navigation icon={Layergroup} />
            <Navigation icon={Layergroup} />{" "}
          </div>
        )}
        {isBigScreen && (
          <div>
            <span className="Logo">Lisa Admin</span>
            <Navigation icon={Layergroup} title={"Dashboard"} />
            <Navigation icon={Layergroup} title={"Dashboadsdrd"} />
            <Navigation icon={Layergroup} title={"Dashboadsdrd"} />
            <Navigation icon={Layergroup} title={"Dashboard"} />
            <Navigation icon={Layergroup} title={"Dashboddard"} />
            <Navigation icon={Layergroup} title={"Dashboddddard"} />
          </div>
        )}
      </div>
      <div className="contents">{children}</div>
    </StyleLayout>
  );
};
