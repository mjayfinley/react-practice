import React from 'react';
import './App.css';

function App() {
    const [query, setQuery] = React.useState("");

    const searchInput = React.useRef(null);

    function handleClearSearch() {
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    return (
        <div className="App">
            <form>
                <input
                    type="text"
                    onChange={event => setQuery(event.target.value)}
                    ref={searchInput}
                />
                <button type="submit">Search</button>
                <button type="button" onClick={handleClearSearch}>Clear</button>
            </form>

            <p>{query}</p>
        </div>
    );
}

export default App;
