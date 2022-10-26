import styled from "styled-components";
export {LeftColumn, MiddleColumn, RightColumn}
const LeftColumn = styled.div`
  // ! 수정
  /* width: 346px; */
  flex: 1;
  position: relative;
  /* gap: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px 18px 0px;
`;

const MiddleColumn = styled.div`
  // ! 수정
  /* width: 346px; */
  flex: 1;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0px;
`;

const RightColumn = styled.div`
  // ! 수정
  /* width: 346px; */
  flex: 1;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0px;
  padding-right: 40px;
`;