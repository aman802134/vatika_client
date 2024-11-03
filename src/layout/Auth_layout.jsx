import { Outlet } from "react-router-dom";

const Auth_layout = () => {
  return (
    <>
      <main className="w-full h-[100vh] max-h-[100vh] grid grid-cols-1 md:grid-cols-2  group/img">
        <div className="w-full h-full">
          <img
            src="/auth.jpg"
            alt="garden image with flower"
            className="w-full h-full bg-contain bg-center bg-no-repeat filter grayscale transition-all group-hover/img:grayscale-0 "
          />
        </div>
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Auth_layout;
