import Container from "../../Container/Container";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ErrorImg from "../../../assets/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="min-h-[calc(100dvh-100px)] flex justify-center items-center my-8 py-4">
        <Container>
          <div className="flex flex-col justify-center  items-center gap-10">
            <div>
              <img src={ErrorImg} alt="404" />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
              <p className="text-[#627382]">
                The page you are looking for is not available.
              </p>
              <button
                onClick={() => navigate("/")}
                className="btn font-semibold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
              >
                Go Back
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Error;
