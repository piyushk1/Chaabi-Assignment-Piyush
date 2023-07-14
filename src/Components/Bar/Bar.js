import React from "react";
import styles from "./Bar.module.css";
import Chart from "react-apexcharts";

export default function Bar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h5 className={styles.leftHeading}> Last 14 days active workers in training</h5>
        <h5 className={styles.rightHeading}>Last 14 Days</h5>
      </div>
      <BarChart />
    </div>
  );
}

const BarChart = () => {
  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "3 Jun","4 Jun","5 Jun","6 Jun","7 Jun","8 Jun","9 Jun","10 Jun","11 Jun","12 Jun","13 Jun","14 Jun"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [100, 120, 140, 160, 100, 110, 115, 170, 210, 200, 190, 170, 115, 130, 145],
      },
    ],
  };

  return (
    <div>
      <Chart options={chartOptions.options} series={chartOptions.series} type="bar" width={900} height={320} />
    </div>
  );
}
