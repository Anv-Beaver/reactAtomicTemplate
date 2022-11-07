import styled from "styled-components";
export {RectangleCard, RectangleCard1, RectangleCard2}
const RectangleCard = styled.div`
  /* width: 326px; */
  height: 385px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 15.5px 17.3px 16px;
  margin: 15px 20px;
  border-radius: 11px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const RectangleCard1 = styled.div`
  /* width: 427px; */
  height: 401px;
  // ! 수정
  /* position: relative; */
  /* right: 110px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 15.5px 17.3px 16px;
  margin: 15px;
  border-radius: 11px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const RectangleCard2 = styled.div`
  // ! 수정
  /* width: 384px; */
  height: 339px;
  /* position: relative; */
  margin-left: 63px;
  /* right: 70px; */
  /* bottom: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 15.5px 17.3px 16px;
  border-radius: 11px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;