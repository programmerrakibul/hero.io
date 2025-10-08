import { useContext, useState } from "react";
import Container from "../../Container/Container";
import AppContext from "../../../Contexts/AppContext";
import AppCard from "../../AppCard/AppCard";

const Installation = () => {
  const [sortOrder, setSortOrder] = useState("");
  const { installedApps } = useContext(AppContext);
  const displayApps = sortOrder
    ? installedApps.sort((a, b) => {
        if (sortOrder === "high") {
          return b.size - a.size;
        } else if (sortOrder === "low") {
          return a.size - b.size;
        }
      })
    : installedApps;

  const installedAppElements = displayApps.map((item) => (
    <AppCard key={item.id} singleApp={item} />
  ));

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-5xl font-bold">Your Installed Apps</h1>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="my-10 space-y-7">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">
              ({installedApps.length}) App Found
            </h3>
            <select
              defaultValue="Sort By Size"
              onChange={(e) => setSortOrder(e.target.value)}
              className="select"
            >
              <option disabled={true}>Sort By Size</option>
              <option value="high">High-Low</option>
              <option value="low">Low-High</option>
            </select>
          </div>

          <div className="space-y-3.5">{installedAppElements}</div>
        </div>
      </Container>
    </section>
  );
};

export default Installation;
