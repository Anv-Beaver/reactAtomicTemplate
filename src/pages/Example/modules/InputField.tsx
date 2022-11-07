import {FieldsRoot, Fields, Text1, AtomText, Icon} from "../atoms/InputField";
import { DesktopRoot, Content } from "../atoms/desktopRoot";

export const InputField = ({}) => {
    return (
        <FieldsRoot>
            <Fields>
            <Text1>
                <AtomText>입력</AtomText>
            </Text1>
            <Icon src={`https://file.rendit.io/n/OVBr1OVHWcokZeuZmV4P.svg`} />
            </Fields>
        </FieldsRoot>
    );
  };