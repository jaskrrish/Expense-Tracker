import React from "react";

function TransBox({ amt, desc, expense }) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white text-black w-[300px] h-[50px] p-2 rounded-tl-lg rounded-bl-lg flex relative">
        <div className="mx-3 absolute left-3 font-lexend ">{desc}</div>
        <div className="ml-16 mr-3 absolute font-lexGiga right-3">
          &#8377;{amt}
        </div>
      </div>
      <div
        className={`w-[8px] h-[50px] ${
          expense ? "bg-[#F62424]" : "bg-[#2CAA29]"
        } `}
      ></div>
    </div>
  );
}

export default TransBox;
