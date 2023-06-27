import { Layout } from "components/Layout";
import { Collections } from "components/Collections";
import { Popularstyles } from "components/Popularstyles";
import { Newsletter } from "components/Newsletter";
import { Zara } from "components/Zara";
import  SimpleSlider  from "components/SimpleSlider";
import { Instagram } from "components/Instagram";
const Home = () => {
  return (
    <Layout>
      <Collections />
      <Popularstyles />
      <Newsletter />
      <Zara/>
      <div style={{margin:"0 120px"}}><SimpleSlider/></div>
      <Instagram/>
    </Layout>
  );
};
export default Home;
