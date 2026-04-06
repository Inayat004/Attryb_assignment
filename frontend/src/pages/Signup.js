import React from "react";

function Signup() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dealer Signup</h2>

      <input type="text" placeholder="Enter name" /><br /><br />
      <input type="email" placeholder="Enter email" /><br /><br />
      <input type="password" placeholder="Enter password" /><br /><br />

      <button>Signup</button>
    </div>
  );
}

export default Signup;