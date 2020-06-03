import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./Landing.css";

const Landing = () => {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  const isUser = () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  };

  useEffect(() => {
    isUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => unsubscribeFromAuth();
    // eslint-disable-next-line
  }, []);

  console.log(currentUser);
  return (
    <div>
      <div className="text">
        Facility Booking is an online reservation portal for customers who wants
        different facilities and the providers who are looking for customers.
        <br />
        <br />
        Customers can fill up the form and mention that which type of facility
        they are looking for as we provide facilites.
        <br />
        <br />
        Faccility providers can login to thier to the account and can have thier
        customers details.
      </div>
      <div className="display">
        <div className="view">
          <Link to="/customer/form">
            <Button primary className=" btn-large ">
              For Customers
            </Button>
          </Link>
        </div>
        <div className="view">
          <Link
            to={currentUser ? "/provider/getcustomers" : "/provider/signin"}
          >
            <Button primary className="btn-large ">
              For Facility Providers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
