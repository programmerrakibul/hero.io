import { useLocation, useNavigate } from "react-router";
import notFoundImg from "../../assets/App-Error.png";

const AppNotFound = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isInAppDetails = pathname.includes("/app-details");

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-6 py-4">
      {isInAppDetails && (
        <div>
          <img src={notFoundImg} alt="Not Found" />
        </div>
      )}
      <div className="text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Oops, App Not Found!
        </h3>
        <p className="text-[#627382] text-sm sm:text-base">
          The App you are {isInAppDetails ? "requesting" : "searching"} is not
          found on our system. {isInAppDetails && "please try another apps"}
        </p>
        {isInAppDetails && (
          <button
            onClick={() => navigate("/apps")}
            className="btn font-semibold text-white bg-gradient-to-br hover:bg-gradient-to-t from-[#632EE3] to-[#9F62F2]"
          >
            Browse Apps
          </button>
        )}
      </div>
    </div>
  );
};

export default AppNotFound;
