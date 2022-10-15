import styled from "styled-components";
import {TextAndIcon1, TextAndIcon2, IconScale, Element} from "../atoms/ToggleText";
import {MenuIconContainer,MenuIcon} from"../atoms/MenuIconScale";

export const Toggles = ({}) => {
  return (
    <div>
      <MenuIconContainer>
        <MenuIcon src={`https://file.rendit.io/n/hDAW7XYuyPSeGLig2CK7.svg`} />
      </MenuIconContainer>
      <TextAndIcon1>
        <Element>대충 뭐 자료 </Element>
        <IconScale
          src={`https://file.rendit.io/n/l9rdyvdp9V2U7Lb2Nc4A.svg`}
        />
      </TextAndIcon1>
      <TextAndIcon2>
        <Element>안녕하세요</Element>
        <IconScale
          src={`https://file.rendit.io/n/pJEQT22KjJHlvD8BpEiR.svg`}
        />
      </TextAndIcon2>
    </div>
  );
}

