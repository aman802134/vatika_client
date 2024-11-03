import { Link } from "react-router-dom";
import image from "/courrouselPlant.png";
import leafImage from "/leaf.png";
import NewProductCard from "../../components/other/NewProductCard";
import ProductCard from "../../components/other/ProductCard";
import SingleProduct from "../../components/other/SingleProduct";

const HomePage = () => {
  return (
    <>
      <main className="w-full overflow-hidden h-[29rem] max-h-[29rem] px-20 py-5 grid grid-cols-1 md:grid-cols-2 bg-BodyColor">
        <div className="absolute top-20 left-0">
          <img src={leafImage} alt="leaf image" className="w-20 h-20" />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start py-10 space-y-4">
          <h1 className="font-Roboto_slab font-medium text-5xl tracking-wide text-justify">
            Welcome to our Vatika Store.
          </h1>
          <h3 className="font-Roboto_slab font-medium text-xl tracking-wide text-justify">
            we sell fresh flowers and plants,connect with nature through us.
          </h3>
          <p className="font-Roboto_slab font-normal text-sm tracking-wide text-justify">
            Enjoy the greenary and transform your environment fresh and green
            with us. We have a wide range of flowers and plants. Buy now and
            enjoy.
          </p>
          <div className="w-full flex items-center justify-start py-10">
            <button className="outline-none border-none bg-DarkGreen text-white px-4 py-2 rounded-full text-center font-Young_serif font-light tracking-wider">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={image} className="w-full h-full" alt="plant image" />
        </div>
      </main>
      <section className="bg-lightWhite">
        <div className="flex flex-col py-3 px-5 space-y-5">
          <h1 className="font-Roboto_slab font-medium text-5xl tracking-wide text-center text-DarkGreen">
            New Arrivals
          </h1>
          <div className="w-full pt-10 pb-5 px-10 overflow-y-hidden overflow-x-scroll flex space-x-4 newArrival">
            <NewProductCard />
            <NewProductCard />
            <NewProductCard />
            <NewProductCard />
            <NewProductCard />
            <NewProductCard />
          </div>
        </div>
      </section>
      <section className="bg-BodyColor py-5 px-5">
        <div className="flex flex-col py-3 px-5 space-y-5">
          <h1 className="font-Roboto_slab font-medium text-5xl tracking-wide text-center text-DarkGreen">
            All time best selling
          </h1>
        </div>
        <div>
          <div className="w-full pt-10 pb-5 px-10 overflow-y-hidden overflow-x-scroll flex space-x-4 newArrival">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-3">
          <button className="w-1/5 outline-none border-[1px] border-DarkGreen text-DarkGreen text-xl px-4 py-2 rounded-full text-center font-Roboto_serif font-light tracking-wider transition-all hover:bg-DarkGreen hover:text-white">
            <Link to="/products">View All Products</Link>
          </button>
        </div>
      </section>
      <section className="w-full h-full py-10 px-10  bg-skingcolor">
        <SingleProduct />
      </section>
    </>
  );
};

export default HomePage;
