import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          {/* <Route exact path='/provider/signin' component={}/>
        <Route exact path='/provider/signup' component={}/>
        <Route exact path='/provider/getcustomers' component={}/>
        <Route exact path='/customer' component={}/> */}
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default App;
