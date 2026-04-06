import React from "react";

function CarList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Second-Hand Cars</h2>

      <h3>Filters</h3>
      <input type="number" placeholder="Filter by Price" /><br /><br />
      <input type="text" placeholder="Filter by Color" /><br /><br />
      <input type="number" placeholder="Filter by Mileage" /><br /><br />

      <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
        <img
          src="https://via.placeholder.com/200"
          alt="car"
          width="200"
        />
        <h3>Honda City 2015</h3>
        <ul>
          <li>Petrol</li>
          <li>First Owner</li>
          <li>50,000 KM</li>
          <li>No Major Scratches</li>
          <li>Delhi Registered</li>
        </ul>
        <p>Price: ₹5,00,000</p>
        <button>Edit</button>
        <button style={{ marginLeft: "10px" }}>Delete</button>
      </div>
    </div>
  );
}

export default CarList;