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
    );
  }
}

export default Landing;
