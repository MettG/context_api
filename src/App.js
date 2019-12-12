import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Container, Header, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/User/profile"
          render={ () => <UserProfile /> }
        />
        <Route
          exact
          path="/About"
          render={ () => 
						<div>
							<Header>
								About
							</Header>
							<Container>
								<p>It's always been about you.</p>
							</Container>
						</div> 
					}
        />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
