import { Link } from "react-router";
import useAppsData from "../../Hooks/useAppsData";
import AppCard from "../AppCard/AppCard";
import Container from "../Container/Container";
import Spinner from "../Spinner/Spinner";

const TrendingApps = () => {
  const { appData, loading } = useAppsData();
  const singleAppElements = appData.slice(0, 8).map((item) => (
    <Link key={item.id} to={`app-details/${item.id}`} state={item}>
      <AppCard singleApp={item} />
    </Link>
  ));

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trending Apps
          </h1>
          <p className="text-[#627382]  text-base sm:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
              {singleAppElements}
            </div>
            <div className="text-center">
              <Link
                to="apps"
                className="btn bg-[#642ee3da] hover:bg-[#632EE3] text-white duration-300"
              >
                Show All
              </Link>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default TrendingApps;
