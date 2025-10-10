import Container from "../../Container/Container";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ErrorImg from "../../../assets/error-404.png";
import Button from "../../Button/Button";

const Error = () => {
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Oops, page not found!
              </h1>
              <p className="text-[#627382] text-sm sm:text-base">
                The page you are looking for is not available.
              </p>
              <Button to="/">Go Back</Button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Error;
