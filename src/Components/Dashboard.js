import React from "react";
import "../styles.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Analytics from "./Analytics/Analytics";
import Bar from "./Bar/Bar";
import PieChart from "./PieChart/PieChart";
export default function Dashboard(props) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Analytics/>
      <PieChart/>
      <Bar/>
    </div>
  );
}
