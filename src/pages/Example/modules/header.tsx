import { Logobox, ANV_1, Rectangle_1} from "../atoms/Logo";
import ic24_menu from './ic24_menu.png';


export const Logo = () => {
    return (
        <div>
            <Logobox>
                <Rectangle_1 />
                <ANV_1>  ANV_1 
                </ANV_1> 
            </Logobox>
            <img src={ic24_menu}></img>
        </div>
        
    );
}