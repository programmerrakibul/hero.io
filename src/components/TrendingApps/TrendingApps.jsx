import { Link } from "react-router";
import useAppsData from "../../Hooks/useAppsData";
import AppCard from "../AppCard/AppCard";
import Container from "../Container/Container";

const TrendingApps = () => {
  const { appData } = useAppsData();
  const singleAppElements = appData
    .slice(0, 8)
    .map((item) => <AppCard key={item.id} singleApp={item} />);

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 my-10">{singleAppElements}</div>

        <div className="text-center">
          <Link
            to="apps"
            className="btn bg-[#642ee3da] hover:bg-[#632EE3] text-white duration-300"
          >
            See All Apps
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TrendingApps;
