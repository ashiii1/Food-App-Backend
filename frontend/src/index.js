import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./Redux/store";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
      <ChakraProvider>
        <BrowserRouter>
          <Provider store = {store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ChakraProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// dom- dev-qqagkvrhay0rsmbb.us.auth0.com, cl- Bx1F2X4wTdleu7rJORMWGdr4jNaXLXss
reportWebVitals();
