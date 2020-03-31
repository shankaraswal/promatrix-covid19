import React from "react";
import "./App.css";

import Header from "./Components/Common/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
