import React from "react";
import { useState } from "react";
import DetailModal from "./DetailModal";
const Home = `${process.env.PUBLIC_URL}/img2/home.svg`;



const DetailedSearch = () => {
    const [modal, setModal] = useState(false);

    return(
        <>
            <div id="DetailedSearch" className=" grid grid-cols-4">
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <a href="" className="m-auto"><Home className="ml-1"/></a>
                <p className="md: bg-[#12372A]  text-[#E8DFCA] text-2xl grid place-items-center  border-solid }
                col-span-4 my-2 py-2" onClick={()=>{modal == true ? setModal(false) : setModal(true)}}>상세검색</p>
            </div>
            {
                modal == true ? <DetailModal /> : null         
            }

        </>
    )

}


export default DetailedSearch;