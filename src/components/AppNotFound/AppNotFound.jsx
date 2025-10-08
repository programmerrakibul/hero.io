import notFoundImg from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-6 py-4">
      <div>
        <img src={notFoundImg} alt="Not Found" />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-semibold">Oops, App Not Found!</h1>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
    </div>
  );
};

export default AppNotFound;
