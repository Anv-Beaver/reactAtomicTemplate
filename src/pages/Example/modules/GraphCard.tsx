import { RectangleCard } from "../atoms/RectangleCard";
import { GraphGroup, Subgroup, BarsContainer, TextMonth } from "../atoms/GraphCard"
import { Bar, Bar1, Bar2, Bar3, Bar4, Bar5, Bar6, Bar7, Bar8, Bar10, Bar11 } from "../atoms/GraphCardBars"
import { Slider } from "./Slider"

export const GraphCard = ({}) => {
    return (
        <RectangleCard>
            <GraphGroup>
                <Subgroup>
                    <BarsContainer>
                        <Bar />
                        <Bar1 />
                        <Bar2 />
                    </BarsContainer>
                    <TextMonth>Feb</TextMonth>
                </Subgroup>
                <Subgroup>
                    <BarsContainer>
                        <Bar3 />
                        <Bar4 />
                        <Bar5 />
                    </BarsContainer>
                    <TextMonth>Mar</TextMonth>
                </Subgroup>
                <Subgroup>
                    <BarsContainer>
                        <Bar6 />
                        <Bar7 />
                        <Bar8 />
                    </BarsContainer>
                    <TextMonth>May</TextMonth>
                </Subgroup>
                <Subgroup>
                    <BarsContainer>
                        <Bar3 />
                        <Bar10 />
                        <Bar11 />
                    </BarsContainer>
                    <TextMonth>Jul</TextMonth>
                </Subgroup>
            </GraphGroup>
            <Slider></Slider>
        </RectangleCard>
);
}