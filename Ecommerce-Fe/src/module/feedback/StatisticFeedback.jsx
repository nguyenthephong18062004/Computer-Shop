import React from "react";
import ProgressBar from "../../components/progressbar/ProgressBar";
import { FaStar } from "react-icons/fa";

const StatisticFeedback = ({ data }) => {
  const stars = Array(5).fill(0);
  // Ensure eachRating is an array with 5 elements (indices 0-4)
  const eachRating = Array.isArray(data?.eachRating) 
    ? data.eachRating 
    : [0, 0, 0, 0, 0];
  const ratingsQuantity = data?.ratingsQuantity || 0;
  const ratingsAverage = data?.ratingsAverage || 0;
  
  return (
    <div className="w-[1200px] h-[350px] bg-white rounded-lg mx-auto mt-6  border-2 border-solid feelback">
      <div className="flex flex-col items-center justify-center border-r-2 border-solid">
        <span className="text-3xl font-bold">{ratingsAverage} / 5</span>
        <span className="flex items-center justify-center gap-x-3 mt-3">
          {stars.map((item, index) => (
            <FaStar key={index} color="#ffba5a" size={20} />
          ))}
        </span>
        <span className="mt-3 text-xl">
          {ratingsQuantity} đánh giá và nhận xét
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="flex flex-row items-center justify-between gap-x-5 ">
          <span className="flex flex-row items-center gap-x-2 ">
            5 <FaStar color="#ffba5a" size={20} />
          </span>
          <ProgressBar
            value={ratingsQuantity > 0 ? (eachRating[4] / ratingsQuantity) * 500 : 0}
          />
          <span>{eachRating[4] || 0} đánh giá</span>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-5">
          <span className="flex flex-row items-center gap-x-2 ">
            4 <FaStar color="#ffba5a" size={20} />
          </span>
          <ProgressBar
            value={ratingsQuantity > 0 ? (eachRating[3] / ratingsQuantity) * 500 : 0}
          />
          <span>{eachRating[3] || 0} đánh giá</span>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-5">
          <span className="flex flex-row items-center gap-x-2 ">
            3 <FaStar color="#ffba5a" size={20} />
          </span>
          <ProgressBar
            value={ratingsQuantity > 0 ? (eachRating[2] / ratingsQuantity) * 500 : 0}
          />
          <span>{eachRating[2] || 0} đánh giá</span>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-5">
          <span className="flex flex-row items-center gap-x-2 ">
            2 <FaStar color="#ffba5a" size={20} />
          </span>
          <ProgressBar
            value={ratingsQuantity > 0 ? (eachRating[1] / ratingsQuantity) * 500 : 0}
          />
          <span>{eachRating[1] || 0} đánh giá</span>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-5">
          <span className="flex flex-row items-center gap-x-2 ">
            1 <FaStar color="#ffba5a" size={20} />
          </span>
          <ProgressBar
            value={ratingsQuantity > 0 ? (eachRating[0] / ratingsQuantity) * 500 : 0}
          />
          <span>{eachRating[0] || 0} đánh giá</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticFeedback;
