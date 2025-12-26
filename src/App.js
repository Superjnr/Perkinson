import React from "react";
import Header from "./Components/Header/header";
import Properties from "./Components/Properties/props";
import Features from "./Components/Features/features";
import Addition from "./Components/Addition/addition";
import Expert from "./Components/Expert/expert";
import Clients from "./Components/Clients/clients";
import Footer from "./Components/Footer/footer";
import Update from "./Components/Update/update";

const App = () => {
  return (
    <div>
      <Header />
      <Properties />
      <Features />
      <Addition />
      <Expert />
      <Clients />
      <Update />
      <Footer />
    </div>
  );
};

export default App;
