import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count == 10) {
            document.body.style.color = 'blue';

        } else {
            document.body.style.color = 'black';

        }
    }, [count]);

    return (
        <div className="counter">
            <h1>Counter Kelompok 18, Coyyy!!!</h1>
            {count == 10 ? <p><b>Counter kelompok 18 sudah nyampe angka 10, ya ges ya!</b></p> :
                <p>Counter saat ini: {count}</p>}
            <>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </>
        </div>
    );
};

export default Counter;