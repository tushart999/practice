import { useState } from "react";

function InputField() {
  const [val, setVal] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      />

      <h1>{val}</h1>

      <button onClick={() => setVal("")}>Clear Text</button>
    </div>
  );
}

export default InputField;
