// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Importe o Provider do Redux
import store from "./store"; // Importe a store do Redux
import App from "./App";
import ScrollTop from "./ScrollTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Adicione o Provider e passe a store */}
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </Provider>,
);
