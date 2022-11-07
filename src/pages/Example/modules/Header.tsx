import { DesktopRoot, Content } from "../atoms/desktopRoot";
import { Logo } from "./Logo"
import { InputField } from "./InputField"
import { Toggles } from "./Toggles"
import {TextAndIcon1, TextAndIcon2, IconScale, Element} from "../atoms/ToggleText";
import {MenuIconContainer,MenuIcon} from"../atoms/MenuIconScale";

export const Header = ({}) => {
    return (
        <DesktopRoot>
            <Logo></Logo>
            <Toggles></Toggles>        
            <Content>
                <InputField></InputField>
            </Content>
        </DesktopRoot>
    );
}

