import "./App.css";
import FooterSection from "./Components/FooterSection/FooterSection";
import Footer from "./Components/Footer/Footer";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
function App() {
  const [search, setSearch] = useState("");
  // const [rate, setRate] = useState("0");
  return (
    <div>
      <NavBar setSearch={setSearch}  />
      <List  search={search}  />
      <FooterSection />
      <Footer />
    </div>
  );
}

export default App;
