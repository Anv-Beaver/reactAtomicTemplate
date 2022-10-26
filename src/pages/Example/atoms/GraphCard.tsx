import styled from "styled-components";
export {GraphGroup, Subgroup, BarsContainer, TextMonth}

const GraphGroup = styled.div`
  /* width: 263px; */
  height: 199px;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 20px;
  margin: 56px 0px 10px 10px;
`;

const Subgroup = styled.div`
  /* width: 42.4px; */
  gap: 6px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
const BarsContainer = styled.div`
  width: 42.3px;
  height: 159px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TextMonth = styled.div`
  color: #94a3b8;
  font-size: 14px;
  font-family: Archivo;
  line-height: 20px;
  white-space: nowrap;
`;