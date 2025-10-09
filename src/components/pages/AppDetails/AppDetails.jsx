import { useLocation } from "react-router";
import Container from "../../Container/Container";
import { Download, Star } from "lucide-react";
import likeIcon from "../../../assets/icon-review.png";
import RatingChart from "../../RatingChart/RatingChart";
import { useContext } from "react";
import AppContext from "../../../Contexts/AppContext";
import AppNotFound from "../../AppNotFound/AppNotFound";

const AppDetails = () => {
  const { handleInstallApp, installedApps } = useContext(AppContext);
  const { state: singleApp } = useLocation();

  if (singleApp === null) {
    return <AppNotFound />;
  }

  const isInstalled = installedApps.some((item) => item.id === singleApp.id);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    downloads,
    ratingAvg,
    ratings,
  } = singleApp;

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="space-y-7">
          <div className="flex flex-col md:flex-row gap-7">
            <figure className="w-full md:max-w-[350px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="aspect-square object-cover"
              />
            </figure>

            <div className="space-y-3 flex-1">
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="text-[#627382] text-lg">
                Developed by{" "}
                <span className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                  {companyName}
                </span>
              </p>

              <hr className="text-[#00193120]" />

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-16">
                <div className="flex flex-col gap-2">
                  <span>
                    <Download size={40} color="#00827A" />
                  </span>
                  <span>Downloads</span>
                  <span className="font-extrabold text-4xl">{downloads}M</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span>
                    <Star size={40} fill="#FF8811" color="#FF8811" />
                  </span>
                  <span>Ratings</span>
                  <span className="font-extrabold text-4xl">{ratingAvg}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span>
                    <img src={likeIcon} alt="Like Icon" className="size-10" />
                  </span>
                  <span>Reviews</span>
                  <span className="font-extrabold text-4xl">{reviews}K</span>
                </div>
              </div>
              <button
                disabled={isInstalled}
                aria-disabled={isInstalled}
                onClick={() => handleInstallApp("apps", singleApp)}
                className="btn btn-success text-white text-xl font-semibold mt-6"
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>

          <RatingChart ratings={ratings} />

          <div className="space-y-3.5">
            <h4 className="text-2xl font-semibold">Description</h4>
            <p className="text-[#627382]">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDetails;
