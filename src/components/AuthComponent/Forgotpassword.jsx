import React from "react";

function Signup() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__heading">Forgot Password</h2>

      <p className="form__forgotPasswordDesc">
        Get reset token to your mailbox
      </p>

      <div className="form__fieldsWrapper">
        <input type="email" placeholder="Email" />
      </div>

      <button type="submit" className="form__submitBtn">
        Send
      </button>
    </form>
  );
}

export default Signup;