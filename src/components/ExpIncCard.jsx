import React from "react";

function ExpIncCard({ amt, expInc }) {
  return (
    <div className="border-4 border-slate-200 rounded-sm w-[200px]">
      <div className="font-lexend text-2xl p-3 m-3 ">
        <p className="m-2">{expInc}</p>
        <div>
          <p
            className={` m-2 ${
              expInc === "Expense" ? "text-[#F62424]" : "text-[#2CAA29]"
            }`}
          >
            &#8377; {amt ? `${amt}` : `0`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpIncCard;
