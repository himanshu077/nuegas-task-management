import React from 'react';
import ReactApexChart from 'react-apexcharts';

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
    <div className='!bg-white !w-full !h-full'>
      <ReactApexChart options={options} series={series} type="line" height={130} className=" md:!w-[90vw] !w-full lg:!w-[25vw]"/>
    </div>
  );
};

export default SplineAreaChart;
