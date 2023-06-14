import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/main/cart";
import About from "./pages/about";

const RouteSwitch = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<App />} exact />
          {/* {/* <Route path="/cart" component={<Cart />} /> */}
          <Route path="/about" component={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;