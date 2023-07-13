import React from "react";
import "../styles.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
export default function Dashboard(props) {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
