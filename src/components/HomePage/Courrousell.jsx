import React from "react";
import { Link } from "react-router-dom";
import leaf1 from "/leaf_3.png";
import leaf2 from "/Courrousel.jpg";

const Courrousell = () => {
  return (
    <>
      <section className="w-full h-[80vh] bg-courrousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[70%_30%] overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden">
        <div className="w-full">
          <div className=" hidden lg:block absolute top-16 -left-32">
            <img src={leaf1} alt="leaf image" className="h-[28rem]" />
          </div>
          <div className="px-5 py-5 md:px-10 md:py-5 lg:px-28 lg:py-14 xl:px-48">
            <div className="w-full flex flex-col">
              <h1 className="text-3xl md:text-6xl text-white font-serif font-bold uppercase">
                Macadamia
              </h1>
              <h2 className="text-sm md:text-lg text-gray-300 font-mono font-bold tracking-wider">
                Glossy green leaves
              </h2>
              <p className="text-justify text-gray-400 text-xs md:text-sm font-mono font-medium py-2.5 w-full md:w-96 lg:w-2/3 xl:w-2/2">
                Glossy green leaves with wavy margin.Flowers are pink followed
                by woody edible fruits.Required winter protection and need a hot
                sunny shelter protection. Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Sit laudantium
                quia iusto eveniet molestiae dolorum voluptatibus ab numquam
                neque. Atque distinctio dolor earum modi ratione illo blanditiis
                aliquid ab? Iure!,
              </p>
            </div>
            <div className="w-full py-8 group/btn">
              <button className="px-4 md:px-5 py-2.5 rounded-full transition-all bg-auth-light hover:bg-login-btn group-hover/btn:-translate-y-2.5">
                <Link
                  to="/products"
                  className="text-white text-lg font-mono font-light"
                >
                  Show details
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:px-20 lg:px-10 py-1.5">
          <div className="w-72 md:w-60 xl:w-72 rounded-t-full rounded-b-full">
            <img
              src={leaf2}
              alt="image of plant with pot"
              className="w-full h-full rounded-t-full rounded-b-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courrousell;
