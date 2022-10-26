import { DiagnosticCategory } from "typescript";
import { Background} from "../atoms/Back";
import { Check_icon, User_icon, Vector_icon } from "../atoms/icons";
import { Rectangle_0, Menu, Option0, Option0_txt, Option1, Option1_txt, Tap, Option2, Option2_txt, Option3, Option3_txt, Option4, Option4_txt, Alien_txt, Alien_content} from "../atoms/Rectangle_0";
import { Drake_content, Drake_txt, Line0, Line0_content, Line1, Rectangle_1} from "../atoms/Rectangle_1";
import { Drake_content_2, Drake_txt_2, Line0_2, Line0_content_2, Line1_2, Rectangle_2} from "../atoms/Rectangle_2";
import { Bubble_3, Bubble_3_txt, Radar0, Rectangle_3} from "../atoms/Rectangle_3";
import { Bar0, Bar1, Bar10, Bar11, Bar2, Bar3, Bar4, Bar5, Bar6, Bar7, Bar8, Bar9, Bar_graph, Feb, Jul, Mar, May, Rectangle_4, Slider_box, Slider_thumb, Slider_thumb_back, Slider_total, Slider_track } from "../atoms/Rectangle_4";
import { Anything, Bubble_5, Bubble_5_txt, Radar1, Rectangle_5 } from "../atoms/Rectangle_5";
import { Dialog, Dialog_0, Dialog_0_circle, Dialog_0_txt, Dialog_1, Dialog_1_circle, Dialog_1_txt, Namu, Namu_content, Rectangle_6 } from "../atoms/Rectangle_6";
import ic24_user from '../../../assets/images/ic32-user.png';
import ic24_vector from '../../../assets/images/vector_icon.png';
import ic24_check from '../../../assets/images/check_box.png';
import { Just_line0, Just_line1 } from "../atoms/Just_line";
import ic24_anything from '../../../assets/images/Tooltip.png';

export const Body = () => {
    return (
        <div>
            <Background>
                <Rectangle_0>
                    <Menu>
                        <Option0>
                            <Option0_txt>
                                가나다라마사바                            
                            </Option0_txt> 
                        </Option0>
                        <Option1>
                            <Tap />
                            <Option1_txt>
                                아자차카타파하
                            </Option1_txt>
                        </Option1>
                        <Option2>
                            <Option2_txt>
                                에이비씨디이엪
                            </Option2_txt>
                        </Option2>
                        <Option3>
                            <Option3_txt>
                                닥스훈트 말티즈
                            </Option3_txt>
                        </Option3>
                        <Option4>
                            <Option4_txt>
                                치와와 포메라니안
                            </Option4_txt>
                        </Option4>
                    </Menu>
                    <Alien_txt>
                        외계인 실존설
                    </Alien_txt>
                    <Alien_content>
                        외계인의 존재에 대한 진지한 고찰은 단 하나의 사실에서 시작된다. 바로 우리가 존재한다는 것이다.
                    </Alien_content>
                </Rectangle_0>
                <Rectangle_1>
                    <User_icon src={ic24_user} />
                    <Drake_txt>
                        162
                    </Drake_txt>
                    <Drake_content>
                        드레이크 방정식은 1960년대에 프랭크 드레이크라는 과학자가 만든
                    </Drake_content>
                    <Line0>
                        <Line0_content>
                        </Line0_content>
                    </Line0>
                    <Line1>
                    </Line1>
                </Rectangle_1>
                <Rectangle_2>
                    <User_icon src={ic24_user} />
                    <Drake_txt_2>
                        1010
                    </Drake_txt_2>
                    <Drake_content_2>
                        인류 문명의 존재로 인해 우리 우주에서 생명체가 발생하고 이들이 문명까지 건설할 수 있다는                    </Drake_content_2>
                    <Line0_2>
                        <Line0_content_2>
                        </Line0_content_2>
                    </Line0_2>
                    <Line1_2>
                    </Line1_2>
                </Rectangle_2>
                <Rectangle_3>
                    <Bubble_3>
                        <Bubble_3_txt>
                            아아아아아어
                        </Bubble_3_txt>
                    </Bubble_3>
                    <Radar0 />
                </Rectangle_3>
                <Rectangle_4>
                    <Bar_graph>
                        <Bar0 />
                        <Bar1 />
                        <Bar2 />
                        <Bar3 /> 
                        <Bar4 />
                        <Bar5 />
                        <Bar6 />
                        <Bar7 />
                        <Bar8 />
                        <Bar9 />
                        <Bar10 />
                        <Bar11 />
                        <Feb>Feb</Feb>
                        <Mar>Mar</Mar>
                        <May>May</May>
                        <Jul>Jul</Jul>
                    </Bar_graph>
                    <Slider_box>
                        <Slider_thumb />
                        <Slider_total />
                        <Slider_track />
                        <Slider_thumb_back />
                    </Slider_box>
                </Rectangle_4>
                <Rectangle_5>
                    <Bubble_5>
                        <Bubble_5_txt>
                            아아아아아아
                        </Bubble_5_txt>
                    </Bubble_5>
                    <Radar1 />
                    <Anything src={ic24_anything}/>
                </Rectangle_5>
                <Rectangle_6>
                    <Dialog>
                        <Vector_icon src={ic24_vector} />
                        <Namu>
                            출처: 나무위키
                        </Namu>
                        <Namu_content>
                            카르다쇼프 척도는 일종의 우주 문명의 척도로, 에너지 총 사용량에 따라 문명의 수준을 측정하는 방법이다. 이
                        </Namu_content>
                        <Dialog_0>
                            <Dialog_0_circle />
                            <Dialog_0_txt>
                                이메일 주소입니다 옆에 체크
                            </Dialog_0_txt>
                            <Check_icon src={ic24_check} />
                        </Dialog_0>
                        <Dialog_1>
                            <Dialog_1_circle />
                            <Dialog_1_txt>
                                두번째 체크 네네
                            </Dialog_1_txt>
                            <Check_icon src={ic24_check} />
                        </Dialog_1>
                    </Dialog>
                </Rectangle_6>
                <Just_line0 />
                <Just_line1 />
            </Background>
            
        </div>
    );
}