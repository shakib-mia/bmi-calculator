import { useState } from "react";
import "./App.css";
import { FormData } from "./constants";

function App() {
  const form: FormData = { weight: 0, feet: 0, inches: 0 };
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inches = parseFloat(e.target.inches.value);
    const feet = parseFloat(e.target.feet.value);
    const weight = parseFloat(e.target.weight.value);
    const meter = (feet * 30.48 + (inches / 12) * 30.48) / 100;
    const bmi = weight / (meter * meter);
    e.target.reset();
    alert(bmi);
    // form.weight = 0;
    setDisabled(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    form[name] = parseFloat(value);
    !isNaN(form.inches) &&
      setDisabled(
        !form.weight && !form.feet && form.inches.toString().length === 3
      );

    console.log(form.inches.toString().length === 3);
    // e.target.reset();
  };

  return (
    <div className="bg-gray-900 h-screen w-screen text-slate-200 pt-7">
      <h4 className="text-3xl text-center">Be Aware of Your Health</h4>
      <h1 className="text-6xl text-center font-medium">Check your BMI</h1>

      <form
        className="p-4 py-10 bg-white w-1/2 mx-auto mt-10 rounded-2xl text-black"
        onSubmit={handleSubmit}
        onChange={(e) => handleChange(e)}
        id="form"
      >
        <div className="text-center text-2xl mb-2">Your Weight</div>
        <input
          type="number"
          className="w-full focus:outline-none border p-2 mb-4"
          placeholder="Weight"
          name="weight"
        />
        <div className="text-center text-2xl mb-2">Your Height</div>
        <div className="flex gap-4">
          <input
            type="number"
            className="w-full focus:outline-none border p-2"
            placeholder="Feet"
            name="feet"
          />
          <input
            type="number"
            className="w-full focus:outline-none border p-2"
            placeholder="Inches"
            name="inches"
          />
        </div>
        <div className="text-center mt-4">
          <input
            type="submit"
            value="Submit"
            className="disabled:cursor-not-allowed cursor-pointer disabled:opacity-60 px-4 py-2 bg-orange-700 rounded text-white"
            disabled={disabled}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
