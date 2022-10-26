import { CardStatisticsLight3 } from "../atoms/ProgressCard";
import { Radar } from "./RadarGraph"
import { RadarContainer } from "../atoms/RadarContainer"
import { ChartTitle, Text} from "../atoms/ChartTitle";

export const RadarCard = ({}) => {
    return (
        <CardStatisticsLight3>
            <RadarContainer>
                <ChartTitle>
                    <Text>아아아아아아</Text>
                </ChartTitle>
                <Radar></Radar>
            </RadarContainer>
        </CardStatisticsLight3>
    );
};