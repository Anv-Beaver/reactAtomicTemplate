import { BoardBackground } from "../atoms/Board";
import {LeftColumn, MiddleColumn, RightColumn} from "../atoms/Columns";
import { ProgressCard1 } from "./ProgressCard1";
import { ProgressCard2 } from "./ProgressCard2";
import { LeftTopCard } from "./LeftTopCard";
import { GraphCard } from "./GraphCard";
import { RadarCard } from "./RadarCard"
import { RadarCard12 } from "./RadarCard12"
import { BottomCard } from "./RightBottomCard";
import { Line, Line2 } from "../atoms/LineAtom"

export const Board = ({}) => {
    return (
        <BoardBackground>
            <LeftColumn>
                <LeftTopCard/>
                <GraphCard/>
            </LeftColumn>
        
            
            {/* // ! 수정7 */}
            <MiddleColumn style={{marginLeft: "102px"}}>
                <ProgressCard1></ProgressCard1>
                <ProgressCard2></ProgressCard2>
                <RadarCard></RadarCard>
            </MiddleColumn>
            {/* <Line></Line> */}
            {/* <Line2></Line2> */}
            <RightColumn style={{marginLeft: "28px"}}>

                <RadarCard12></RadarCard12>
                
                <BottomCard></BottomCard>
            </RightColumn>
        </BoardBackground>
        
    );
}