import React from 'react';
import './App.css';

function useAPI(endpoint) {
    const [value, setValue] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch(endpoint);
        const data = await response.json();
        setValue(data);
    }

    return value;
}

function App() {
    const todos = useAPI("https://jsonplaceholder.typicode.com/todos")

    return (
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    );
}

export default App;
