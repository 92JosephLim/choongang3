import BasicLayout from "../layouts/BasicLayout";
import DetailedSearch from "./todo/DetailedSearch"; 
import { useState } from "react";
import RegionModal from "./todo/RegionModal";
import ListGocampingComponent from "../components/todo/ListGocampingComponent";


const Search = `${process.env.PUBLIC_URL}/img2/searchmini.svg`;

const SearchPage = () => {
    const [modal, setModal] = useState(false);
    return(
        <BasicLayout>
            <div id="campingSearch" className="text-3xl text-black">
                <div id="searchPageSearch" className="grid grid-cols-10 border-b-2">
                    <input type="text" id="campSearch" className="col-span-9 md:col-span-4 py-2 text-sm text-black text-center border-2 m-3 border-black rounded-xl" placeholder="검색"/>
                    <button type="submit" className="md:text-black mr-3 text-base col-span-1"><Search className="h-8"/></button>
                    <span id="localName" className="col-start-1 col-span-6 text-black ml-3 text-xl md:col-start-6 md:col-span-3 grid place-items-center">강남구</span>
                    <span id="campingLocal" className="col-start-7 col-span-4 m-0 md:col-start-9 md:col-span-2 text-base bg-[#12372A] grid place-items-center text-[#E8DFCA] border-solid ml-8 mr-0.5 my-1.5 rounded-xl"
                     onClick={()=>{modal == true ? setModal(false) : setModal(true)}}>지역선택</span>
                </div>

                {
                    modal == true ? <RegionModal /> : null         
                }

                <DetailedSearch></DetailedSearch>
                <div id="sequence" className=" grid grid-cols-8 py-3 px-5 text-sm font-bold">
                    <span className="col-start-1 col-span-4 text-xl text-black">총120개</span>
                    <select className="bg- text-black col-start-7 col-span-2 border-2 border-[#E8DFCA] rounded-md">
                        <option value="">추천순</option>
                        <option value="">추천순</option>
                        <option value="">추천순</option>
                    </select>
                </div>

                <ListGocampingComponent />


                <div id="searchSection" className="bg-white mt-5 ">


                 

                </div>
            </div>
        </BasicLayout>
    );
}

export default SearchPage;