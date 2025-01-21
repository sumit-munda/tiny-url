import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState(""); // Local state for input value

  const handleClick = () => {
    setInputValue(value); // Updates parent state when user clicks "shorten"
    setValue(""); // Clears the local input field
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value} // Uses local state value for the input field
          onChange={(e) => setValue(e.target.value)} // Updates local state on user input
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
