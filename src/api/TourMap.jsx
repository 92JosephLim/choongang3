import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { touristData } from "./전국관광지정보표준데이터";

function TouristList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(touristData);
  }, []);
  return <KakaoMap data={data} />;
}

function KakaoMap({ data }) {
  console.log(data);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <Map
        id="map"
        center={{
          lat: 36.0345423, // 위도
          lng: 128.6142847, // 경도
        }}
        style={{
          width: "100%",
          height: "450px",
        }}
        level={5}
      >
        {data &&
          data.map((marker, index) => (
            <React.Fragment key={marker.contentId}>
              <MapMarker
                position={{ lat: marker.위도, lng: marker.경도 }}
                onClick={() => setOpenIndex(index)}
                image={{
                  src: `${process.env.PUBLIC_URL}/tourPing.png`,
                  size: {
                    width: 50,
                    height: 50,
                  },
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    },
                  },
                }}
              />
              {openIndex === index && (
                <CustomOverlayMap
                  position={{ lat: marker.위도, lng: marker.경도 }}
                >
                  <div className="wrap bg-white border border-black p-2 max-w-sm mx-auto rounded-lg shadow-l">
                    <div className="info">
                      <div className="title flex justify-between items-center">
                        {marker.관광지명}
                        <div
                          className="close cursor-pointer"
                          onClick={() => setOpenIndex(null)}
                          title="닫기"
                        >
                          X
                        </div>
                      </div>
                      <div className="body">
                        <div className="img">
                          <img
                            src={marker.firstImageUrl}
                            width="73"
                            height="70"
                            alt={marker.관광지명}
                          />
                        </div>
                        <div className="desc">
                          <div className="ellipsis">{marker.관광지구분}</div>
                          <div className="jibun ellipsis">
                            {marker.소재지도로명주소}
                          </div>
                          <div className="jibun ellipsis">
                            {marker.관광지소개}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomOverlayMap>
              )}
            </React.Fragment>
          ))}
      </Map>
    </>
  );
}

export default TouristList;
