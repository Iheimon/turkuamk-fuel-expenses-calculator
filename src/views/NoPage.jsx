import React from "react";

/**
 * NOTE!
 * @description Views do not contain any styling or childrens!
 */

// Components
import { Header, Layout } from "../components";

const NoPage = () => {
  return (
    <Layout>
      <Header>Fuel Expenses Calculator</Header>
      <span>
        <b>404!</b> The page you're looking for does not exists!
      </span>
    </Layout>
  );
};

export default NoPage;
