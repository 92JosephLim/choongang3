import { Link } from "react-router-dom";


const ThemeIcon_1 = `${process.env.PUBLIC_URL}/img2/beach.svg`;
const ThemeIcon_2 = `${process.env.PUBLIC_URL}/img2/beach.svg`;
const ThemeIcon_3 = `${process.env.PUBLIC_URL}/img2/mountain.svg`;
const ThemeIcon_4 = `${process.env.PUBLIC_URL}/img2/forest.svg`;
const ThemeIcon_5 = `${process.env.PUBLIC_URL}/img2/beach.svg`;
const ThemeIcon_6 = `${process.env.PUBLIC_URL}/img2/beach.svg`;
const ThemeIcon_7 = `${process.env.PUBLIC_URL}/img2/beach.svg`;
const ThemeIcon_8 = `${process.env.PUBLIC_URL}/img2/city.svg`;



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