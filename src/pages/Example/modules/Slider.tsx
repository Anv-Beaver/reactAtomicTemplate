import {Background, SliderRoot, Inactive, Active, Track, BaseSliderThumb, Thumb, Tip, Tooltip, State, Bubble, Circle, Triangle, Value, ValueContainer} from "../atoms/Slider"


export const Slider = ({}) => {
  return (
    <Background>
    <SliderRoot>
      <Inactive src={`https://file.rendit.io/n/MgDURszhD3qfsdRgvJzF.svg`} />
      <Track></Track>
        <ValueContainer>
          <Triangle></Triangle>
        <Value>80</Value>
          <Circle></Circle>

          <Tooltip>
            <Tip src={`https://file.rendit.io/n/esfMHcnpFuYskv2YQDHz.svg`} />
          </Tooltip>
        </ValueContainer>
      <Active>
          <State>
            <Thumb src={`https://file.rendit.io/n/896LSH2K6nU5uX5UB2BP.svg`} />
          </State>
        
        
      </Active>
    </SliderRoot>
    </Background>
  );
};
