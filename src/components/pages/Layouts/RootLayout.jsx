import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import AppProvider from "../../../Providers/AppProvider";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <AppProvider>
          <Outlet />
        </AppProvider>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default RootLayout;
