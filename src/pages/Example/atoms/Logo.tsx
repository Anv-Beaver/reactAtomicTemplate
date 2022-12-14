import styled from "styled-components";
export {LogoContainer, LogoSpan, Logo_textAndLine, IndigoRectangle_LogoLine, Text_ANV}

const LogoContainer = styled.div`
  // ! 수정
  width: 264px;
  /* left: 34px; */
  /* position: absolute; */
  /* gap: 8px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  padding: 0px 0px 12px 0px;
  border-width: 0px 0px 0.5px 0px;
  border-style: solid;
  border-color: #cbd5e1;
  // ! 수정 5
  /* transform: rotate(-0.33deg); */
  /* transform-origin: 0px 0px; */
`;

const LogoSpan = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  padding: 0px 20px;
`;
const Logo_textAndLine = styled.div`
  // ! 수정
  /* width: 210px; */
  position: relative;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  /* align-items: center; */
  padding: 0.05px 7.84px 0.04px 6.72px;
`;
const IndigoRectangle_LogoLine = styled.div`
  width: 189px;
  height: 33px;
  top: 43.9px;
  position: relative;
  background-color: #76a6f5;
`;
const Text_ANV = styled.div`
  position: relative;
  /* // ! 수정 */
  left: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #1e293b;
  font-size: 55px;
  font-weight: 600;
  font-family: Archivo;
  // ! 수정 4
  /* line-height: 36px; */
  /* letter-spacing: 0.1px; */
`;
