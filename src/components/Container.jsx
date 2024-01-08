import React, { useEffect, useState } from "react";
import ExpCard from "./ExpIncCard";
import AddTranscations from "./AddTranscations";
import TransBox from "./TransBox";

function Container() {
  const [balAmt, setBalAmt] = useState(0);
  const [expAmt, setExpAmt] = useState(0);
  const [incAmt, setIncAmt] = useState(0);
  // const [desc, setDesc] = useState();
  const [transactions, setTransactions] = useState(false);
  const [expTrans, setExpTrans] = useState([]);
  useEffect(() => {
    setBalAmt(incAmt - expAmt);
  }, [expAmt, incAmt]);

  const transData = (amt, desc, expense) => {
    if (expense) {
      setExpAmt((prev) => prev + amt);
    } else {
      setIncAmt((prev) => prev + amt);
    }
    setTransactions((prev) => !prev);
    setExpTrans((prev) => [
      { id: Date.now(), amt: amt, desc: desc, expense: expense },
      ...prev,
    ]);
  };

  //?Local Storage-setItem
  useEffect(() => {
    window.localStorage.setItem(
      "TransInfo",
      JSON.stringify({ expTrans, incAmt, expAmt, balAmt })
    );
  }, [expTrans, incAmt, expAmt, balAmt]);

  //?Local Storage- getItem
  useEffect(() => {
    const TransInfo = JSON.parse(window.localStorage.getItem("TransInfo"));
    //?
    //?
    if (TransInfo.expTrans.length) setExpTrans(TransInfo.expTrans);
    if (TransInfo.incAmt) setIncAmt(TransInfo.incAmt);
    if (TransInfo.incAmt) setExpAmt(TransInfo.expAmt);
    if (TransInfo.expAmt) setBalAmt(TransInfo.balAmt);
  }, []);

  return (
    <>
      <div className="text-white text-2xl font-medium mt-4 mb-4 ">
        <div className="flex ml-8 mt-4 mb-4">
          <p className="font-lexGiga ">
            BALANCE :{" "}
            <span className="ml-2 "> &#8377;{balAmt ? `${balAmt}` : "0"}</span>
          </p>
          <div className="ml-20">
            <button
              onClick={() => {
                setTransactions((prev) => !prev);
              }}
              className="bg-black font-itim rounded-full ml-12 px-2 w-25 text-center border-2 drop-shadow-xl border-black hover:bg-[#111111] hover:border-white"
            >
              {transactions ? "Cancel" : "Add"}
            </button>
          </div>
        </div>
        <div className=" mt-16 mb-10">
          {transactions ? (
            <div className="flex justify-evenly">
              <div className=" bg-white rounded-lg w-[400px] ">
                <AddTranscations transData={transData} />
              </div>
            </div>
          ) : (
            <div className="flex justify-evenly">
              <ExpCard amt={expAmt} expInc={"Expense"} />
              <ExpCard amt={incAmt} expInc={"Income"} />
            </div>
          )}
        </div>
        <div className="m-2">
          <p className="m-4 text-2xl font-semibold font-lexGiga">
            Transcations
          </p>
          {expTrans.map((expTrans) => (
            <div key={expTrans.id} className="m-4">
              <TransBox
                amt={expTrans.amt}
                desc={expTrans.desc}
                expense={expTrans.expense}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Container;
