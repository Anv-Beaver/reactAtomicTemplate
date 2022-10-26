import { RectangleCard } from "../atoms/RectangleCard";
import {Tap, StateLayer, Element2, MenuMax, ListItems, Title, IndigoFlexRow, FlexColumn, Text1, Text2, TextElementsTitle, TextElementsTitle2, TextElementsTitle1} from "../atoms/LeftTopCard"
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { TextState } from "../../../reducers/ExampleReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTryAction } from "../ExampleActions";

export const LeftTopCard = ({}) => {
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  const searchSelector: TextState = useSelector((state:RootState) =>
    state.ExampleReducer.result
  );


    return (
      <RectangleCard>
        {/* // ! 수정 */}
        <MenuMax>
          <ListItems>
            <FlexColumn>
              <TextElementsTitle onClick={()=> {
                dispatch(searchTryAction("가나다라마사바"));
                setSelect(1);
                }}>
                <Title>가나다라마사바</Title>
              </TextElementsTitle>
            </FlexColumn>
            <IndigoFlexRow>
              <TextElementsTitle1  onClick={()=> {
                dispatch(searchTryAction("아자차카타파하"));
                setSelect(2);
                }}>
                <Title>아자차카타파하</Title>
              </TextElementsTitle1>
              <StateLayer>
                <Tap src={`https://file.rendit.io/n/ffZU65FNfk549tzoJyv6.svg`} />
              </StateLayer>
            </IndigoFlexRow>
            <FlexColumn>
              <TextElementsTitle2  onClick={()=> {
                dispatch(searchTryAction("에이비씨디이엪"));
                setSelect(3);
                }}>
                <Title>에이비씨디이엪</Title>
              </TextElementsTitle2>
            </FlexColumn>
            <FlexColumn>
              <TextElementsTitle  onClick={()=> {
                dispatch(searchTryAction("닥스훈트 말티즈"));
                setSelect(4);
                }}>
                <Title>닥스훈트 말티즈</Title>
              </TextElementsTitle>
            </FlexColumn>
            <FlexColumn>
              <TextElementsTitle  onClick={()=> {
                dispatch(searchTryAction("치와와 포메라니안"));
                setSelect(5);
                }}>
                <Title>치와와 포메라니안</Title>
              </TextElementsTitle>
            </FlexColumn>
          </ListItems>
        </MenuMax>

        <Text1 style={{marginTop: "16px"}}>
          <Text2>{searchSelector? searchSelector.title : ""}</Text2>
          <Element2>
          {searchSelector? searchSelector.content : ""}
          </Element2>
        </Text1>

      </RectangleCard>
    );
  };