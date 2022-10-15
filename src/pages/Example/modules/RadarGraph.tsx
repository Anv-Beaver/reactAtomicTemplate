import React, {useEffect} from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    Tooltip,
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    Tooltip,
  );
  
export const Radar = ({}) => {

  useEffect(() => {
    const c = Chart.getChart('myChart');
    if (c) {
      c.destroy();
    }

    // eslint-disable-next-line no-new
    new Chart('myChart', {
        type: 'radar',
        data : {
            labels: [
              1,
              2,
              3,
              4,
              5
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [26,21,33,23,30],
              fill: true,
              backgroundColor: "rgba(144, 164, 174, 0.2)",
              borderColor: 'rgb(144, 164, 174)',
              pointBackgroundColor: 'rgb(144, 164, 174)',
              pointBorderColor: '#fff',
              
            }, {
              label: 'My Second Dataset',
              data: [14,11,13,31,21],
              fill: true,
              backgroundColor: 'rgba(61, 116, 237, 0.2)',
              borderColor: 'rgb(61, 116, 237)',
              pointBackgroundColor: 'rgb(61, 116, 237)',
            }]
        },
    
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {             
                min: 0,
                max: 35,
                beginAtZero: true,
                pointLabels:{
                  font:{
                    size: 14
                  }
                  
                }
             },              
            },
            elements: {
              line: {
                borderWidth: 3
              }
              
            },
            plugins:{
                legend:{
                    display:false,
                    }                
            },
            animation:{
                duration: 0
            }
        }
    });
  }, []);

  return (
      <canvas id="myChart"></canvas>
  );

}