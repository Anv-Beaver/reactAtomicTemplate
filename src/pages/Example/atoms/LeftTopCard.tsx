import styled from "styled-components";

export {Tap, MenuMax, ListItems,  Text, TextElementsTitle}

const TextElementsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 12px;
  overflow: hidden;
  color: #334155;
  font-size: 14px;
  font-weight: 500;
  font-family: Readex Pro;
  line-height: 20px;
  letter-spacing: 0.1px;
`;


const Text = styled.div`
  /* width: 193px; */
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  font-family: Archivo;
  line-height: 36px;
`;

const MenuMax = styled.div`
  /* width: 316px; */
  height: 254px;
  /* position: relative; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* margin: 0 0px 14.6px 0; */
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

const Tap = styled.img`
  height: 20;
  flex-grow: 1;
  align-self: stretch;
`;
