import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, 
  Route, 
  Switch } from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy= lazy(()=> import("./components/DaashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "cont"
});

export default () => {
  const [isSignIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter >
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
              <Route path="/dashboard" component={DashboardLazy}/>
              <Route path="/" component={MarketingLazy}/> 
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
};

