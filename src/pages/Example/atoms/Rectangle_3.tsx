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

export const Rectangle_3 = styled.div`
    position: absolute;
    top: 36px;
    left: 907px;
    width: 457px;
  height: 421px;
  border-radius: 11px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`

export const Bubble_3 = styled.div`
    position: absolute;
    top: 18px;
    left: 324px;
     width: 116px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  background-color: #77a7f5;   
`

export const Bubble_3_txt = styled.div`
    position: absolute;
    top: 9.3px;
    left: 23.5px;
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

export const Radar0 = ({}) => {

  useEffect(() => {
    const c = Chart.getChart('myChart12');
    if (c) {
      c.destroy();
    }

    // eslint-disable-next-line no-new
    new Chart('myChart12', {
        type: 'radar',
        data : {
            labels: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [9,31,30,34,29,31,14,21,30,12,24,17],
              fill: true,
              backgroundColor: "rgba(144, 164, 174, 0.2)",
              borderColor: 'rgb(144, 164, 174)',
              pointBackgroundColor: 'rgb(144, 164, 174)',
              pointBorderColor: '#fff',
              
            }, {
              label: 'My Second Dataset',
              data: [20,21,25,15,11,7,6,9,30,19,17,16],
              fill: true,
              backgroundColor: 'rgba(61, 116, 237, 0.2)',
              borderColor: 'rgb(61, 116, 237)',
              pointBackgroundColor: 'rgb(61, 116, 237)',
              pointBorderColor: '#fff',
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
      <canvas id="myChart12"></canvas>
  );

}