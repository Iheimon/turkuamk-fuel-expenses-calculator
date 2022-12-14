import React from "react";
import ReactDOM from "react-dom/client";

// React Router DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./style/globals.css";
import "./style/theme.css";

// Components
import { Home, NoPage } from "./views";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Calculations prototype
const RefuelingStatistics = ({ refuelingData }) => {

  // Calculate the total refueling expenses in euros
  const totalExpenses = refuelingData.reduce((total, refueling) => total + refueling.amount, 0);

  // Calculate the total consumption in liters
  const totalConsumption = refuelingData.reduce((total, refueling) => total + refueling.consumption, 0);

  // Calculate the total distance in kilometers
  const totalDistance = refuelingData.reduce((total, refueling) => total + refueling.distance, 0);

  // Calculate the average expenses per 100 kilometers in euros
  const avgExpensesPer100Km = totalDistance === 0 ? 0 : totalExpenses / totalDistance * 100;

  // Calculate the average consumption per 100 kilometers in liters
  const avgConsumptionPer100Km = totalDistance === 0 ? 0 : totalConsumption / totalDistance * 100;

  return (
    <table>
      <thead>
        <tr>
          <th>Total refueling expenses</th>
          <th>Total consumption</th>
          <th>Total distance</th>
          <th>Avg. expenses per 100 km</th>
          <th>Avg. consumption per 100 km</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalExpenses} euros</td>
          <td>{totalConsumption} liters</td>
          <td>{totalDistance} km</td>
          <td>{avgExpensesPer100Km} euros</td>
          <td>{avgConsumptionPer100Km} liters</td>
        </tr>
      </tbody>
    </table>
  );
};

