import React from "react";
import { PiTagSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { LuMinus } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({ value, handleBtn }) => {
  const {
    title,
    weight,
    image,
    actualPrice,
    discountedPrice,
    discount,
    isAdded,
    sNo,
  } = value;

  return (
    <Link
    //   to={`/${category}/${title}`}
      className="w-46 h-70 p-2 border border-zinc-300 rounded-lg flex flex-col items-center gap-2 relative shrink-0 "
    >
      {discount > 0 ? (
        <div className="discountBadge w-8 h-8 absolute top-0 rounded-b-2xl left-4 text-center text-white bg-blue-400 overflow-hidden">
          <p className="text-[0.70rem] text-center font-bold">{discount}%</p>
          <p className="text-[0.70rem] text-center font-bold -mt-1">OFF</p>
        </div>
      ) : (
        ""
      )}

      <div className="img w-38 h-38">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="details w-full h-full  flex flex-col items-start justify-between   ">
        <p className="title font-semibold text-sm line-clamp-2">{title}</p>
        <p className="weight text-xs text-zinc-600">{weight}</p>
        <div className="priceBtn w-full flex items-center justify-between">
          <div className="price text-xs font-semibold">
            <p>{discount > 0 ? discountedPrice : actualPrice}</p>
            <p className="text-zinc-600 line-through">
              {discount > 0 ? actualPrice : ""}
            </p>
          </div>
          {isAdded ? (
            <div className="border flex items-center justify-between text-white bg-green-700 border-green-700 w-16 h-8 rounded-md text-sm font-semibold overflow-hidden">
              <button className="bg-green-700 w-5 h-full flex items-center justify-end font-semibold text-xl pb-1">
                -
              </button>
              <button
                   
                className="h-full cursor-default w-5 text-center flex items-center justify-center"
              >
                1
              </button>
              <button className="bg-green-700 w-5 h-full flex items-center justify-start font-semibold text-xl pb-1">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleBtn(sNo)}
              className="border flex items-center justify-center bg-[#f7fff9] border-green-700 w-16 h-8 rounded-md text-sm text-green-800 font-semibold"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
