import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { auth } from "../../firebase/firebase.utils";

const GetCustomers = () => {
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <div>
      <div className="fixed-action-btn ">
        <Button onClick={signOut} negative>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default GetCustomers;
