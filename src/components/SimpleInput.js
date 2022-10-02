import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetName
  } = useInput(name=>name.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmail
  } = useInput(email=>email.trim().includes("@") && email.trim().length > 1);
  
  let forumIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    forumIsValid = true;
  }
  function forumSubmissionHandler(event) {
    event.preventDefault();
    if (!forumIsValid) {
      return;
    }
    resetName();
    resetEmail();
  }
  return (
    <form onSubmit={forumSubmissionHandler}>
      <div
        className={
          !nameInputHasError
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p>Name must contain characters</p>
        )}
      </div>
      <div
        className={
          !emailInputHasError
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p>email must contain more than 1 character and '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!forumIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
