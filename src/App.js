import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWegiht] = useState(120);

  function onHeightChange(event) {
    setHeight(event.target.value);
  }
  function onWeightChange(event) {
    setWegiht(event.target.value);
  }

  const output = useMemo(()=>{
      const calculatorHeight = height/100;
      return(weight/(calculatorHeight*calculatorHeight)).toFixed(1)
  },[weight,height]);
  return (
    <div className="">
    <main className="bg-fuchsia-400 justify-center items-center text-center flex flex-col m-auto max-w-[40rem] mt-36 shadow-lg border rounded-3xl">
      <h1 className="text-3xl p-4 font-sans font-bold bg-fuchsia-700 w-full rounded-tr-3xl rounded-tl-3xl text-fuchsia-200 ">BMI CALCULATOR</h1>
      <div className="text-2xl h-40 p-4 font-bold">
        <p>Weight : {weight} Kg</p>
        <input
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
          className="w-full "
        />
        <p>Height : {height} Cm</p>
        <input
          type="range"
          step="1"
          min="102"
          max="200"
          onChange={onHeightChange}
          className="w-full"
        />
      </div>
      <div>
        <p className="text-xl font-bold">Your BMI is</p>
        <p className="text-xl p-2 font-bold">{output}</p>
      </div>
    </main>
    </div>
  );
}

export default App;
