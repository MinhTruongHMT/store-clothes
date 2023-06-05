import { Layout } from "components/Layout";
import { Collections } from "components/Collections";
import { Popularstyles } from "components/Popularstyles";
const Home = () => {
  return (
    <Layout>
      <Collections />
      <Popularstyles />
    </Layout>
  );
};
export default Home;
