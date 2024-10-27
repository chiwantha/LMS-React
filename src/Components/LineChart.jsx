import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      series: [
        {
          name: "Tuition Fee",
          data: [500, 450, 520, 580, 610, 590, 630, 600, 680, 710, 690, 720], // Monthly data
          color: "#4C51BF",
        },
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#6B7280", // Text color for months
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6B7280", // Text color for y-axis labels
            fontSize: "12px",
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#E5E7EB", // Light gray grid lines
      },
    };

    if (!chartRef.current && document.getElementById("tuition-chart")) {
      chartRef.current = new ApexCharts(
        document.getElementById("tuition-chart"),
        options
      );
      chartRef.current.render();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white pb-1">
            Monthly Tuition Spending
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total fees paid per month
          </p>
        </div>
      </div>
      <div id="tuition-chart" className="mt-4"></div>
    </div>
  );
};

export default LineChart;
