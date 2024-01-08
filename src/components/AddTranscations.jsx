import React, { useState } from "react";

function AddTranscations({ transData }) {
  const [amt, setAmt] = useState(0);
  const [desc, setDesc] = useState();
  const [expense, setExpense] = useState(false);

  const Transbutton = (e) => {
    e.preventDefault();
    transData(amt, desc, expense);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmt(Number(e.target.value))}
        className="p-2 mt-4 mb-2 rounded-xl bg-[#D9D9D9] text-black"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
        className="p-2 m-2 rounded-xl bg-[#D9D9D9] text-black"
      />
      <div className="text-black mt-2 mb-2">
        <input
          type="radio"
          name="ExpInc"
          id="Expense"
          onChange={() => setExpense(true)}
          className="p-2 m-2"
        />
        <label htmlFor="Expense" className="mr-2 cursor-pointer">
          Expense
        </label>
        <input
          type="radio"
          name="ExpInc"
          id="Income"
          onChange={() => setExpense(false)}
          className="p-2 m-2"
        />
        <label htmlFor="Income" className="mr-2 cursor-pointer">
          Income
        </label>
      </div>
      <button
        onClick={Transbutton}
        className="bg-black rounded-full p-3 px-4 m-2 mb- drop-shadow-xl border-2 border-black hover:bg-[#191919] hover:border-white font-itim"
      >
        Add Transaction
      </button>
    </>
  );
}

export default AddTranscations;
