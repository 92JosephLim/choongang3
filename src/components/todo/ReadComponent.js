

import { useEffect, useState } from "react"
import  {getOne3} from "../../api/gocamping"
import useCustomMove from "../../hooks/useCustomMove"




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

const ReadComponent = ({tno}) => {




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

  return (  



  <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">
    <img src={gocamping.firstImageUrl} alt="이미지 설명"   className="w-full"/>
   
    {makeDiv('임시번호 : ', gocamping.tno)}
    {makeDiv('야영장명 : ', gocamping.facltNm)}
    {makeDiv('주소 : ', gocamping.addr1)}

    {makeDiv('소개 :', gocamping.lineIntro)}
    {makeDiv('세부소개 : ', gocamping.intro)}
    {makeDiv('전화번호', gocamping.tel)}
    {makeDiv('사진소개', gocamping.featureNm)}
    {makeDiv('카테고리', gocamping.teindutyl)}
    {makeDiv('환경', gocamping.lctCl)}
    {makeDiv('홈페이지주소', gocamping.homepage)}

    {makeDiv('ResveUrl', gocamping.resveUrl)}

    

    {/* 버튼 추가  리스트,  변경 */}
    <div className="flex justify-end p-4">
  
    </div>
  </div>
  )
}
 
export default ReadComponent

