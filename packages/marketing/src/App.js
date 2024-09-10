import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {StylesProvider} from "@material-ui/core/styles";
import Landing from './components/Landing'
import Pricing from './components/Pricing'
// import { createApi } from 'unsplash-js';


// const unsplash = createApi({
//   accessKey: 'zbJMglEPtJZoZ7CHGSVa9of8Ducl6uPsK56Xt5kDtPk',
//   fetch: nodeFetch.default,
// });

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing}/>
            <Route path="/" component={Landing}/>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}