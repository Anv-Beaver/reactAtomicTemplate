import {Circle, ListText, BackgroundPanel, Icon, CheckIcon, TextContainer, CardTitle, Paragraph} from "../atoms/RightBottomCard"
import { RectangleCard2 } from "../atoms/RectangleCard";

export const BottomCard = ({}) => {
    return(
        <RectangleCard2>
            <BackgroundPanel>

            <TextContainer>
            <div aria-setsize={24}>
            <Icon
                src={`https://file.rendit.io/n/nG1vr4vqmM9HO3e56AGj.svg`}
            />
            </div>
                <CardTitle>출처: 나무위키</CardTitle>
                <Paragraph>카르다쇼프 척도는 일종의 우주 문명의 척도로, 에너지 총
                      사용량에 따라 문명의 수준을 측정하는 방법이다. 이</Paragraph>
            </TextContainer>
            <span> 
                <Circle></Circle> 
                <ListText>이메일 주소입니다 옆에 체크</ListText>
                <CheckIcon
                src={`https://file.rendit.io/n/4ttobmJzZmM6Nlv7LPqB.svg`}
                />
            </span>
            <span> 
                <Circle></Circle> 
                <ListText>이메일 주소입니다 옆에 체크</ListText>
                <CheckIcon
                src={`https://file.rendit.io/n/4ttobmJzZmM6Nlv7LPqB.svg`}
                />
            </span>           
            </BackgroundPanel>
        </RectangleCard2>

    );
}