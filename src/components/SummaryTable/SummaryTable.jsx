import React from "react";
import styles from "./SummaryTable.module.css";

const SummaryTable = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, refueling) => total + parseFloat(refueling.price), 0);
  const totalConsumption = expenses.reduce(
    (total, refueling) => total + parseFloat(refueling.amount),
    0
  );
  const totalDistance = expenses.reduce((total, refueling) => total + parseFloat(refueling.distance), 0);

  const avgExpensesPer100Km =
    totalDistance === 0 ? 0 : parseFloat((totalExpenses / totalDistance) * 100);
  const avgConsumptionPer100Km =
    totalDistance === 0 ? 0 : parseFloat((totalConsumption / totalDistance) * 100);

  return (
    <table className={styles.SummaryTable}>
      {expenses.length !== 0 && (
        <>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Price</th>
              <th>Distance</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => {
              return (
                <tr key={index}>
                  <td>{expense.amount} liters</td>
                  <td>{expense.price} €</td>
                  <td>{expense.distance} km</td>
                  <td>{expense.name}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <b>Summary</b>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{Math.round(totalConsumption * 100) / 100} liters</td>
              <td>{Math.round(totalExpenses * 100) / 100} €</td>
              <td>{Math.round(totalDistance * 100) / 100} km</td>
              <td>{Math.round(avgExpensesPer100Km * 100) / 100} € / 100km</td>
              <td>{Math.round(avgConsumptionPer100Km * 100) / 100} liters / 100km</td>
            </tr>
          </tfoot>
        </>
      )}
    </table>
  );
};

export default SummaryTable;
