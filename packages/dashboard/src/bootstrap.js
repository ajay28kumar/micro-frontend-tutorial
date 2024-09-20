import {createApp} from "vue";
import Dashboard from "./components/Dashboard";


// Mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};



// If we are in dev-mode and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#__dashboard-dev-root");

  if(element) {
    mount(element);
  }
}


export { mount };

// We are running through container
// and we should export the mount function