import { Logobox, ANV_1, Rectangle_1} from "../atoms/Logo";
import { Select0, Select0_txt } from "../atoms/Select0";
import { Select1, Select1_txt } from "../atoms/Select1";
import ic24_menu from '../../../assets/images/ic24_menu.png';
import { Search, Search_txt } from "../atoms/Search";
import { User_box, User_txt } from "../atoms/User";
import { Chat_icon, Down0, Down1, Down2, Menu, Notification_icon, Search_icon, Setting_icon, Subsetting_icon, Userpic_icon, Wallet_icon } from "../atoms/icons";
import ic24_down from '../../../assets/images/ic20-chevron-down.png';
import ic24_search from '../../../assets/images/ic24-search.png';
import ic24_wallet from '../../../assets/images/wallet.png';
import ic24_notification from '../../../assets/images/ic24-notification.png';
import ic24_chat from '../../../assets/images/ic24-chat.png';
import ic24_subsetting from '../../../assets/images/subsetting.png';
import ic24_userpic from '../../../assets/images/Userpic.png';
import ic24_setting from '../../../assets/images/ic24-settings.png';

export const Header = () => {
    return (
        <div>
            <Logobox>
                <Rectangle_1 />
                <ANV_1>
                    ANV_1 
                </ANV_1> 
            </Logobox>
            <Menu src={ic24_menu} />
            {/*<img src={ic24_menu} width="24.1px" height="24.1px"></img>*/}
            <Select0>
                <Select0_txt>
                    대충 뭐 자료
                </Select0_txt>
                <Down0 src={ic24_down} />
            </Select0>
            <Select1>
                <Select1_txt>
                    안녕하세요
                </Select1_txt>
                <Down1 src={ic24_down} />
            </Select1>
            <Search>
                <Search_txt>
                    입력
                </Search_txt>
                <Search_icon src={ic24_search} />
            </Search>
            <Wallet_icon src={ic24_wallet} />
            <Notification_icon src={ic24_notification} />
            <Chat_icon src={ic24_chat} />
            <Subsetting_icon src={ic24_subsetting} />
            <Userpic_icon src={ic24_userpic} />
            <User_box>
                <User_txt>
                    오채이
                </User_txt>
                <Down2 src={ic24_down} />
            </User_box>
            <Setting_icon src={ic24_setting} />
        </div>
    );
}