import styled from "styled-components";
export {FieldsRoot, Fields, Text1, AtomText, Icon}

const FieldsRoot = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Fields = styled.div`
  height: 25.7px;
  gap: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #eff6ff;
`;
const Text1 = styled.div`
  /* width: 200px; */
  /* flex: 1; */
  // ! 수정
  width: calc(100vw - 670.6px - 469.1px);
  min-width: 200px;
  height: 25.1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 50px;
`;
const AtomText = styled.div`
  gap: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: #64748b;
  font-size: 16px;
  font-family: Archivo;
  line-height: 24px;
  white-space: nowrap;
`;
const Icon = styled.img`
  width: 20.1px;
  height: 19.9px;
`;
