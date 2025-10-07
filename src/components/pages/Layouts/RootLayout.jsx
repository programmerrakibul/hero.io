import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const RootLayout = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
