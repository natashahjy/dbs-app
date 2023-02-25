import React, { useEffect } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

const PieChart = ({ inputObject, colorData }) => {
    const type = 'pie';

    const data = {
        labels: inputObject.xdata,
        datasets: [
            {
              label: inputObject.ylabel, //ylabel
              data: inputObject.ydata, //ydata
              backgroundColor: colorData,
              borderRadius: 5
            }
          ]
      }
    
      const options = {
        plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          },
          responsive: true,
          maintainAspectRatio: true
      }

      var newChart;

      useEffect(() => {
        var mychart = document.getElementById('' + inputObject.id);
        if (!mychart) {
          return;
        }
        newChart = new Chart(mychart, {type: type, data: data, options: options});
        // newChart.destroy();
        // newChart = new Chart(mychart, {type: type, data: data, options: options});

      }, [])
      

      return (
        <div className='piechart'>
             <canvas id={'' + inputObject.id} width="800" height="450"></canvas>
        </div>
      )
} 

export default PieChart;