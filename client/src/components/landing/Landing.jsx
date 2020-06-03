import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./Landing.css";

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div>
        <div className="text">
          Facility Booking is an online reservation portal for customers who
          wants different facilities and the providers who are looking for
          customers.
          <br />
          <br />
          Customers can fill up the form and mention that which type of facility
          they are looking for as we provide facilites.
          <br />
          <br />
          Faccility providers can login to thier to the account and can have
          thier customers details.
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
  }
}

export default Landing;
