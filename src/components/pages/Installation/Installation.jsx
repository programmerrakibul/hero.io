import { useContext, useState } from "react";
import Container from "../../Container/Container";
import AppContext from "../../../Contexts/AppContext";
import AppCard from "../../AppCard/AppCard";
import notFoundImg from "../../../assets/App-Error.png";
import { useNavigate } from "react-router";

const Installation = () => {
  const [sortOrder, setSortOrder] = useState("");
  const { installedApps } = useContext(AppContext);
  const navigate = useNavigate();
  const displayApps = sortOrder
    ? installedApps.sort((a, b) => {
        if (sortOrder === "high") {
          return b.downloads - a.downloads;
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-base sm:text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="my-10 space-y-7">
          <div className="flex justify-between items-center gap-1.5">
            <h3 className="text-lg sm:text-2xl font-semibold w-1/2 sm:w-auto">
              ({installedApps.length}) App Found
            </h3>
            <select
              disabled={installedApps.length === 0}
              defaultValue="Sort By Downloads"
              onChange={(e) => setSortOrder(e.target.value)}
              className="select w-1/2 min-w-32 sm:w-auto text-sm sm:text-base"
            >
              <option disabled={true}>Sort By Downloads</option>
              <option value="high">High-Low</option>
              <option value="low">Low-High</option>
            </select>
          </div>

          {installedApps.length > 0 ? (
            <div className="space-y-3.5">{installedAppElements}</div>
          ) : (
            <div className="flex flex-col gap-10 justify-center items-center my-6 py-4">
              <div>
                <img src={notFoundImg} alt="Not Found" />
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                  No applications are installed.
                </h3>
                <p className="text-[#627382] text-sm sm:text-base max-w-3xl mx-auto">
                  Currently, there are no applications installed on your device.
                  To begin using applications, please click on the "see all
                  apps" button, which will take you to a screen where you can
                  browse and install a variety of apps to suit your needs and
                  preferences.
                </p>
                <button
                  onClick={() => navigate("/apps")}
                  className="btn font-semibold text-white bg-gradient-to-br hover:bg-gradient-to-t from-[#632EE3] to-[#9F62F2]"
                >
                  Browse Apps
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Installation;
