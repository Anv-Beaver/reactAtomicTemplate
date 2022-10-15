import {LogoContainer, LogoSpan, Logo_textAndLine, IndigoRectangle_LogoLine, Text_ANV} from "../atoms/Logo";

export const Logo = ({}) => {
    return (
        <LogoContainer>
            <LogoSpan>
                <Logo_textAndLine>
                    <IndigoRectangle_LogoLine />
                    <Text_ANV>ANV_1</Text_ANV>
                </Logo_textAndLine>
            </LogoSpan> 

        </LogoContainer>
    );
}