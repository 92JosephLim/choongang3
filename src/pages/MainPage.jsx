import BasicLayout from "../layouts/BasicLayout";
import Banner from "../pages/todo/Banner";
import Themes from "../pages/todo/Themes";
import TypeContents from "../pages/todo/TypeContents";
import SevenDaysWeather from "../pages/todo/SevenDaysWeather";
import Append from "./Append";

const MainPage = () => {
    return(
        <BasicLayout>
            <p>test</p>
            {/* <div className="text-3xl"> MainPage</div> */}
            <Banner />
            <Themes />
            <TypeContents />
            <Append />
        </BasicLayout>
        
    );
}

export default MainPage;