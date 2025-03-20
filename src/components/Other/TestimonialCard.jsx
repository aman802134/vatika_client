import React from "react";
import person from "/person.jpg";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";

const TestimonialCard = () => {
  return (
    <>
      <div className="w-72 min-w-72 h-48 py-2.5 px-2.5 rounded-lg shadow-xl space-y-1.5 glassmorphism">
        <span className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full">
            <img
              src={person}
              alt="person with glasses"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="text-lg text-white font-sans font-semibold">
            Thomas Hendrison
          </p>
        </span>
        <p className="text-xs text-balance text-white font-mono font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          obcaecati iste possimus est sint, nam veniam facere voluptatum
          reprehenderit
        </p>
        <div className="w-full flex justify-between items-center py-4">
          <span className="text-xs text-white font-sans font-semibold">
            8:35 PM - 16March , 2025
          </span>
          <span className="flex space-x-1">
            <MdStar size={20} className="text-yellow-300" />
            <MdStar size={20} className="text-yellow-300" />
            <MdStar size={20} className="text-yellow-300" />
            <MdStarHalf size={20} className="text-yellow-300" />
          </span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
