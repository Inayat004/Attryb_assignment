import React from "react";

function AddCar() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Second-Hand Car</h2>

      <input type="text" placeholder="Image URL" /><br /><br />
      <input type="text" placeholder="Car Title" /><br /><br />
      <input type="text" placeholder="Bullet Point 1" /><br /><br />
      <input type="text" placeholder="Bullet Point 2" /><br /><br />
      <input type="text" placeholder="Bullet Point 3" /><br /><br />
      <input type="text" placeholder="Bullet Point 4" /><br /><br />
      <input type="text" placeholder="Bullet Point 5" /><br /><br />
      <input type="number" placeholder="Price" /><br /><br />
      <input type="text" placeholder="Color" /><br /><br />
      <input type="number" placeholder="Mileage" /><br /><br />

      <button>Add Car</button>
    </div>
  );
}

export default AddCar;