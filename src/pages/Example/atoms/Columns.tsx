import styled from "styled-components";
export {LeftColumn, MiddleColumn, RightColumn}
const LeftColumn = styled.div`
  width: 346px;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px 18px 0px;
`;

const MiddleColumn = styled.div`
  width: 346px;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0px;
`;

const RightColumn = styled.div`
  width: 346px;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0px;
  padding-right: 40px;
`;