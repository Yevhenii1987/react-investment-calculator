import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function inputValidation(input) {
    let isValid = {
      value: true,
      error: "",
    };

    if (input.initialInvestment < 0) {
      isValid.value = false;
      isValid.error =
        "Please enter an Initial Investment greater or equal to zero.";
    }

    if (input.annualInvestment < 0) {
      isValid.value = false;
      isValid.error =
        "Please enter an Annual Investment greater or equal to zero.";
    }

    if (input.expectedReturn <= 0) {
      isValid.value = false;
      isValid.error = "Please enter an Expected Return greater than zero.";
    }

    if (input.duration < 1) {
      isValid.value = false;
      isValid.error = "Please enter a Duration greater or equal to 1 year.";
    }

    return isValid;
  }

  const inputIsValid = inputValidation(userInput);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid.value && <p className="center">{inputIsValid.error}</p>}
      {inputIsValid.value && <Results input={userInput} />}
    </>
  );
}

export default App;
