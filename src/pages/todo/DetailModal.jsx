import React from "react"

const DetailModal = (props) =>{
    return(
        <div id="campingDetail" >               
            <div id="campingDetailOperate" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black ">
                <p className="col-span-3 md:col-span-5 ml-3">운영형태</p>
                <div className="">
                    <input id="d_d101" type="checkbox" className="mx-1 my-2"></input><label for="d_d101" className="mr-1">지자체</label>
                </div>
                <div className="">
                    <input id="d_d102" type="checkbox" className="mx-1 my-2"></input><label for="d_d102" className="mr-1">국립공원</label>
                </div>
                <div className="">
                    <input id="d_d103" type="checkbox" className="mx-1 my-2"></input><label for="d_d103" className="mr-1">자연휴양림</label>
                </div>
                <div className="">
                    <input id="d_d104" type="checkbox" className="mx-1 my-2"></input><label for="d_d104" className="mr-1">국민여가</label>
                </div>
                <div className="">
                    <input id="d_d105" type="checkbox" className="mx-1 my-2"></input><label for="d_d105" className="mr-1">민간</label>
                </div>
            </div>
            <div id="campingDetailLocation" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black">
            <p className="col-span-3 md:col-span-5 ml-3">입지구분</p>
                <div className="">
                    <input id="d_d201" type="checkbox" className="mx-1 my-2"></input><label for="d_d201" className="mr-1">해변</label>
                </div>
                <div className="">
                    <input id="d_d202" type="checkbox" className="mx-1 my-2"></input><label for="d_d202" className="mr-1">섬</label>
                </div>
                <div className="">
                    <input id="d_d203" type="checkbox" className="mx-1 my-2"></input><label for="d_d203" className="mr-1">산</label>
                </div>
                <div className="">
                    <input id="d_d204" type="checkbox" className="mx-1 my-2"></input><label for="d_d204" className="mr-1">숲</label>
                </div>
                <div className="">
                    <input id="d_d205" type="checkbox" className="mx-1 my-2"></input><label for="d_d205" className="mr-1">계곡</label>
                </div>
                <div className="">
                    <input id="d_d206" type="checkbox" className="mx-1 my-2"></input><label for="d_d206" className="mr-1">강</label>
                </div>
                <div className="">
                    <input id="d_d207" type="checkbox" className="mx-1 my-2"></input><label for="d_d207" className="mr-1">호수</label>
                </div>
                <div className="">
                    <input id="d_d208" type="checkbox" className="mx-1 my-2"></input><label for="d_d208" className="mr-1">도심</label>
                </div>
            </div>
            <div id="campingDetailFacility" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black">
            <p className="col-span-3 md:col-span-5 ml-3">주요시설</p>
                <div className="">
                    <input id="d_d301" type="checkbox" className="mx-1 my-2"></input><label for="d_d301" className="mr-1">일반야영장</label>
                </div>
                <div className="">
                    <input id="d_d302" type="checkbox" className="mx-1 my-2"></input><label for="d_d302" className="mr-1">글램핑</label>
                </div>
                <div className="">
                    <input id="d_d303" type="checkbox" className="mx-1 my-2"></input><label for="d_d303" className="mr-1">카라반</label>
                </div>
                <div className="col-span-2">
                    <input id="d_d304" type="checkbox" className="mx-1 my-2"></input><label for="d_d304" className="mr-1">자동차야영장</label>
                </div>
            </div>
            <div id="campingDetailFloor" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black">
            <p className="col-span-3 md:col-span-5 ml-3">바닥형태</p>
                <div className="">
                    <input id="d_d401" type="checkbox" className="mx-1 my-2"></input><label for="d_d401" className="mr-1">잔디</label>
                </div>
                <div className="">
                    <input id="d_d402" type="checkbox" className="mx-1 my-2"></input><label for="d_d402" className="mr-1">파쇄석</label>
                </div>
                <div className="">
                    <input id="d_d403" type="checkbox" className="mx-1 my-2"></input><label for="d_d403" className="mr-1">데크</label>
                </div>
                <div className="">
                    <input id="d_d404" type="checkbox" className="mx-1 my-2"></input><label for="d_d404" className="mr-1">자갈</label>
                </div>
                <div className="">
                    <input id="d_d405" type="checkbox" className="mx-1 my-2"></input><label for="d_d405" className="mr-1">맨흙</label>
                </div>
                <div className="">
                    <input id="d_d406" type="checkbox" className="mx-1 my-2"></input><label for="d_d406" className="mr-1">블록</label>
                </div>
                <div className="">
                    <input id="d_d407" type="checkbox" className="mx-1 my-2"></input><label for="d_d407" className="mr-1">기타</label>
                </div>
            </div>
            <div id="campingDetailThema"className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black" >
            <p className="col-span-3 md:col-span-5 ml-3">테마별</p>
                <div className="">
                    <input id="d_d501" type="checkbox" className="mx-1 my-2"></input><label for="d_d501" className="mr-1">일출명소</label>
                </div>
                <div className="">
                    <input id="d_d502" type="checkbox" className="mx-1 my-2"></input><label for="d_d502" className="mr-1">일몰명소</label>
                </div>
                <div className="">
                    <input id="d_d503" type="checkbox" className="mx-1 my-2"></input><label for="d_d503" className="mr-1">수상레저</label>
                </div>
                <div className="">
                    <input id="d_d504" type="checkbox" className="mx-1 my-2"></input><label for="d_d504" className="mr-1">항공레저</label>
                </div>
                <div className="">
                    <input id="d_d505" type="checkbox" className="mx-1 my-2"></input><label for="d_d505" className="mr-1">스키</label>
                </div>
                <div className="">
                    <input id="d_d506" type="checkbox" className="mx-1 my-2"></input><label for="d_d506" className="mr-1">낚시</label>
                </div>
                <div className="">
                    <input id="d_d507" type="checkbox" className="mx-1 my-2"></input><label for="d_d507" className="mr-1">액티비티</label>
                </div>
                <div className="">
                    <input id="d_d508" type="checkbox" className="mx-1 my-2"></input><label for="d_d508" className="mr-1">봄꽃여행</label>
                </div>
                <div className="">
                    <input id="d_d509" type="checkbox" className="mx-1 my-2"></input><label for="d_d509" className="mr-1">여름물놀이</label>
                </div>
                <div className="">
                    <input id="d_d510" type="checkbox" className="mx-1 my-2"></input><label for="d_d510" className="mr-1">단풍명소</label>
                </div>
                <div className="">
                    <input id="d_d511" type="checkbox" className="mx-1 my-2"></input><label for="d_d511" className="mr-1">눈꽃명소</label>
                </div>
            </div>
            <div id="campingDetailAmenities" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black">
            <p className="col-span-3 md:col-span-5 ml-3">부대시설</p>
                <div className="">
                    <input id="d_d601" type="checkbox" className="mx-1 my-2"></input><label for="d_d601" className="mr-1">전기</label>
                </div>
                <div className="">
                    <input id="d_d602" type="checkbox" className="mx-1 my-2"></input><label for="d_d602" className="mr-1">무선인터넷</label>
                </div>
                <div className="">
                    <input id="d_d603" type="checkbox" className="mx-1 my-2"></input><label for="d_d603" className="mr-1">장작판매</label>
                </div>
                <div className="">
                    <input id="d_d604" type="checkbox" className="mx-1 my-2"></input><label for="d_d604" className="mr-1">온수</label>
                </div>
                <div className="">
                    <input id="d_d605" type="checkbox" className="mx-1 my-2"></input><label for="d_d605" className="mr-1">트렘폴린</label>
                </div>
                <div className="">
                    <input id="d_d606" type="checkbox" className="mx-1 my-2"></input><label for="d_d606" className="mr-1">물놀이장</label>
                </div>
                <div className="">
                    <input id="d_d607" type="checkbox" className="mx-1 my-2"></input><label for="d_d607" className="mr-1">놀이터</label>
                </div>
                <div className="">
                    <input id="d_d608" type="checkbox" className="mx-1 my-2"></input><label for="d_d608" className="mr-1">산책로</label>
                </div>
                <div className="">
                    <input id="d_d609" type="checkbox" className="mx-1 my-2"></input><label for="d_d609" className="mr-1">운동장</label>
                </div>
                <div className="">
                    <input id="d_d610" type="checkbox" className="mx-1 my-2"></input><label for="d_d610" className="mr-1">운동시설</label>
                </div>
                <div className="">
                    <input id="d_d611" type="checkbox" className="mx-1 my-2"></input><label for="d_d611" className="mr-1">편의점</label>
                </div>
                <div className="">
                    <input id="d_d612" type="checkbox" className="mx-1 my-2"></input><label for="d_d612" className="mr-1">덤프</label>
                </div>
            </div>
            <div id="campingDetailOtherinformation" className="border-2 grid grid-cols-3 md:grid-cols-5 my-3 mx-3 border-black text-sm  text-black"><p className="col-span-3 md:col-span-5 ml-3">기타정보</p>
                <div className="col-span-3">
                    <input id="d_d701" type="checkbox" className="mx-1 my-2"></input><label for="d_d701" className="mr-1">개인 트레일러 입장가능</label>
                </div>
                <div className="col-span-3">
                    <input id="d_d702" type="checkbox" className="mx-1 my-2"></input><label for="d_d702" className="mr-1">개인 캠핑카 입장가능</label>
                </div>
                <div className="col-span-3">
                    <input id="d_d703" type="checkbox" className="mx-1 my-2"></input><label for="d_d703" className="mr-1">반려동물 동반가능</label>
                </div>
                </div>
            <div id="campingDetailSelect" className="grid place-items-center grid-cols-4  my-3 mx-3text-sm  text-black">
                <button type="reset" className="col-span-2 border-4 border-black my-2 py-2 md:px-20 px-5 bg-[#12372A] text-[#E8DFCA]">초기화</button>
                <button type="submit" className="col-span-2 border-4 border-black my-2 py-2 md:px-20 px-5 bg-[#12372A] text-[#E8DFCA]">보내기</button>
                
            </div>
        </div>
    )
}

export default DetailModal;