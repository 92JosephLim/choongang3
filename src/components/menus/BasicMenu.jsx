import { Link } from "react-router-dom";
import TestLogo from "../../img/logo.png";
import Sunny from "../../img/sunny.svg";

const BasicMenu = () => {
    return(
        <nav id="camheader"  className="grid grid-cols-8 bg-blue-300">
            <div className="col-start-1 col-span-8 bg-[#12372A]">
                <ul className="flex justify-between p-2 text-white font-bold">
                    <li className="pr-6 text-2xl col-start-5 col-span-1">
                        {/* <Link to={"/"}>Logo</Link> 436850*/}
                        <img src={TestLogo} className="h-20 bg-[#FFFFFF]" />
                    </li>

                    <li className="pr-6 text-2xl col-start-7 col-span-1">
                        <img src={Sunny} className="h-20 bg-[#FFFFFF]" />
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default BasicMenu;