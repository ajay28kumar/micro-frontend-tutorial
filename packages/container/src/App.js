import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, 
  Route, 
  Switch, Redirect } from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";
import {createBrowserHistory} from "history";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy= lazy(()=> import("./components/DaashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "cont"
});

const history = createBrowserHistory();

export default () => {

  const [isSignIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(isSignIn) {
      history.push("/dashboard");
    }
  }, [isSignIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header 
            isSignIn={isSignIn}
            onSignOut={()=>setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth"> 
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path="/dashboard">
                {!isSignIn ? 
                  <Redirect to="/"/> :
                  <DashboardLazy/>
                }
              </Route>
              <Route path="/" component={MarketingLazy}/> 
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
};

