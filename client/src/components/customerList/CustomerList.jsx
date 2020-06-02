import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";

const CustomerList = ({ facility }) => {
  const [customers, setCustomers] = useState(null);

  const getFacilityCustomers = async (facility) => {
    try {
      const customers = await axios.get(`/api/v1/user/${facility}`);
      setCustomers(customers.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilityCustomers(facility);
  }, [facility]);

  const renderContent = () => {
    switch (customers) {
      //   case 0:
      //     return <h2>Loading...</h2>;
      case null:
        return <h4>Loading...</h4>;
      default:
        return renderList();
    }
  };

  const renderList = () => {
    switch (customers.length) {
      case 0:
        return <h4>There are no customers right now for {facility}</h4>;

      default:
        return customers.map((customer) => {
          return (
            <div className="view" key={customer._id}>
              <List>
                <List.Item icon="user" content={customer.name} />
                <List.Item icon="phone" content={customer.mobileNumber} />
                <List.Item icon="mail" content={customer.email} />
                <List.Item icon="marker" content={customer.address} />
              </List>
            </div>
          );
        });
    }
  };

  //   console.log("state ", customers);

  return <div> {renderContent()} </div>;
};

export default CustomerList;
