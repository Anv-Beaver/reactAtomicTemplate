import {CardStatisticsLight2, IconAndText, TextContainer, TextElement, NumberElement, IconContainer, IconImg, ProgressSmall, Line, UpperLine, LowerLine} from "../atoms/ProgressCard";

export const ProgressCard2 = ({}) => {
    return (
        <CardStatisticsLight2>
            <IconAndText>
            <TextContainer>
            <NumberElement>1010</NumberElement>
            <TextElement>
                인류 문명의 존재로 인해 우리 우주에서 생명체가 발생하고 이들이 문명까지 건설할 수 있다는
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
                <Line />
                </UpperLine>
            </ProgressSmall>
            <LowerLine>
                <Line />
            </LowerLine>
        </CardStatisticsLight2>

    );
}