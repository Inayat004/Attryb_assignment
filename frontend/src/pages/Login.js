import React from "react";

function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dealer Login</h2>

      <input type="email" placeholder="Enter email" /><br /><br />
      <input type="password" placeholder="Enter password" /><br /><br />

      <button>Login</button>
    </div>
  );
}

export default Login;