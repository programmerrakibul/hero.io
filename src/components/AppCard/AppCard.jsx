import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AppCard = ({ singleApp }) => {
  const { id, image, title, downloads, ratingAvg } = singleApp;

  return (
    <Link to={`app-details/${id}`}>
      <div className="space-y-4 bg-white p-4 rounded-md shadow-md hover:scale-105 duration-300">
        <figure>
          <img
            src={image}
            alt={title}
            className="aspect-square object-cover rounded-md"
          />
        </figure>

        <div className="space-y-3">
          <h3 className="font-medium text-xl">{title}</h3>
          <div className="flex justify-between items-center">
            <p className="flex items-center justify-center gap-1.5 font-medium text-[#00D390] py-1 px-2 rounded-md bg-[#F1F5E8]">
              <span>
                {" "}
                <Download size={16} />
              </span>{" "}
              <span>{downloads}M</span>
            </p>
            <p className="flex items-center justify-center gap-1.5 font-medium text-[#FF8811] py-1 px-2 rounded-md bg-[#FFF0E1]">
              <span>
                <Star fill="#FF8811" size={16} />
              </span>{" "}
              <span>{ratingAvg}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
