import { RectangleCard } from "../atoms/RectangleCard";
import {Tap, StateLayer, Element2, MenuMax, ListItems, Title, IndigoFlexRow, FlexColumn, Text1, Text2, TextElementsTitle, TextElementsTitle2, TextElementsTitle1} from "../atoms/LeftTopCard"

export const LeftTopCard = ({}) => {
    return (
      <RectangleCard>
        {/* // ! 수정 */}
        <MenuMax>
          <ListItems>
            <FlexColumn>
              <TextElementsTitle>
                <Title>가나다라마사바</Title>
              </TextElementsTitle>
            </FlexColumn>
            <IndigoFlexRow>
              <TextElementsTitle1>
                <Title>아자차카타파하</Title>
              </TextElementsTitle1>
              <StateLayer>
                <Tap src={`https://file.rendit.io/n/ffZU65FNfk549tzoJyv6.svg`} />
              </StateLayer>
            </IndigoFlexRow>
            <FlexColumn>
              <TextElementsTitle2>
                <Title>에이비씨디이엪</Title>
              </TextElementsTitle2>
            </FlexColumn>
            <FlexColumn>
              <TextElementsTitle>
                <Title>닥스훈트 말티즈</Title>
              </TextElementsTitle>
            </FlexColumn>
            <FlexColumn>
              <TextElementsTitle>
                <Title>치와와 포메라니안</Title>
              </TextElementsTitle>
            </FlexColumn>
          </ListItems>
        </MenuMax>

        <Text1 style={{marginTop: "16px"}}>
          <Text2>외계인 실존설</Text2>
          <Element2>
            외계인의 존재에 대한 진지한 고찰은 단 하나의 사실에서 시작된다. 바로
            우리가 존재한다는 것이다.
          </Element2>
        </Text1>

      </RectangleCard>
    );
  };