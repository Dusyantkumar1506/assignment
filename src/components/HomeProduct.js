import React from "react";
import { Rating } from "@mui/material";
import Form from "./Form";
import HomeLinks from "./HomeLinks";

const HomeProduct = () => {
  const ratingValue = 4;
  return (
    <>
      <div className="mt-4 px-4">
        <HomeLinks />
      </div>

      <div className="flex mt-8 px-4">
        <div className="flex flex-col">
          <div>
            <h1 className="text-[34px] font-medium ">
              Makita Cordless Hammer Drill, 18V 3Ah, 2 Batteries DHP453RFX4
            </h1>
          </div>
          <div className="flex flex-row mt-3 text-[14px] items-center gap-8">
            <div className="text-[#6f676c]">Ref 82159295</div>
            <div>
              <div className="flex gap-3 items-center">
                <Rating readOnly size="medium" value={ratingValue} />
                <span className="text-[#6f676c] underline underline-[#6f676c]">
                  44 reviews
                </span>
              </div>
            </div>
            <div className="text-[#6f676c] underline underline-[#6f676c]">
              Ask a Question
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="w-[130px] h-[120px] border border-black hidden  md:flex items-center justify-center ">
              <img
                src="https://taladro-git-main-rishabsingla21-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-image.e72a9dd1.jpg&w=1920&q=75"
                alt="product"
                className="h-28 w-28"
              />
            </div>
            <div className="relative">
              <div className="absolute  top-16 left-[38px] bg-lime-500 text-white p-[3px] h-32 w-32 rounded-full overflow-hidden">
                <div className="relative border-white border-[3px]  h-full w-full  flex justify-center items-center rounded-full overflow-hidden">
                  <div className="bg-lime-500 h-full w-full flex justify-center items-center">
                    <h1 className=" text-xl font-bold w-5 flex items-center justify-center ">
                      ONLY 1.87$
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src="https://taladro-git-main-rishabsingla21-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-image.e72a9dd1.jpg&w=1920&q=75"
                alt="product"
                className=" w-[360px] h-[340px] md:w-[650px] md:h-[606px] rounded-md shadow-md"
              />
            </div>
            <div className="ml-8 mt-2">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
