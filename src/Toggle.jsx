import React, { useState } from "react";
import ToggleComponent from "./ToggleComponent";

function Toggle() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Toggle:</h1>
      {display ? (
        <h1>
          <ToggleComponent />
        </h1>
      ) : null}
      <button onClick={() => setDisplay(!display)}>Toggle Button
      </button>
    </div>
  );
}

export default Toggle;
