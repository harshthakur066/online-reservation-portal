import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tab } from "semantic-ui-react";

import { auth } from "../../firebase/firebase.utils";
import CustomerList from "../customerList/CustomerList";

const GetCustomers = () => {
  const history = useHistory();

  const panes = [
    {
      menuItem: "Restaurants",
      render: () => (
        <Tab.Pane>
          <CustomerList facility="restaurant" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Spa",
      render: () => (
        <Tab.Pane>
          <CustomerList facility="spa" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Saloon",
      render: () => (
        <Tab.Pane>
          <CustomerList facility="saloon" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Hotels",
      render: () => (
        <Tab.Pane>
          <CustomerList facility="hotel" />
        </Tab.Pane>
      ),
    },
  ];

  const signOut = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <div>
      <h3 style={{ margin: "20px 0px" }}>Customers for different facilities</h3>
      <Tab panes={panes} />
      <div className="fixed-action-btn ">
        <Button onClick={signOut} negative>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default GetCustomers;
