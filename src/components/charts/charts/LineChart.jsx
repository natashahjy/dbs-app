import React, { useEffect } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const LineChart = ({ inputObject, colorData }) => {
    const type = 'line';

    const data = {
        labels: inputObject.xdata,
        datasets: [
            {
                backgroundColor : (context) => {
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                  gradient.addColorStop(0, "#a98bfd");
                  gradient.addColorStop(1, "rgb(255,255,255,255)");
                  return gradient;
                }, // Put the gradient here as a fill color
                fill: 'start',
                label: 'line chart',
                data: inputObject.ydata,
                borderColor: "#a98bfd",
                pointBackgroundColor: "rgb(0,0,0,0)",
                pointBorderColor: "rgb(0,0,0,0)",
                borderWidth: 2,
                tension: 0.5,
            }
        ]
      }
    
      const options = {
        scales: {
            x: {
              grid: {
                display: false
              },
              display: false
            },
            y: {
              grid: {
                display: false
              },
              beginAtZero: false,
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
        <div className='linechart'>
             <canvas id={'' + inputObject.id} width="800" height="450"></canvas>
        </div>
      )
} 

export default LineChart;