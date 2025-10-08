import { Download, Star } from "lucide-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router";
import AppContext from "../../Contexts/AppContext";

const AppCard = ({ singleApp }) => {
  const { handleUninstallApp } = useContext(AppContext);
  const { pathname } = useLocation();
  const isInInstallation = pathname === "/installation";
  const { id, image, title, downloads, ratingAvg, size } = singleApp;

  return (
    <div
      className={`flex ${
        isInInstallation
          ? "flex-wrap flex-row sm:items-center hover:shadow-xl hover:shadow-primary-content"
          : "flex-col hover:scale-105"
      } gap-4 bg-white p-4 rounded-md shadow-md duration-300`}
    >
      <figure
        className={`${
          isInInstallation ? "max-w-20 hidden sm:inline-block" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="aspect-square object-cover rounded-md w-full"
        />
      </figure>

      <div className="space-y-3 flex-1">
        <h3 className="font-medium text-xl">{title}</h3>
        <div
          className={`flex ${
            isInInstallation ? "gap-4" : "justify-between"
          } items-center`}
        >
          <p
            className={`flex items-center justify-center gap-1.5 font-medium text-[#00D390] rounded-md ${
              isInInstallation ? "" : "bg-[#F1F5E8] py-1 px-2"
            }`}
          >
            <span>
              {" "}
              <Download size={16} />
            </span>{" "}
            <span>{downloads}M</span>
          </p>
          <p
            className={`flex items-center justify-center gap-1.5 font-medium text-[#FF8811] rounded-md ${
              isInInstallation ? "" : "bg-[#FFF0E1] py-1 px-2"
            }`}
          >
            <span>
              <Star fill="#FF8811" size={16} />
            </span>{" "}
            <span>{ratingAvg}</span>
          </p>
          {isInInstallation && (
            <p className="text-[#627382] text-base text-nowrap">{size} MB</p>
          )}
        </div>
      </div>

      {isInInstallation && (
        <button
          onClick={() => handleUninstallApp("apps", id)}
          className="btn btn-success text-white text-base font-semibold w-fit"
        >
          Uninstall
        </button>
      )}
    </div>
  );
};

export default AppCard;
