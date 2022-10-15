import {CardStatisticsLight1, IconAndText, TextContainer, TextElement, NumberElement, IconContainer, IconImg, ProgressSmall, Line, UpperLine, LowerLine} from "../atoms/ProgressCard";

export const ProgressCard1 = ({}) => {
    return (
        <CardStatisticsLight1>
            <IconAndText>
            <TextContainer>
            <NumberElement>162</NumberElement>
            <TextElement>
                드레이크 방정식은 1960년대에 프랭크 드레이크라는 과학자가 만든{" "}
            </TextElement>
            </TextContainer>
            <IconContainer>
            <IconImg
                src={`https://file.rendit.io/n/JNjJdMSbBaCjH19wDeE4.svg`}
            />
            </IconContainer>
            </IconAndText>
            <ProgressSmall>
                <UpperLine>
                <Line/>
                </UpperLine>
            </ProgressSmall>
            <LowerLine>
                <Line/>
            </LowerLine>
            
        </CardStatisticsLight1>


    );
}