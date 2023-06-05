import { Layout } from "components/Layout";
import { Collections } from "components/Collections";
import { Popularstyles } from "components/Popularstyles";
import { Newsletter } from "components/Newsletter";
const Home = () => {
  return (
    <Layout>
      <Collections />
      <Popularstyles />
      <Newsletter />
    </Layout>
  );
};
export default Home;
