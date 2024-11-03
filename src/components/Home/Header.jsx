import { Link } from "react-router-dom";
import image from "/plant.jpg";
import Profile from "../Auth/Profile";

const Header = () => {
  return (
    <>
      <header className="px-5 md:px-10 bg-lightWhite w-full h-20 max-h-20 shadow-sm grid grid-cols-2 md:grid-cols-3">
        <nav className="h-full hidden md:flex items-center">
          {/* <div>this is mobile devices navigations</div> */}
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                to="/"
                className="text-lg font-Roboto_serif font-medium text-BlackColor"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-Roboto_serif font-medium text-BlackColor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-lg font-Roboto_serif font-medium text-BlackColor"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-Roboto_serif font-medium text-BlackColor"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <div className="h-full flex items-center justify-center">
          <Link to="/" className="logo flex items-center space-x-2">
            <img src={image} alt="plantSvg" width={30} height={30} />
            <h1 className="text-3xl text-BlackColor font-Young_serif font-medium tracking-wide ">
              Vatika
            </h1>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Profile />
        </div>
      </header>
    </>
  );
};

export default Header;
