import Container from "../Container/Container";
import heroImg from "../../assets/hero.png";
import appStoreLogo from "../../assets/app-store-logo.png";
import playStoreLogo from "../../assets/play-store-logo.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="mt-6 pt-4">
      <Container>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="space-y-3.5 text-center">
            <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              We Build <br className="hidden sm:block" />{" "}
              <span className="text-[#632EE3]">Productive</span> Apps
            </h1>
            <p className="max-w-3xl mx-auto text-[#627382]">
              At HERO.IO, we design web applications that blend creativity with
              functionality—making your digital life smoother, smarter, and more
              delightful.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <Link
                to="https://play.google.com/store/games?device=phone"
                className="btn font-semibold text-xl"
              >
                <img
                  src={playStoreLogo}
                  alt="Play Store Logo"
                  className="size-7"
                />
                <span>Google Play</span>
              </Link>
              <Link
                to="https://www.apple.com/app-store/"
                className="btn font-semibold text-xl"
              >
                <img
                  src={appStoreLogo}
                  alt="App Store Logo"
                  className="size-7"
                />
                <span>App Store</span>
              </Link>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="App Screenshot" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
