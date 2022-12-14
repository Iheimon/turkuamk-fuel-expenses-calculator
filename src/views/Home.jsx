import React, { useState, useContext } from "react";

/**
 * NOTE!
 * @description Views do not contain any styling or childrens!
 */

import { GlobalContext } from "../context/state";

// Components
import { Button, Header, Layout, Textbox, FlexRow, SummaryTable } from "../components";

const Home = () => {
  const [rowValues, setRowValues] = useState([]);
  const { addExpense, expenses } = useContext(GlobalContext);

  /**
   * Handles the element onChange event by storing the new value to the component state.
   * @param {object} event - Event object
   */
  const handleRowChange = (event) => {
    const { id, value, type } = event.target;
    setRowValues((values) => [...values.filter((value) => value.id !== id), { id, value, type }]);
  };

  /**
   * Retrieves the value corresponding the given elementId from the component state.
   * @param {int} elementId - ID of the target element
   * @returns {float|string}
   */
  const getValue = (elementId) => {
    const valueObject = rowValues.find((value) => value.id === elementId) ?? undefined;
    if (valueObject === undefined) return "";
    return valueObject.value;
  };

  /**
   * Checks the components state and validates if the given values are valid for the application.
   * @returns {boolean}
   */
  const allowExpenseAdd = () => {
    let validValueCount = 0;
    const itemCount = rowValues.length ?? 0;
    rowValues.forEach((valueObject) => {
      const { type, value } = valueObject;
      if (type === "number" && (isNaN(value) || value.length === 0)) return;
      if (type === "text" && value.length === 0) return;
      validValueCount++;
    });
    return validValueCount === itemCount && itemCount === 4;
  };

  const convertRowsToObject = () => {
    let rowObject = {};
    rowValues.forEach((rowValue) => {
      const { id, value } = rowValue;
      if (id === "refuel-amount") rowObject = { ...rowObject, amount: value };
      if (id === "refuel-price") rowObject = { ...rowObject, price: value };
      if (id === "odometer-distance") rowObject = { ...rowObject, distance: value };
      if (id === "car-name") rowObject = { ...rowObject, name: value };
    });
    return rowObject;
  };

  return (
    <Layout>
      <Header>Fuel Expenses Calculator</Header>
      <FlexRow>
        <Textbox
          id='refuel-amount'
          text='Refuel Amount'
          type='number'
          value={getValue("refuel-amount")}
          onChange={handleRowChange}
        />
        <Textbox
          id='refuel-price'
          text='Refuel Price'
          type='number'
          value={getValue("refuel-price")}
          onChange={handleRowChange}
        />
        <Textbox
          id='odometer-distance'
          text='Odometer Distance'
          type='number'
          value={getValue("odometer-distance")}
          onChange={handleRowChange}
        />
        <Textbox
          id='car-name'
          text='Car Name'
          type='text'
          value={getValue("car-name")}
          onChange={handleRowChange}
        />
        <Button disabled={!allowExpenseAdd()} onClick={() => addExpense(convertRowsToObject())}>
          Add Refueling Expense
        </Button>
      </FlexRow>
      <SummaryTable expenses={expenses} />
    </Layout>
  );
};

export default Home;
