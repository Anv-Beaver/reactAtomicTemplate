import styled from "styled-components";
export {TextAndIcon1, TextAndIcon2, IconScale, Element}

const TextAndIcon1 = styled.div`
  left: 344px;
  top: 37.5px;
  position: absolute;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const TextAndIcon2 = styled.div`
  left: 501px;
  top: 36.1px;
  position: absolute;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;

const IconScale = styled.img`
  width: 20.1px;
  height: 20.1px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  font-size: 18px;
  font-family: Archivo;
  line-height: 24px;
  white-space: pre-wrap;
`;