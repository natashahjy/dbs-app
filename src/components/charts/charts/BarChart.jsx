import React, { useEffect } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const BarChart = ({ inputObject, colorData }) => {
    const type = 'bar';

    const data = {
        labels: inputObject.xdata,
        datasets: [
          {
            label: inputObject.ylabel,
            data: inputObject.ydata,
            // you can set indiviual colors for each bar
            backgroundColor: colorData,
            borderWidth: 1,
            barPercentage: 0.9,
            categoryPercentage: 1,
            borderRadius: 10,
            minBarLength: 10
          }
        ]
      }
    
      const options = {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            },
            display: false
          }
        },
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
    
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
        <div className='barchart'>
             <canvas id={'' + inputObject.id} width="800" height="450"></canvas>
        </div>
      )
} 

export default BarChart;