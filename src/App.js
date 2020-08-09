import React from 'react';
import './App.css';

function App() {

    const [wordIndex, setWordIndex] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const words = ["i", "am", "learning", "react"];
    const word = words[wordIndex]

    function getLetterCount(word) {
        let i = 0;
        while (i < 1000000) i++;
        return word.length
    }

    const letterCount = React.useMemo(() => getLetterCount(word), [word]);

    function handleChangeIndex() {
        const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
        setWordIndex(next);
    }

    return (
        <div className="App">
            <p>
                {word} has {letterCount} letters.
            </p>
            <button onClick={handleChangeIndex}>Next Word</button>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default App;
