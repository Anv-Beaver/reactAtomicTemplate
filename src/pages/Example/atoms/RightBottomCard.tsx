import styled from "styled-components";
export {BackgroundPanel, Icon, CheckIcon, TextContainer, CardTitle, Paragraph, Circle, ListText}
const BackgroundPanel = styled.div`
  height: 289px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 28px;
  background-color: #eff6ff;
  padding-bottom: 10px;
`;

const Icon = styled.img`
  width = 24px;
  height = 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const CheckIcon = styled.img`
  width = 24px;
  height = 24px;
  display: inline-block;
  position: relative;
  bottom: 15px;
`;

const TextContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;

`;

const CardTitle = styled.div`
    height: 32px;
    align-self: stretch;
    flex-grow: 0;
    font-family: Archivo;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    margin-top: 20px;
`;

const Paragraph = styled.div`
    height: 40px;
    align-self: stretch;
    flex-grow: 0;
    font-family: Archivo;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0px;
    text-align: left;
    margin-top:16px;
    margin-bottom:24px;
    color: #00050d;
`;

const Circle = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-bottom: 10px;
  height: 32px;
  width: 32px;
  position: relative;
  background-color: #cbd5e1;
  border-radius: 50%;
`;

const ListText = styled.div`
  position: relative;
  top: 5px;
  display: inline-block;
  margin-left: 20px;
  vertical-align: top;
  width: 252px;
  color: #0f172a;
  font-size: 14px;
  font-family: Archivo;
  line-height: 20px;
  letter-spacing: 0.25px;
`;
