import styled from "styled-components"
export {ChartTitle, ChartTitleRight, Text}
const ChartTitle = styled.div`
    width: 116px;
    height: 33px;
    position: relative;
    top: 30px;
    left: 5px;
    justify-content: center;
    align-items: center;
    margin: 0px;
    border-radius: 28px;
    background-color: #77a7f5;
`
const ChartTitleRight = styled.div`
    width: 116px;
    height: 33px;
    position: absolute;
    top: 0px;
    right: 0px;
    justify-content: center;
    align-items: center;
    margin: 0px;
    border-radius: 28px;
    background-color: #77a7f5;
`

const Text = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-family: Archivo;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.4px;
  position: relative;
  top: 7px;
`;

