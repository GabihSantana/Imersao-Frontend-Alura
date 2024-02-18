import React from "react";
import "./styles.css";
import "./assets/vars.css";
import Header from "../src/header/header.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Content from "./mainpage/mainpage.jsx";
import Footer from "./footer/footer.jsx";

function MainComponent() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainComponent;
