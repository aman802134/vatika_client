import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaWind } from "react-icons/fa6";
import { GiWateringCan } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { GiFlowerPot } from "react-icons/gi";

const SingleProduct = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="w-full h-full ">
            <img
              src="/goldenMoneyPplant.webp"
              alt="plant with pot"
              className="w-full h-full rounded-2xl bg-cover bg-center bg-no-repeat"
            />
          </div>
          <div className="w-full h-full flex flex-col space-y-4 py-5">
            <div className="w-full">
              <h1 className="font-Roboto_serif font-medium text-5xl tracking-wide text-DarkGreen">
                Golden money plant
              </h1>
            </div>
            <div className="w-full flex flex-col space-y-6">
              <span className="flex space-x-2">
                <FaStar className="text-LightGreen text-2xl" />
                <p className="text-black">4.5 | 220 reviews</p>
              </span>
              <span className="text-3xl text-DarkGreen font-Roboto_serif font-medium">
                ₹ 500
              </span>
              <p className="text-sm text-black font-Roboto_serif font-light tracking-wider text-justify">
                A symbol of good luck and prosperity, the Money Plant is perfect
                for adding a touch of green to your home. Easy to care for and
                adaptable to various conditions.
              </p>
            </div>
            <div className="w-full py-5 flex justify-between items-center">
              <span className="flex flex-col items-center space-y-3">
                <FaDog className="text-2xl text-GreenShade" />
                <p className="text-base font-Roboto_serif font-normal tracking-wider">
                  Not suitable for dog
                </p>
              </span>
              <span className="flex flex-col items-center space-y-3">
                <PiPottedPlantFill className="text-2xl text-GreenShade" />
                <p className="text-base font-Roboto_serif font-normal tracking-wider">
                  Low maintainance nedded
                </p>
              </span>
              <span className="flex flex-col items-center space-y-3">
                <FaWind className="text-2xl text-GreenShade" />
                <p className="text-base font-Roboto_serif font-normal tracking-wider">
                  Purify air
                </p>
              </span>
            </div>
            <div className="space-y-2">
              <button>More Details</button>
              <div className="flex flex-col space-y-3">
                <div className="w-full">
                  <p className="flex flex-col">
                    <span className="font-Roboto_serif font-medium text-xl">
                      Money plants
                    </span>
                    <span className="font-Roboto_serif font-light text-sm">
                      prefers bright, indirect sunlight but can tolerate low
                      light conditions. Water these plants every 1-2 weeks,
                      allowing the soil to dry out between waterings. Adjust
                      frequency based on light exposure. Thrives in high
                      humidity but can adapt to average household humidity
                      levels.
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="flex flex-col items-center space-y-3">
                    <GiWateringCan className="text-2xl text-GreenShade" />
                    <p className="text-base font-Roboto_serif font-normal tracking-wider flex flex-col space-y-2">
                      Water schedule
                      <span className="text-base font-Roboto_serif font-medium tracking-wider">
                        every : 1-2 weeks
                      </span>
                    </p>
                  </span>
                  <span className="flex flex-col items-center space-y-3">
                    <WiHumidity className="text-2xl text-GreenShade" />
                    <p className="text-base font-Roboto_serif font-normal tracking-wider flex flex-col space-y-2">
                      Humidity
                      <span className="text-base font-Roboto_serif font-medium tracking-wider">
                        Moderate
                      </span>
                    </p>
                  </span>
                  <span className="flex flex-col items-center space-y-3">
                    <GiFlowerPot className="text-2xl text-GreenShade" />
                    <p className="text-base font-Roboto_serif font-normal tracking-wider flex flex-col space-y-2">
                      sunlight
                      <span className="text-base font-Roboto_serif font-medium tracking-wider">
                        weekly 1-2 hours
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center py-5">
              <button className="w-1/2 outline-none border-none bg-orange text-white px-4 py-2 rounded-full text-center font-Roboto_serif font-medium tracking-wider">
                <Link to="/products">Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
