import { Link } from "react-router-dom";

const DashBoardHeader = () => {
  return (
    <>
      <header className="w-full flex flex-col space-y-4 shadow py-2 px-3 rounded-md overflow-x-scroll md:overflow-x-hidden">
        <div className="w-full flex justify-end items-center shadow py-2 px-2 rounded-md">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className="font-Roboto_serif font-normal text-lg tracking-wide">
                Good Morning , Aman
              </h1>
              <p className="font-Roboto_serif font-normal text-sm tracking-wide text-gray-500">
                welcome to dashboard
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <img
                  src="/auth.jpg"
                  alt=""
                  className="w-full h-full bg-center rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-60 min-w-60 h-full">
            <Link
              to="/expenses"
              className="w-full flex flex-col justify-between items-start py-2 px-4 space-y-2 rounded-md shadow2"
            >
              <p className="text-2xl font-Roboto_serif font-medium">₹485960</p>
              <h3 className="text-sm font-Roboto_serif font-light tracking-wider">
                Expenses
              </h3>
            </Link>
          </div>
          <div className="w-60 min-w-60 h-full">
            <Link
              to="/expenses"
              className="w-full flex flex-col justify-between items-start py-2 px-4 space-y-2 rounded-md shadow2"
            >
              <p className="text-2xl font-Roboto_serif font-medium">4960</p>
              <h3 className="text-sm font-Roboto_serif font-light tracking-wider">
                Total Products
              </h3>
            </Link>
          </div>
          <div className="w-60 min-w-60 h-full">
            <Link
              to="/expenses"
              className="w-full flex flex-col justify-between items-start py-2 px-4 space-y-2 rounded-md shadow2"
            >
              <p className="text-2xl font-Roboto_serif font-medium">960</p>
              <h3 className="text-sm font-Roboto_serif font-light tracking-wider">
                Total Orders
              </h3>
            </Link>
          </div>
          <div className="w-60 min-w-60 h-full">
            <Link
              to="/expenses"
              className="w-full flex flex-col justify-between items-start py-2 px-4 space-y-2 rounded-md shadow2"
            >
              <p className="text-2xl font-Roboto_serif font-medium">860</p>
              <h3 className="text-sm font-Roboto_serif font-light tracking-wider">
                Total Sales
              </h3>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashBoardHeader;
