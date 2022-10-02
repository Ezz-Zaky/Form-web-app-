import {useState} from 'react';
function useInput(validateValue)
{
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValueModified, setEnteredValueModified] = useState(false);
    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && enteredValueModified
    function inputChangeHandler(event) {
        setEnteredValue(event.target.value);
    }
    function inputBlurHandler() {
        setEnteredValueModified(true);
    }
    function reset()
    {
        setEnteredValue("");
        setEnteredValueModified(false);
    }
    return {
        value:enteredValue,
        isValid: enteredValueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset

    };
}
export default useInput;