import styled from "styled-components";
export {LogoContainer, LogoSpan, Logo_textAndLine, IndigoRectangle_LogoLine, Text_ANV}

const LogoContainer = styled.div`
  width: 264px;
  left: 34px;
  top: -0.48px;
  position: absolute;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 0px 0px 0px;
  border-width: 0px 0px 0.5px 0px;
  border-style: solid;
  border-color: #cbd5e1;
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const LogoSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 20px;
`;
const Logo_textAndLine = styled.div`
  width: 210px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.05px 7.84px 0.04px 6.72px;
`;
const IndigoRectangle_LogoLine = styled.div`
  width: 189px;
  height: 33px;
  left: 20.9px;
  top: 43.9px;
  position: absolute;
  background-color: #76a6f5;
  transform-origin: 0px 0px;
`;
const Text_ANV = styled.div`
  width: 210px;
  height: 85.2px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #1e293b;
  font-size: 55px;
  font-weight: 600;
  font-family: Archivo;
  line-height: 36px;
  letter-spacing: 0.1px;
`;
