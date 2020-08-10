import React, { useReducer } from 'react';
import './App.css';

const initialState = { username: "", isAuth: false };

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { username: action.payload.username, isAuth: true };
        case "SIGNOUT":
            return { username: "", isAuth: false };
        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleLogin() {
        dispatch({ type: "LOGIN", payload: { username: "Ted" } });
    }

    function handleSignout() {
        dispatch({ type: "SIGNOUT" });
    }

    return (
        <>
            Current user: {state.username}, isAuthenticated: {state.isAuth}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignout}>Signout</button>
        </>
    );
}

export default App;
