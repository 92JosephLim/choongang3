import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MarkerClusterer,
} from "react-kakao-maps-sdk";

export const API_SERVER_LIST =
  "http://apis.data.go.kr/B551011/GoCamping/locationBasedList";
export const SERVER_KEY =
  "U2v8FkBtZre3faTP2NxqCqGArEkkO%2FvbnC7DDbFYtQPe0TpytXrzQywGbyZc9AgNXDrskylfErU4EddyuXAuKg%3D%3D";
function CampingInfo() {
  const [campingData, setCampingData] = useState([]);

  useEffect(() => {
    const fetchCampingData = async () => {
      try {
        const response = await axios.get(API_SERVER_LIST, {
          params: {
            serviceKey: decodeURIComponent(SERVER_KEY),
            numOfRows: 3826,
            pageNo: 1,
            MobileOS: "ETC",
            MobileApp: "AppTest",
            mapX: 128.6580419,
            mapY: 36.0485005,
            radius: 5000000,
            _type: "json",
          },
        });
        setCampingData(response.data.response.body.items.item);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchCampingData();
  }, []);
  return <KakaoMap campingData={campingData} />;
}

function KakaoMap({ campingData }) {
  const mapRef = useRef();
  const [openIndex, setOpenIndex] = useState(null);
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    setPositions(campingData);
  }, []);

  const onClusterclick = (f_target, cluster) => {
    const map = mapRef.current;
    const level = map.getLevel() - 1;
    map.setLevel(level, { anchor: cluster.getCenter() });
  };

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
        level={14}
      >
        {/* 클러스터 마커 표시 */}
        <MarkerClusterer
          averageCenter={true}
          minLevel={10}
          disableClickZoom={true}
          onClusterclick={onClusterclick}
        >
          {campingData &&
            campingData.map((marker, index) => (
              <React.Fragment key={marker.contentId}>
                <MapMarker
                  position={{ lat: marker.mapY, lng: marker.mapX }}
                  onClick={() => setOpenIndex(index)}
                  image={{
                    src: `${process.env.PUBLIC_URL}/img/camPing.png`,
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
                    position={{ lat: marker.mapY, lng: marker.mapX }}
                  >
                    <div className="wrap bg-white border border-black p-2 max-w-sm mx-auto rounded-lg shadow-l">
                      <div className="info">
                        <div className="title flex justify-between items-center">
                          <div className="flex items-center">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/camping.png`}
                              alt="Camping"
                              style={{ width: 20, height: 20 }}
                            />
                            <span>{marker.facltNm}</span>
                          </div>
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
                              width="100%"
                              height="70"
                              alt={marker.title}
                            />
                          </div>
                          <div className="desc">
                            <div className="ellipsis">{marker.induty}</div>
                            <div className="jibun ellipsis flex items-center">
                              <img
                                src={`${process.env.PUBLIC_URL}/img/locationPing.png`}
                                alt="Location"
                                style={{ width: 20, height: 20 }}
                              />
                              <span>{marker.addr1}</span>
                            </div>
                            <div className="flex items-center">
                              <img
                                src={`${process.env.PUBLIC_URL}/img/home.png`}
                                alt="Homepage"
                                style={{ width: 20, height: 20 }}
                              />
                              <a
                                href={marker.homepage}
                                target="_blank"
                                className="link"
                                rel="noreferrer"
                              >
                                홈페이지
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CustomOverlayMap>
                )}
              </React.Fragment>
            ))}
        </MarkerClusterer>
      </Map>
    </>
  );
}

export default CampingInfo;
