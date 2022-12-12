import React, { useState } from "react";

/**
 * NOTE!
 * @description Views do not contain any styling or childrens!
 */

// Components
import { Button, Header, Layout, Textbox, FlexRow } from "../components";

const Home = () => {
  // TODO: Move component state to the context provider
  const [rowValues, setRowValues] = useState([]);

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
        <Button disabled={!allowExpenseAdd()}>Add Refueling Expense</Button>
      </FlexRow>
    </Layout>
  );
};

export default Home;
