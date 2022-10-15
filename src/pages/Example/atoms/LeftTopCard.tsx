import styled from "styled-components";

export {Tap, StateLayer, Element2, MenuMax, ListItems, Title, IndigoFlexRow, FlexColumn, Text1, Text2, TextElementsTitle, TextElementsTitle2, TextElementsTitle1}
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 12px;
  overflow: hidden;
`;
const TextElementsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const Title = styled.div`
  width: 264px;
  color: #334155;
  font-size: 14px;
  font-weight: 500;
  font-family: Readex Pro;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

const Text1 = styled.div`
  width: 126px;
  left: 19px;
  top: 286px;
  position: absolute;
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;
const Text2 = styled.div`
  width: 193px;
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  font-family: Archivo;
  line-height: 36px;
`;
const Element2 = styled.div`
  width: 316.2px;
  height: 41.7px;
  color: #475569;
  font-size: 14px;
  font-family: Archivo;
  line-height: 1.43;
  white-space: pre-wrap;
  letter-spacing: normal;
  text-align: left;
`;
const MenuMax = styled.div`
  width: 316px;
  height: 254px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 0px 14.6px 0;
  padding: 7px 0px 0px 0px;
  border-radius: 0px 0px 4px 4px;
  background-color: #f8fafc;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
const ListItems = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;
const IndigoFlexRow = styled.div`
  width: 316px;
  height: 48px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #77a7f5;
  overflow: hidden;
`;
const TextElementsTitle1 = styled.div`
  left: 12px;
  top: 14px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const StateLayer = styled.div`
  width: 120px;
  height: 48px;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 126px 0 18px;
  padding: 10px;
  border-radius: 50px;
  overflow: hidden;
`;
const Tap = styled.img`
  height: 20;
  flex-grow: 1;
  align-self: stretch;
`;
const TextElementsTitle2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  opacity: 0.38;
`;
