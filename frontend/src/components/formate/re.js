import React from 'react'
function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    function handleNameChange(event) {
      const { value } = event.target;
      if (nameRegex.test(value)) {
        setName(value);
        setErrorMessage("");
      } else {
        setErrorMessage("Please use the correct format for your name.");
      }
    }
  
    function handleEmailChange(event) {
      const { value } = event.target;
      if (emailRegex.test(value)) {
        setEmail(value);
        setErrorMessage("");
      } else {
        setErrorMessage("Please use the correct format for your email address.");
      }
    }
  
    function handlePasswordChange(event) {
      const { value } = event.target;
      if (passwordRegex.test(value)) {
        setPassword(value);
        setErrorMessage("");
      } else {
        setErrorMessage("Please use the correct format for your password.");
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      // Submit the form data
    }
  
    return (
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }

  export default RegistrationForm