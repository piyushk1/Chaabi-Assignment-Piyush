import React from "react";
import "../styles.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Analytics from "./Analytics/Analytics";
import Bar from "./Bar/Bar";
import PieChart from "./PieChart/PieChart";
import Content from "./Content/Content";
export default function Dashboard(props) {
  return (
   <>
    <Header />
    <Sidebar /> 
    <Analytics/> 
    <PieChart/>
    <Bar/>
    <Content/>   
</>
      
  );
}
