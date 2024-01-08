import "./App.css";
import Container from "./components/Container";

function App() {
  // lavender- #BDCFF1
  // dark blue- #2D3046
  // red- #F62424
  // green- #2CAA29

  return (
    <>
      <div className="flex items-center justify-center flex-col bg-white">
        <div className="bg-[#BDCFF1] w-[600px] h-[150px] flex justify-center items-center rounded-tl-xl rounded-tr-xl">
          <div className="bg-white p-3 text-2xl rounded-2xl font-semibold font-lexGiga">
            Expense Tracker
          </div>
        </div>
        <div className="bg-[#2D3046] w-[600px] h-auto p-8 rounded-bl-xl rounded-br-xl">
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
