import React from "react";
import styles from "./Analytics.module.css";
import { BsGraphDown } from "react-icons/bs";
import chart from "./Chart.png"; 
import Bar from "../Bar/Bar";

const Analytics = () => {
  const chartsData = [
    {
      title: "In Training working",
      count: "3,354",
      number: "234",
    },
    {
      title: "Video watch-time (hrs)",
      count: "2,433",
      number: "435",
    },
    {
      title: "% Workers Passing Quiz",
      count: "95%",
      number: "24%",
    },
    {
      title: "Avg. Days Token",
      count: "6",
      number: "3",
    },
  ];

  return (
    <div>
    <div className={styles.analyticsContainer}>
      <div className={styles.container}>
        {chartsData.map((item, index) => (
          <div className={styles.chart} key={index}>
            <h3>{item.title}</h3>
            <div className={styles.innerChart}>
              <div className={styles.chartContent}>
                <div className={styles.count}>{item.count}</div>
                <div className={styles.smallCount}>
                  <div className={styles.coloured}>
                    <BsGraphDown />
                    <p>20%</p>
                  </div>
                  <div>{item.number}</div>
                </div>
              </div>
              <div className={styles.chartContainer}>
                <img src={chart} alt="chart" className={styles.sampleImage} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
    </div>

  );
};

export default Analytics;
