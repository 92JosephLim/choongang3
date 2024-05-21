import React from "react";
import { useState } from "react";
import { ReactComponent as Home } from "../../img/home.svg";
import { ReactComponent as SearchMap } from "../../img/map.svg";
import { ReactComponent as Search } from "../../img/search.svg";

const RegionModal = (props) => {
  return(
    <div id="CampingLocalSearch" className="grid grid-cols-3">
                    <div id="CampingLocalSelect" className="col-start-1 col-span-1 bg-[#E8DFCA]">
                        <ul className="list-none text-center">
                            <li>서울</li>
                            <li>경기</li>
                            <li>인천</li>
                            <li>강원</li>
                            <li>대전</li>
                            <li>세종</li>
                            <li>충북</li>
                            <li>충남</li>
                            <li>대구</li>
                            <li>울산</li>
                            <li>경북</li>
                            <li>경남</li>
                            <li>전북</li>
                            <li>전남</li>
                            <li>제주</li>
                        </ul>
                    </div>
                    <div id="CampingLocalDetailSelect" className="text-center grid grid-cols-2 col-span-2">
                        <div className="list-none col-span-2 grid grid-cols-2 bg-[#F5EFE6]">
                        <div className="col-span-2">경기</div>
                            <p className="col-span-1">안성</p>
                            <p className="col-span-1">안산</p>
                            <p className="col-span-1">평택</p>
                            <p className="col-span-1">남양주</p>
                            <p className="col-span-1">하남</p>
                            <p className="col-span-1">광주</p>
                            <p className="col-span-1">양평</p>
                            <p className="col-span-1">용인</p>
                            <p className="col-span-1">화성</p>
                            <p className="col-span-1">연천</p>
                            <p className="col-span-1">...</p>
                        </div>         
                    </div>
                    <div id="CampingSelect" className="grid grid-cols-3 col-span-3 bg-[#F5EFE6]">
                        <div id="Localinit" className="col-span-1 text-xl bg-[#12372A] grid place-items-center text-[#E8DFCA] border-solid ml-2 mr-1 my-1.5 rounded-l">초기화</div>
                        <div id="Localinit" className="col-span-2 text-xl bg-[#12372A] grid place-items-center text-[#E8DFCA] border-solid ml-1 mr-2 my-1.5 rounded-l">검색하기</div>
                    </div>
                </div>
  )
}
export default RegionModal;