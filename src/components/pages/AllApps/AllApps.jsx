import { Search } from "lucide-react";
import useAppsData from "../../../Hooks/useAppsData";
import AppCard from "../../AppCard/AppCard";
import Container from "../../Container/Container";
import { useState } from "react";
import { Link } from "react-router";
import AppNotFound from "../../AppNotFound/AppNotFound";

const AllApps = () => {
  const [searchValue, setSearchValue] = useState("");
  const { appData } = useAppsData();
  const processedSearch = searchValue.trim().toLowerCase();
  const displayApps = searchValue
    ? appData.filter((item) =>
        item.title.toLowerCase().includes(processedSearch)
      )
    : appData;
  const singleAppElements = displayApps.map((item) => (
    <Link key={item.id} to={`/app-details/${item.id}`} state={item}>
      <AppCard singleApp={item} />
    </Link>
  ));

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="my-10 space-y-7">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">
              ({displayApps.length}) App Found
            </h3>
            <label className="input text-[#627382] outline-[#627382]">
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
          {displayApps.length > 0 ? (
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
