import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sunnydown from '../img/sunnydown.svg';
import foggydown from '../img/foggydown.svg';
import cloudydown from '../img/cloudydown.svg';
import rainydown from '../img/rainydown.svg';
import snowydown from '../img/snowydown.svg';
import { ReactComponent as SearchMap } from '../img/down.svg'; // 경로를 수정해주세요

const API_KEY = '17b429a820b8a6496558ef04590c64f9';
const SEOUL_COORDS = { lat: 37.5665, lon: 126.9780 };
const ICONS = {
  '01d': sunnydown,
  '01n': sunnydown,
  '02d': cloudydown,
  '02n': cloudydown,
  '03d': cloudydown,
  '03n': cloudydown,
  '04d': cloudydown,
  '04n': cloudydown,
  '09d': rainydown,
  '09n': rainydown,
  '10d': rainydown,
  '10n': rainydown,
  '11d': rainydown,
  '11n': rainydown,
  '13d': snowydown,
  '13n': snowydown,
  '50d': foggydown,
  '50n': foggydown,
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { month: '2-digit', day: '2-digit', weekday: 'short' };
  const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
  return formattedDate;
};

const ModalComponent = ({ handleClose, clickHandler }) => {
  return (
    <div id="CampingLocalSearch" className="grid grid-cols-3" onClick={clickHandler}>
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
  );
};

const Append = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchSeoulWeather = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${SEOUL_COORDS.lat}&lon=${SEOUL_COORDS.lon}&cnt=7&appid=${API_KEY}&units=metric`);
        setWeatherInfo(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchSeoulWeather();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const click_123 = () => {
    alert(111);
};

  return (
    <div className="flex flex-wrap justify-center p-1 overflow-x-auto">
      <div className="w-full flex justify-center mb-3">
        <button onClick={toggleModal} className="bg-white text-black rounded-full py-1 px-3 m-1 hover:bg-gray-200 transition-colors duration-300">
          <SearchMap className="w-8 h-8"/>
        </button>
      </div>
      {modal && <ModalComponent handleClose={handleCloseModal} clickHandler={click_123}/>}


      {weatherInfo && weatherInfo.list.map((weather, index) => (
        <div key={index} className="bg-white rounded-lg p-1 m-1 flex-none w-16 text-center flex-shrink-0">
          <h2 className="text-xxxxs font-bold mb-0">{formatDate(weather.dt).split(' ')[0]}</h2>
          <div className="flex flex-col items-center">
            <img src={ICONS[weather.weather[0].icon]} alt={weather.weather[0].description} className="w-8 h-8" />
            <div className="mt-1">
              <h3 className="text-xs text-gray-800">현재 <span className="text-xxxxxxxs">{Math.round(weather.temp.day)} °C</span></h3>
              <h3 className="text-xs text-gray-800">최저 <span className="text-xxxxxxxs">{Math.round(weather.temp.min)} °C</span></h3>
              <h3 className="text-xs text-gray-800">최고 <span className="text-xxxxxxxs">{Math.round(weather.temp.max)} °C</span></h3>
              <h3 className="text-xs text-gray-800">최고 <span className="text-xxxxxxxs">{weather.humidity} °C</span></h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Append;