import React from "react";
import Chart from "react-apexcharts";
import styles from "./PieChart.module.css";

const PieChart = () => {
  const chartOptions = {
    labels: ["Chapter A", "Chapter B", "Chapter C", "Haven't Started yet", "Finished"],
    series: [30, 20, 15, 25, 10],
    options: {
      chart: {
        type: "pie",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Finished Training</h5>
      <div className={styles.chartContent}>
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="pie"
          height={250}
        />
      </div>
    </div>
  );
};

export default PieChart;
