import React from 'react';
import './App.css';

const UserContext = React.createContext();

function App() {

    const [user] = React.useState({ name: "Samantha" })

    return (
        <UserContext.Provider value={user}>
            <Main />
        </UserContext.Provider>
    );
}

const Main = () => (
    <>
        <Header />
        <div>Main app content...</div>
    </>
)

const Header = () => {
    const user = React.useContext(UserContext);

    return <header>Welcome, {user.name}!</header>
}

export default App;
