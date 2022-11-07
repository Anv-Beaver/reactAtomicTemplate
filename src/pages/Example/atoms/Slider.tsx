import styled from "styled-components";
export {Background, SliderRoot, Inactive, Active, Track, BaseSliderThumb, Thumb, Tip, Tooltip, State, Bubble, Circle, Triangle, Value, ValueContainer}

const Background = styled.div`
    /* width: 481px; */
    /* top: 20px; */
`
const SliderRoot = styled.div`
  width: 281px;
  top: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Inactive = styled.img`
  /* width: 295px; */
  height: 4px;
  left: 15px;
  top: 30px;
  position: absolute;
`;
const Active = styled.div`
  width: 125px;
  height: 4px;
  top: 25px;
  left: 10px;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 25px 0px 5px;
`;
const Track = styled.div`
  width: 103px;
  height: 4px;
  position: relative;

  left: 15px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #2563eb;
`;
const BaseSliderThumb = styled.div`
  width: 20px;
  bottom: -20px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;
const State = styled.div`
  height: 40px;
  left: -47px;
  top: -41px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4cmeJlYn14kNNKtSQBur.svg");
`;
const Thumb = styled.img`
  height: 20px;
`;
const Tooltip = styled.div`
  width: 0px;
  height: 15.5px;
  position: relative;
  top: -44.5px;
  
`;
const Bubble = styled.div`
  width: 16px;
  height: 7.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 28px;
  background-color: #1e293b;
  overflow: hidden;
`;
const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Value = styled.div`
  color: white;
  font-size: 12px;
  font-family: Readex Pro;
  line-height: 16px;
  position: relative;
  top: -10px;
  left: 3.5px;
  z-index: 1;
`;

const Circle = styled.div`
  height: 28px;
  width: 28px;
  position: relative;
  background-color: #1E293B;
  border-radius: 50%;
  top: -31.5px;
  left: -4px;
  opacity: 0.5;
  z-index: -1;
`;

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 6px solid black;
  position: relative;
  top: 14px;

`;

const Tip = styled.img`
  width: 20.3px;
  height: 8px;
`;

const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };