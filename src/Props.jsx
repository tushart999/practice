import { useState } from "react";

function Props({ hehe }) {
    const [count, setCount] = useState(0);

    const handleNext = () => {
        setCount((currentIndex) => (currentIndex + 1) % hehe.length);
    };

    return (
        <div>
            <h3>Item is: {hehe[count]}</h3>
            <button onClick={handleNext}>Next</button>


        </div>


    );
}

export default Props;
