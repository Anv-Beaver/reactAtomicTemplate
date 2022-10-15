import styled from "styled-components";
export {CardStatisticsLight1, CardStatisticsLight2, CardStatisticsLight3, IconAndText, TextContainer, TextElement, NumberElement, IconContainer, IconImg, ProgressSmall, Line, UpperLine, LowerLine }


const CardStatisticsLight1 = styled.div`
  width: 365px;
  left: 417px;
  top: 42.1px;
  position: absolute;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px rgba(9, 30, 66, 0.31),
    0px 3px 8px 0px rgba(9, 30, 66, 0.16);
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const CardStatisticsLight2 = styled.div`
  width: 365px;
  left: 417px;
  top: 222px;
  position: absolute;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px rgba(9, 30, 66, 0.31),
    0px 3px 8px 0px rgba(9, 30, 66, 0.16);
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const CardStatisticsLight3 = styled.div`
  width: 420px;
  height: 415px;
  left: 417px;
  top: 400px;
  position: absolute;
  gap: 12px;
  padding: 20px;
  border-radius: 11px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const IconAndText = styled.div`
  width: 352px;
  height: 83.9px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 0;
`;
const TextContainer = styled.div`
  height: 41.6px;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
const NumberElement = styled.div`
  height: 37.6px;
  align-self: stretch;
  color: #1e293b;
  font-size: 28px;
  font-weight: 600;
  font-family: Archivo;
  line-height: 36px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
`;

const TextElement = styled.div`
  align-self: stretch;
  flex-grow: 0;
  color: #475569;
  font-size: 14px;
  font-family: Archivo;
  line-height: 1.43;
  text-align: left;
  letter-spacing: normal;
  font-stretch: normal;
  font-style: normal;
  white-space: pre-wrap;
`;

const IconContainer = styled.div`
  height: 62.2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const IconImg = styled.img`
  width: 26.7px;
  height: 26.7px;
`;

const ProgressSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  background-color: #e2e8f0;
`;
const UpperLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Line = styled.div`
  width: 150px;
  height: 4.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
  background-color: #2563eb;
`;

const LowerLine = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;