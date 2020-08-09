import React from 'react';
import './App.css';

const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

function App() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const response = await fetch(endpoint);

        const data = await response.json();
        console.log(data)
        setUser(data.title)
    }

    return (
        <div className="App">
            <p>{user}</p>
        </div>
    );
}

export default App;
