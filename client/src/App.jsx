import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import CustomerForm from "./components/customerForm/CustomerForm";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/provider/signin" component={SignIn} />
          <Route exact path="/provider/signup" component={SignUp} />
          {/* <Route exact path='/provider/getcustomers' component={}/> */}
          <Route exact path="/customer/form" component={CustomerForm} />
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default App;
