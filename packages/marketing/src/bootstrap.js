
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
// Mount function to start the app

const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  )
};

// If we are in dev-mode and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#__marketing-dev-root");
  if(element) {
    mount(element);
  }
}


export { mount };

// We are running through container
// and we should export the mount function