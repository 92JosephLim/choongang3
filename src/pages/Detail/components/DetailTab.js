import React, { useState } from "react";
import KakaoMap from "../../../api/KakaoMap";
import Weather from "./Weather";
import TourInfo from "../../../api/TourMap";
import DetailInfo from "./DetailInfo";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div>{children}</div> : null;
};

const DetailTab = () => {
  const [activeTab, setActiveTab] = useState("map");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center cursor-pointer ${
            activeTab === "map"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("map")}
        >
          지도
        </button>
        <button
          className={`flex-1 py-2 text-center cursor-pointer ${
            activeTab === "detail"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("detail")}
        >
          상세정보
        </button>
        <button
          className={`flex-1 py-2 text-center cursor-pointer ${
            activeTab === "weather"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("weather")}
        >
          날씨
        </button>
        <button
          className={`flex-1 py-2 text-center cursor-pointer ${
            activeTab === "tour"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("tour")}
        >
          관광지
        </button>
      </div>

      <TabContent id="map" activeTab={activeTab}>
        <p>여기에 지도 정보가 표시됩니다.</p>
      </TabContent>
      <TabContent id="detail" activeTab={activeTab}>
        <DetailInfo />
      </TabContent>
      <TabContent id="weather" activeTab={activeTab}>
        <p>여기에 날씨 정보가 표시됩니다.</p>
        <Weather />
      </TabContent>
      <TabContent id="tour" activeTab={activeTab}>
        <p>여기에 날씨 정보가 표시됩니다.</p>
        <TourInfo />
      </TabContent>
    </div>
  );
};

export default DetailTab;
