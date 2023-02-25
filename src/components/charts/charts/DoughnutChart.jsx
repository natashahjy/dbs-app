import React, { useEffect } from 'react';
//import { Chart } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ inputObject, colorData }) => {
    const type = 'doughnut';

    const data = {
        labels: inputObject.xdata,
        datasets: [
          {
            label: inputObject.ylabel,
            data: inputObject.ydata,
            backgroundColor: colorData,
            borderRadius: 5
          }
        ]

      }
    
      const options = {
        cutout: '60%',
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false
          }
        },
        responsive: true
      }
      var newChart;

      useEffect(() => {
        var mychart = document.getElementById('' + inputObject.id);
        if (!mychart) {
          return;
        }
        newChart = new Chart(mychart, {type: type, data: data, options: options});
        
      }, [])
      

      return (
        <div className='doughnutchart'>
             <canvas id={''+ inputObject.id} width="800" height="450"></canvas>
             <div className='doughnutCenter'>{ (''+ (inputObject.ydata[0] * 100 / (inputObject.ydata.reduce((x,y) => x + y, 0)))).slice(0, 4) + '%' }</div>
        </div>
      )
} 

export default DoughnutChart;