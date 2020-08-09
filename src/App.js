import React from 'react';
import './App.css';

function App() {
    const [time, setTime] = React.useState();
    const [count, setCount] = React.useState(0);

    const inc = React.useCallback(
        function handleIncrementCount() {
            setCount(prevCount => prevCount + 1);
        },

        [setCount]
    );

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            const currentTime = JSON.stringify(new Date(Date.now()));
            setTime(currentTime);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [time]);

    return (
        <div className="App">
            <p>The current time is: {time}</p>
            <p>Count: {count}</p>
            <button onClick={inc}>+</button>
        </div>
    );
}

export default App;
