import React from 'react';
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const SplineAreaChart = () => {
  const series = [{
    name: 'Series 1',
    data: [1, 2, 1, 3, 2, 1, 2]
  }];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: daysOfWeek
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  return (
    <div className='!bg-white !h-full'>
      <ApexCharts options={options} series={series} type="line" height={131} className="!w-full" />
    </div>
  );
};

export default SplineAreaChart;
