import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddCar from "./pages/AddCar";
import CarList from "./pages/CarList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;