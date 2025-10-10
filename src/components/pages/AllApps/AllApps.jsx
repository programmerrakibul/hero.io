import { Search } from "lucide-react";
import useAppsData from "../../../Hooks/useAppsData";
import AppCard from "../../AppCard/AppCard";
import Container from "../../Container/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import AppNotFound from "../../AppNotFound/AppNotFound";
import Spinner from "../../Spinner/Spinner";

const AllApps = () => {
  const [searchValue, setSearchValue] = useState("");
  const { appData, loading } = useAppsData();
  const [displayApps, setDisplayApps] = useState(appData);
  const [searchLoading, setSearchLoading] = useState(false);
  const processedSearch = searchValue.trim().toLowerCase();

  useEffect(() => {
    setSearchLoading(true);

    const timerId = setTimeout(() => {
      const filteredApps = processedSearch
        ? appData.filter((item) =>
            item.title.toLowerCase().includes(processedSearch)
          )
        : appData;

      setSearchLoading(false);
      setDisplayApps(filteredApps);
    }, 300);

    return () => clearTimeout(timerId);
  }, [processedSearch, appData]);

  const singleAppElements = displayApps.map((item) => (
    <Link key={item.id} to={`/app-details/${item.id}`} state={item}>
      <AppCard singleApp={item} />
    </Link>
  ));

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-base sm:text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="my-10 space-y-7">
          <div className="flex justify-between items-center gap-1.5">
            <h3 className="text-lg sm:text-2xl font-semibold w-1/2 sm:w-auto">
              (
              {loading || searchLoading ? (
                <span className="loading loading-spinner text-[#632EE3] size-4 md:size-5"></span>
              ) : (
                displayApps.length
              )}
              ) App Found
            </h3>
            <label className="input text-[#627382] outline-[#627382] w-1/2 sm:w-auto">
              <Search size={20} />
              <input
                disabled={appData.length === 0}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                placeholder="Search Apps"
              />
            </label>
          </div>
          {loading || searchLoading ? (
            <Spinner />
          ) : displayApps.length > 0 && appData.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {singleAppElements}
            </div>
          ) : (
            <AppNotFound />
          )}
        </div>
      </Container>
    </section>
  );
};

export default AllApps;
