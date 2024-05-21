import { Link } from "react-router-dom";

import { ReactComponent as ThemeIcon_1 } from "../../img/beach.svg";
import { ReactComponent as ThemeIcon_2 } from "../../img/beach.svg";
import { ReactComponent as ThemeIcon_3 } from "../../img/mountain.svg";
import { ReactComponent as ThemeIcon_4 } from "../../img/forest.svg";
import { ReactComponent as ThemeIcon_5 } from "../../img/beach.svg";
import { ReactComponent as ThemeIcon_6 } from "../../img/beach.svg";
import { ReactComponent as ThemeIcon_7 } from "../../img/beach.svg";
import { ReactComponent as ThemeIcon_8 } from "../../img/city.svg";


const Themes = () => {
return(
    // <BasicLayout>
        <div id="themeSection" className="text-3xl grid grid-rows-2 bg-[#FFFFFF] mt-10" >
            
            <div id="themeIcons_1" className="grid grid-cols-4 mb-3 mr-20 bg-[#FFFFFF]">
                <a href="#"><ThemeIcon_1 className="ml-20" /></a>
                <a href="#"><ThemeIcon_2 className="ml-20" /></a>
                <a href="#"><ThemeIcon_3 className="ml-20" /></a>
                <a href="#"><ThemeIcon_4 className="ml-20" /></a>
            </div>

            <div id="themeIcons_2" className="grid grid-cols-4 mb-10 mr-20">
                <a href="#"><ThemeIcon_5 className="ml-20" /></a>
                <a href="#"><ThemeIcon_6 className="ml-20" /></a>
                <a href="#"><ThemeIcon_7 className="ml-20" /></a>
                <a href="#"><ThemeIcon_8 className="ml-20" /></a>
            </div>
              
            </div>
    // </BasicLayout>
);
}
export default Themes;