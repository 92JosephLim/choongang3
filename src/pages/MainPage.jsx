import BasicLayout from "../layouts/BasicLayout";
import Banner from "../pages/todo/Banner";
import Themes from "../pages/todo/Themes";
import TypeContents from "../pages/todo/TypeContents";
import Append from "./Append";

const MainPage = () => {
    return(
        <BasicLayout>
            <p>test2</p>
            {/* <div className="text-3xl"> MainPage</div> */}
            <Banner />
            <Themes />
            <TypeContents />
            <Append />
        </BasicLayout>
        
    );
}

export default MainPage;