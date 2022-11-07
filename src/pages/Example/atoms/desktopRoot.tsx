import styled from "styled-components";
export {DesktopRoot, Content}

// ! 수정 2
const DesktopRoot = styled.div`
  /* width: 1386px; */
  /* height: 972px; */
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  // ! 수정
  padding: 6.2px 22px 26px 32px;
  background-color: #ffffff;
  overflow: hidden;
  min-width: 1500px;
`;

const Content = styled.div`
  // ! 수정
  /* left: 671px;
  top: 19.4px;
  position: absolute; */
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* transform: rotate(-0.33deg);
  transform-origin: 0px 0px; */
`;