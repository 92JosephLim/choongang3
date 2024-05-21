

import { useEffect, useState } from "react"
import  {getOne3} from "../../api/gocamping"
import useCustomMove from "../../hooks/useCustomMove"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };




const initState = {
  tno:0,
  facltNm:'',
  addr1: '',
  lineIntro:'',
  intro: '',
  tel:'',
  featureNm: '',
  teindutyl:'',
  lctCl: '',
  homepage:'',
  resveUrl: '',
  firstImageUrl:'',

}

const ReadComponent2 = ({tno}) => {




  // 중복 코드 처리를 위한 함수
  const makeDiv = (facltNm,addr1) =>       
        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{facltNm}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{addr1}</div>
            </div>
        </div>
  const [gocamping, setGocamping] = useState(initState) //아직 todo는 사용하지 않음 
  
  const {moveToList, moveToModify} = useCustomMove()


  //useEffect(이펙트 함수, 배열)
  useEffect(() => {
    getOne3(tno).then(data => {
      console.log(data)
      setGocamping(data)
    })    
  }, [tno])

  const images = [
    `${gocamping.firstImageUrl}`,
    "https://gocamping.or.kr/upload/camp/10/thumb/thumb_720_1869epdMHtUyrinZWKFHDWty.jpg",
    "https://gocamping.or.kr/upload/camp/10/thumb/thumb_720_1869epdMHtUyrinZWKFHDWty.jpg",
    "https://gocamping.or.kr/upload/camp/10/thumb/thumb_720_1869epdMHtUyrinZWKFHDWty.jpg",
  ];

  return (  



  <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">


<div className="container mx-auto px-4">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>


 
<div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-gray-500 sm:text-base">
              항목
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-500 sm:text-base">
              정보
            </th>
          </tr>
        </thead>
        <tbody>
          




          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">야영장 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.facltNm}
            </td>
          </tr>

          
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">소개 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.lineIntro}
            </td>
          </tr>

          
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">상세소개 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.intro}
            </td>
          </tr>

          
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">문의처 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.tel}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">사진소개 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.featureNm}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">캠핑장 유형 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.teindutyl}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">캠핑장 환경 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.lctCl}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">홈페이지 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
              <a
                href={`http://${gocamping.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
               >
                {gocamping.homepage}
            </a>
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">예약 : </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            <a
            href={gocamping.resveUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
          {gocamping.resveUrl}
        </a>

            </td>
          </tr>


          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">주소</td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.addr1}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">문의처</td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            {gocamping.tel}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">
            캠핑장 환경
            </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base"> {gocamping.lctCl}</td>
          </tr>
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">
              캠핑장 유형
            </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">{gocamping.teindutyl}</td>
          </tr>
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">운영기간</td>
            <td className="p-4 text-sm text-gray-600 sm:text-base"></td>
          </tr>
          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">운영일</td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">
              평일+주말
            </td>
          </tr>
          

          <tr className="border-b">
            <td className="p-4 text-sm text-gray-600 sm:text-base">
              주변 이용시설
            </td>
            <td className="p-4 text-sm text-gray-600 sm:text-base">운동시설</td>
          </tr>
        </tbody>
      </table>
    </div>


   

    

    {/* 버튼 추가  리스트,  변경 */}
    <div className="flex justify-end p-4">
  
    </div>
  </div>
  )
}
 
export default ReadComponent2

