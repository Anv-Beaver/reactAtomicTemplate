import { Radar12 } from "./RadarGraph12"
import { Radar12Container } from "../atoms/RadarContainer"
import { ChartTitleRight, Text} from "../atoms/ChartTitle";
import { RectangleCard1 } from "../atoms/RectangleCard";

export const RadarCard12 = ({}) => {
    return (
        <RectangleCard1>
        <Radar12Container>
            <ChartTitleRight>
                <Text>아아아아아아</Text>
            </ChartTitleRight>
            <Radar12></Radar12>
        </Radar12Container>
        </RectangleCard1>
    );
};