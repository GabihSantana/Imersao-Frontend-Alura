import React from "react";
import "./styles.css";
import "./assets/vars.css";
import Header from "./header/header.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Footer from "./footer/footer.jsx";
import Search from "./search/search.jsx";

function MainComponent() {
  return (
    <div>
      <Header />
      <Search />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default MainComponent;
