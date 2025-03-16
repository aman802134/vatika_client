import React from "react";
import TestimonialCard from "../Other/TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center items-center py-10">
          <h1 className="text-4xl font-sans font-semibold">
            What our customer says
          </h1>
        </div>
        <div className="w-full pb-10 px-10 flex space-x-8 overflow-x-scroll overflow-y-hidden scrollbar-hidden bg-center bg-cover scroll-smooth">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
