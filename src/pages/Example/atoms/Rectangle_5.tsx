import styled from "styled-components";
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

export const Rectangle_5 = styled.div`
    position: absolute;
    left: 443px;
    top: 421px;
    width: 436px;
    height: 421px;
    border-radius: 11px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
`

export const Bubble_5 = styled.div`
    position: absolute;
    left: 21px;
    top: 20px;
    width: 116px;
    height: 33px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    background-color: #77a7f5;
`

export const Bubble_5_txt = styled.div`
    position: absolute;
    left: 23.5px;
    top: 8.5px;
    flex-grow: 0;
    font-family: Archivo;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    text-align: center;
    color: #fff;
`

export const Anything = styled.img`
  position: absolute;
  left: 88.1px;
  top: 150.8px;
  width: 56px;
  height: 30px;
`

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
  
export const Radar1 = ({}) => {

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