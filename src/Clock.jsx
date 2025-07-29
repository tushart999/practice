import { useState, useEffect } from "react";

function Clock({colour}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup function to clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString(); // e.g., "10:45:01 AM"

    return (
        <div style={{ fontSize: "2rem", fontFamily: "monospace",color:colour }}>
            {formattedTime}
        </div>
    );
}

export default Clock;
