import React from "react";
import styles from "./Content.module.css";
import { FcUp } from "react-icons/fc";
import { MdOutlineCircle } from "react-icons/md";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

export default function Content(props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.subContainer} ${styles.div1}`}>
        <h5 className={styles.title}>Monthly Training Activity</h5>
        <p className={styles.line}>
          <FcUp style={{ color: "green" }} /> 16% More enrollees this month
        </p>

        <div className={styles.course}>
          <p>
            <MdOutlineCircle /> course a
          </p>
          <p>23 workers took this course this week</p>
        </div>

        <div className={styles.course}>
          <p>
            <MdOutlineCircle /> course a
          </p>
          <p>23 workers took this course this week</p>
        </div>

        <div className={styles.course}>
          <p>
            <MdOutlineCircle /> course a
          </p>
          <p>23 workers took this course this week</p>
        </div>
      </div>
      <div className={`${styles.subContainer} ${styles.div2}`}>
        <h5 className={styles.title}>Quiz Passing %</h5>
        <DonutChart />
      </div>
      <div className={`${styles.subContainer} ${styles.div3}`}>
        <div className={styles.headingContainer}>
          <h5 className={styles.leftHeading}>Daily Training Completion</h5>
          <h5 className={styles.rightHeading}>Last 7 Days</h5>
        </div>
        <BarChart />
      </div>
    </div>
  );
}

const DonutChart = () => {
  const passedWorkers = 1000;
  const failedWorkers = 600;

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#008000", "#FF0000"],
    series: [passedWorkers, failedWorkers],
    labels: ["Passed", "Failed"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="donut" />
    </div>
  );
};

const BarChart = () => {
  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [100, 120, 140, 160, 100, 110, 115],
      },
    ],
  };

  return (
    <div>
      <Chart options={chartOptions.options} series={chartOptions.series} type="bar" width={350}/>
    </div>
  );
}
