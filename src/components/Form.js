import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="w-[400px] h-full  shadow-md  border border-lime-500 ">
        <h1 className="h-16 text-xl font-bold bg-lime-500 flex items-center justify-center">
          Complete the information
        </h1>
        <div className="flex flex-col gap-4 mt-4  p-5 ">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-lime-500 border p-2 w-1/2 focus:border-lime-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-lime-500 border p-2 w-1/2 focus:border-lime-500 focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="border-lime-500 border p-2 focus:border-lime-500 focus:outline-none"
            required
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Zipcode"
              className="border-lime-500 border p-2 w-1/2 focus:border-lime-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border-lime-500 border p-2 w-1/2 focus:border-lime-500 focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Country"
            className="border-lime-500 border p-2 focus:border-lime-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-lime-500 border p-2 focus:border-lime-500 focus:outline-none"
            required
          />
          <button className="bg-lime-500 text-white p-3 mt-4 w-full text-lg">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
