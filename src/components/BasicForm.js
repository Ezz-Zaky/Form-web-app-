import useInput from "./hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fnameInputHasError,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset:resetFname
  } = useInput(fname=>fname.trim() !== "");
  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lnameInputHasError,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset:resetLname
  } = useInput(lname=>lname.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmail
  } = useInput(email=>email.trim().includes("@") && email.trim().length > 1);
  let forumIsValid = enteredFnameIsValid &&enteredLnameIsValid&&enteredEmailIsValid;
  function forumSubmissionHandler(event) {
    event.preventDefault();
    if (!forumIsValid) {
      return;
    }
    resetFname();
    resetLname();
    resetEmail();
  }
  return (
    <form onSubmit={forumSubmissionHandler}>
      <div
        className={
          !fnameInputHasError
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          onChange={fnameChangeHandler}
          onBlur={fnameBlurHandler}
          value={enteredFname}
        />
        {fnameInputHasError && (
          <p className="error-text">Name must contain characters</p>
        )}
      </div>
      <div
        className={
          !lnameInputHasError
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          onChange={lnameChangeHandler}
          onBlur={lnameBlurHandler}
          value={enteredLname}
        />
        {lnameInputHasError && (
          <p className="error-text">Name must contain characters</p>
        )}
      </div>
      <div
        className={
          !emailInputHasError
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">email must contain '@'</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!forumIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
