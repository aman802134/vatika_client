import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const Root_layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root_layout;
