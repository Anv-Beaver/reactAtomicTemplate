import styled from "styled-components";
export {DesktopRoot, Content}
const DesktopRoot = styled.div`
  width: 1386px;
  height: 972px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 26px 22px 26px 32px;
  background-color: #ffffff;
  overflow: hidden;
`;

const Content = styled.div`
  left: 671px;
  top: 19.4px;
  position: absolute;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transform: rotate(-0.33deg);
  transform-origin: 0px 0px;
`;