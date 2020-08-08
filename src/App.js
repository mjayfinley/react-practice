import React from 'react';
import './App.css';

function App() {
    const [developer, setDeveloper] = React.useState({
        language: "",
        yearsExperience: 0,
        isEmployed: false,
        employmentStatus: ""
    })

    function handleChangeYearsExperience(event) {
        const years = event.target.value

        setDeveloper({ ...developer, yearsExperience: years })
    }

    function handleToggleEmployment(event) {

        setDeveloper(prevState => {
            return { ...prevState, isEmployed: !prevState.isEmployed }
        })

        if (developer.isEmployed) {
            developer.employmentStatus = "Employed"
        } else {
            developer.employmentStatus = "Un-employed"
        }
    }

    return (
        <div className="App">
            <button
                onClick={() =>
                    setDeveloper({
                        language: "javascript",
                        yearsExperience: 0
                    })
                }
            >
                Change language to JS
            </button>

            <input
                type="number"
                value={developer.yearsExperience}
                onChange={handleChangeYearsExperience}
            />

            <button onClick={handleToggleEmployment}>Toggle Employement Status</button>

            <p>I am now learning {developer.language}.</p>
            <p>I have {developer.yearsExperience} years of experience.</p>
            <p>I am {developer.employmentStatus}</p>
        </div>
    );
}

export default App;
