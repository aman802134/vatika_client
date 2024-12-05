import ProductCard from "../../components/other/ProductCard";
import ProductFilterUtility from "../../components/other/ProductFilterUtility";
import ApiRequestService from "../../customHooks/useApiRequestHandler";

const ProductPage = () => {
  const products = ApiRequestService.useGetProduct();
  return (
    <>
      <main className="w-full h-[83vh] max-h-[83vh] bg-BodyColor">
        <div className="w-full h-full block md:flex flex-wrap justify-between">
          <div className="w-72 shadow-sm bg-lightWhite h-[83vh] max-h-[83vh] overflow-x-hidden overflow-y-scroll filterScroller">
            <ProductFilterUtility />
          </div>
          <div className="w-full h-full flex-1 flex-col space-y-5 py-5">
            <div className="w-full flex justify-start items-center px-10">
              <div className="w-2/5 flex relative">
                <label htmlFor="search"></label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search your product here .."
                  required
                  className="w-full p-2 bg-ButtonBg rounded-full outline-none border-none px-2 text-sm font-Roboto_serif font-medium"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-DarkGreen rounded-full px-5 py-2 text-lightWhite">
                  search
                </button>
              </div>
            </div>
            <div className="w-full h-full overflow-scroll">
              <div className="flex justify-start items-center px-10">
                <h1 className="font-Roboto_serif font-medium text-DarkGreen text-lg">
                  Showing 190 product
                </h1>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {products.data?.map((product) => (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
