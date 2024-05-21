// import { useEffect , useRef, useState} from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, StaticMap } from "react-kakao-maps-sdk";
// import { useKakaoLoader } from "react-kakao-maps-sdk";
// import { MarkerClusterer } from "react-kakao-maps-sdk";
// import { MapMarker} from "react-kakao-maps-sdk";
// import clusterPositionsData from '../Camping.json';

// const { kakao } = window;

// const MapPage = () => {
//     const mapRef = useRef();
//     const [positions, setPositions] = useState([]);

//     useEffect(() => {
//       setPositions(clusterPositionsData.positions);
//     },[])
  
//     const onClusterclick = (f_target, cluster) => {
//       const map = mapRef.current
//       // 현재 지도 레벨에서 1레벨 확대한 레벨
//       const level = map.getLevel() - 1;
  
//       // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
//       map.setLevel(level, {anchor: cluster.getCenter()});
//     };
//     return(
//         <BasicLayout>
//               <Map // 지도를 표시할 Container
//                 center={{
//                   // 지도의 중심좌표
//                   lat: 36.2683,
//                   lng: 127.6358,
//                 }}
//                 style={{
//                   // 지도의 크기
//                   width: "100%",
//                   height: "760px",
//                 }}
//                 level={14} // 지도의 확대 레벨
//                 ref={mapRef}
//               >
//                 <MarkerClusterer
//                   averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
//                   minLevel={10} // 클러스터 할 최소 지도 레벨
//                   disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
//                   // 마커 클러스터러에 클릭이벤트를 등록합니다
//                   // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
//                   // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
//                   onClusterclick={onClusterclick}
//                 >
//                   {positions.map((pos) => (
//                     <MapMarker
//                       key={`${pos.lat}-${pos.lng}`}
//                       position={{
//                         lat: pos.lat,
//                         lng: pos.lng,
//                       }}
//                     />
//                   ))}
//                 </MarkerClusterer>
//               </Map>

//         </BasicLayout>
//     );
// };


// function()  {
//   const data = [
//     {
//       content: <div style={{ color: "#000" }}>카카오</div>,
//       latlng: { lat: 33.450705, lng: 126.570677 },
//     },
//     {
//       content: <div style={{ color: "#000" }}>생태연못</div>,
//       latlng: { lat: 33.450936, lng: 126.569477 },
//     },
//     {
//       content: <div style={{ color: "#000" }}>텃밭</div>,
//       latlng: { lat: 33.450879, lng: 126.56994 },
//     },
//     {
//       content: <div style={{ color: "#000" }}>근린공원</div>,
//       latlng: { lat: 33.451393, lng: 126.570738 },
//     },
//   ];

//   const [selectedMarker, setSelectedMarker] = useState(null);

//   const EventMarkerContainer = ({ position, content }) => {
//     const map = useMap();

//     return (
//       <MapMarker
//         position={position} // 마커를 표시할 위치
//         // @ts-ignore
//         onClick={() => setSelectedMarker({ position, content })}
//       />
//     );
//   };

//   return (
//     <Map // 지도를 표시할 Container
//       center={{
//         // 지도의 중심좌표
//         lat: 33.450701,
//         lng: 126.570667,
//       }}
//       style={{
//         // 지도의 크기
//         width: "100%",
//         height: "450px",
//       }}
//       level={3} // 지도의 확대 레벨
//     >
//       {data.map((value) => (
//         <EventMarkerContainer
//           key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
//           position={value.latlng}
//           content={value.content}
//         />
//       ))}
//       {selectedMarker && (
//   <MapMarker
//     position={selectedMarker.position}
//     onClick={() => setSelectedMarker(null)}
//   >
//     {selectedMarker.content}
//   </MapMarker>
// )}

//     </Map>
//   );
// }
// export default MapPage;


// 마커 + 위도/경도 표시 
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);

//   useEffect(() => {
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             />
//           ))}
//         </MarkerClusterer>
//       </Map>

//       {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}
//     </BasicLayout>
//   );
// };

// export default MapPage;


// 현재위치 마커 + 정보 표시
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MapMarker } from "react-kakao-maps-sdk";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [center, setCenter] = useState({
//     lat: 33.450701,
//     lng: 126.570667,
//   });
//   const [errMsg, setErrMsg] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCenter({
//             lat: position.coords.latitude, // 위도
//             lng: position.coords.longitude, // 경도
//           });
//           setIsLoading(false);
//         },
//         (err) => {
//           setErrMsg(err.message);
//           setIsLoading(false);
//         }
//       );
//     } else {
//       // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
//       setErrMsg("geolocation을 사용할수 없어요..");
//       setIsLoading(false);
//     }
//   }, []);

//   return (
//     <BasicLayout>
//       <Map
//         center={center}
//         style={{
//           width: "100%",
//           height: "450px",
//         }}
//         level={3}
//         ref={mapRef}
//       >
//         {!isLoading && (
//           <MapMarker position={center}>
//             <div style={{ padding: "5px", color: "#000" }}>
//               {errMsg ? errMsg : "여기에 계신가요?!"}
//             </div>
//           </MapMarker>
//         )}
//       </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;


// 모든 마커 정보가 뜸
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 현재 위치 가져오기
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setIsLoading(false);
//         },
//         (error) => {
//           setCurrentLocationError(error.message);
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setCurrentLocationError("Geolocation을 지원하지 않습니다.");
//       setIsLoading(false);
//     }

//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               <div style={{ textAlign: "center", color: "white" }}>
//                 {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//               </div>
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             <div style={{ textAlign: "center", color: "white" }}>
//               {`현재 위치: 위도 ${currentLocation.lat.toFixed(
//                 6
//               )}, 경도 ${currentLocation.lng.toFixed(6)}`}
//             </div>
//           </MapMarker>
//         )}
//       </Map>

//       {/* 선택된 마커 정보 표시 */}
//       {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}

//       {/* 현재 위치 에러 메시지 표시 */}
//       {!isLoading && currentLocationError && (
//         <div className="error-message">{currentLocationError}</div>
//       )}
//     </BasicLayout>
//   );
// };

// export default MapPage;


// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 현재 위치 가져오기
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setIsLoading(false);
//         },
//         (error) => {
//           setCurrentLocationError(error.message);
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setCurrentLocationError("Geolocation을 지원하지 않습니다.");
//       setIsLoading(false);
//     }

//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               <div style={{ textAlign: "center", color: "white" }}>
//                 {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//               </div>
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             <div style={{ textAlign: "center", color: "white" }}>
//               {`현재 위치: 위도 ${currentLocation.lat.toFixed(
//                 6
//               )}, 경도 ${currentLocation.lng.toFixed(6)}`}
//             </div>
//           </MapMarker>
//         )}
//       </Map>

//       {/* 선택된 마커 정보 표시 */}
//       {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}

//       {/* 현재 위치 에러 메시지 표시 */}
//       {!isLoading && currentLocationError && (
//         <div className="error-message">{currentLocationError}</div>
//       )}
//     </BasicLayout>
//   );
// };

// export default MapPage;



// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 현재 위치 가져오기
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setIsLoading(false);
//         },
//         (error) => {
//           setCurrentLocationError(error.message);
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setCurrentLocationError("Geolocation을 지원하지 않습니다.");
//       setIsLoading(false);
//     }

//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 위치 정보 표시 */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-20px", // 마커의 위에 표시되도록 조절
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   textAlign: "center",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   padding: "5px",
//                   borderRadius: "5px",
//                   color: "white",
//                   zIndex: "1000",
//                 }}
//               >
//                 {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//               </div>
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             {/* 현재 위치 정보 표시 */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-20px", // 마커의 위에 표시되도록 조절
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 textAlign: "center",
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 color: "white",
//                 zIndex: "1000",
//               }}
//             >
//               {`현재 위치: 위도 ${currentLocation.lat.toFixed(6)}, 경도 ${currentLocation.lng.toFixed(6)}`}
//             </div>
//           </MapMarker>
//         )}
//       </Map>

//       {/* 선택된 마커 정보 표시 */}
//       {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}

//       {/* 현재 위치 에러 메시지 표시 */}
//       {!isLoading && currentLocationError && (
//         <div className="error-message">{currentLocationError}</div>
//       )}
//     </BasicLayout>
//   );
// };

// export default MapPage;


// // 마커 클릭시 흰박스(캠핑장명 들어갈 부분) + 위도/경도 뜸
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 현재 위치 가져오기
//     // if (navigator.geolocation) {
//     //   navigator.geolocation.getCurrentPosition(
//     //     (position) => {
//     //       setCurrentLocation({
//     //         lat: position.coords.latitude,
//     //         lng: position.coords.longitude,
//     //       });
//     //       setIsLoading(false);
//     //     },
//     //     (error) => {
//     //       setCurrentLocationError(error.message);
//     //       setIsLoading(false);
//     //     }
//     //   );
//     // } else {
//     //   setCurrentLocationError("Geolocation을 지원하지 않습니다.");
//     //   setIsLoading(false);
//     // }

//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "-20px", // 마커의 위에 표시되도록 조절
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     textAlign: "center",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "5px",
//                     borderRadius: "5px",
//                     color: "white",
//                     zIndex: "1000",
//                   }}
//                 >
//                   {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//                 </div>
//               )}
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             {/* 현재 위치 정보 표시 */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-20px", // 마커의 위에 표시되도록 조절
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 textAlign: "center",
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 color: "white",
//                 zIndex: "1000",
//               }}
//             >
//               {`현재 위치: 위도 ${currentLocation.lat.toFixed(6)}, 경도 ${currentLocation.lng.toFixed(6)}`}
//             </div>
//           </MapMarker>
//         )}
//       </Map>

// {/* 아래쪽에 위도/경도 표시 */}
//       {/* 선택된 마커 정보 표시 */}
//       {/* {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}

//       {/* 현재 위치 에러 메시지 표시 */}
//       {/* {!isLoading && currentLocationError && (
//         <div className="error-message">{currentLocationError}</div>
//       )} */} 
//     </BasicLayout>
//   );
// };

// export default MapPage;



// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 현재 위치 가져오기
//     // if (navigator.geolocation) {
//     //   navigator.geolocation.getCurrentPosition(
//     //     (position) => {
//     //       setCurrentLocation({
//     //         lat: position.coords.latitude,
//     //         lng: position.coords.longitude,
//     //       });
//     //       setIsLoading(false);
//     //     },
//     //     (error) => {
//     //       setCurrentLocationError(error.message);
//     //       setIsLoading(false);
//     //     }
//     //   );
//     // } else {
//     //   setCurrentLocationError("Geolocation을 지원하지 않습니다.");
//     //   setIsLoading(false);
//     // }

//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위도/경도 표시 */}
//               {selectedMarker === pos && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "-20px", // 마커의 위에 표시되도록 조절
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     textAlign: "center",
//                     // backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     backgroundColor: "red",
//                     padding: "5px",
//                     borderRadius: "5px",
//                     color: "white",
//                     zIndex: "1000",
//                   }}
//                 >
                  
//                   {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//                 </div>
//               )}
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             {/* 현재 위치 정보 표시 */}
//             {/* <div
//               style={{
//                 position: "absolute",
//                 top: "-20px", // 마커의 위에 표시되도록 조절
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 textAlign: "center",
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 color: "white",
//                 zIndex: "1000",
//               }}
//             >
//               {`현재 위치: 위도 ${currentLocation.lat.toFixed(6)}, 경도 ${currentLocation.lng.toFixed(6)}`}
//             </div> */}
//           </MapMarker>
//         )}
//       </Map>

// {/* 아래쪽에 위도/경도 표시 */}
//       {/* 선택된 마커 정보 표시 */}
//       {/* {selectedMarker && (
//         <div className="marker-info">
//           <h2>{selectedMarker.name}</h2>
//           <p>위도: {selectedMarker.lat}</p>
//           <p>경도: {selectedMarker.lng}</p>
//         </div>
//       )}

//       {/* 현재 위치 에러 메시지 표시 */}
//       {/* {!isLoading && currentLocationError && (
//         <div className="error-message">{currentLocationError}</div>
//       )} */} 
//     </BasicLayout>
//   );
// };

// export default MapPage;

// 위도,경도 + 흰색 텍스트박스
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "-20px", // 마커의 위에 표시되도록 조절
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     textAlign: "center",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "5px",
//                     borderRadius: "5px",
//                     color: "white",
//                     zIndex: "1000",
//                   }}
//                 >
//                   {`위도: ${pos.lat.toFixed(6)}, 경도: ${pos.lng.toFixed(6)}`}
//                 </div>
//               )}
//             </MapMarker>
//           ))}
//         </MarkerClusterer>

//         {/* 현재 위치 마커 표시 */}
//         {!isLoading && currentLocation && (
//           <MapMarker position={currentLocation}>
//             {/* 선택된 마커일 때만 현재 위치 정보 표시 */}
//             {selectedMarker === null && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-20px", // 마커의 위에 표시되도록 조절
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   textAlign: "center",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   padding: "5px",
//                   borderRadius: "5px",
//                   color: "white",
//                   zIndex: "1000",
//                 }}
//               >
//                 {`현재 위치: 위도 ${currentLocation.lat.toFixed(6)}, 경도 ${currentLocation.lng.toFixed(6)}`}
//               </div>
//             )}
//           </MapMarker>
//         )}
//       </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

// 캠핑장이름, 큰지도, 길찾기 + 닫기버튼(닫힘기능ㅇㅋ) 
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 인포윈도우 Open 여부를 저장하는 state 입니다.
//   const [isOpen, setIsOpen] = useState(false)
  
//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(true); // 마커 클릭 시 인포윈도우 열기
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && isOpen && (
//                 /* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */
//                 /* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */
//             <div style={{ padding: "5px", color: "#000" }}>
//                 하늘 캠핑장 
//                 <img
//               alt="close"
//               width="14"
//               height="13"
//               src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//               style={{
//                 position: "absolute",
//                 right: "5px",
//                 top: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(false)}
//             />
//             <br />
//                 <a
//                 href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     상세보기
//                 </a>{" "}
//                 <a
//                 href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     길찾기

//                 </a>
//             </div>
//             )}
            
//             </MapMarker>
//         ))}
//         </MarkerClusterer>
//     </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

// 캠핑장이름, 큰지도, 길찾기 + 닫기버튼 + 마커 한번 더 클릭시 닫힘 (닫힘기능ㅇㅋ)
// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";
// import { Link } from "react-router-dom"; // Link 추가

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 인포윈도우 Open 여부를 저장하는 state
//   const [isOpen, setIsOpen] = useState(false)
  
//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(!isOpen); // 마커 클릭 시 인포윈도우 열기
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && isOpen && (
//                 /* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 함 */
//                 /* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능함 */
//             <div style={{ padding: "5px", color: "#000" }}>
//                 하늘 캠핑장 
//                 <img
//               alt="close"
//               width="14"
//               height="13"
//               src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//               style={{
//                 position: "absolute",
//                 right: "5px",
//                 top: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(!isOpen)}
              
//             />
//             <br />
//                 <a
//                 href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     상세보기
//                 </a>{" "}
//                 <a
//                 href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     길찾기
//                 </a>
//             </div>
//             )}
            
//             </MapMarker>
//         ))}
//         </MarkerClusterer>
//     </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;


// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";
// import { Link } from "react-router-dom"; // Link 추가

// const MapPage = () => {
//   const mapRef = useRef();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(true); // 마커 클릭 시 인포윈도우 열기
//   };

//   const onDetailButtonClick = (campingSiteName) => {
//     // 캠핑장 상세 페이지로 이동
//     // window.location.href = `https://gocamping.or.kr/bsite/camp/info/read.do?c_no=${campingSiteId}&viewType=read03`;
//     window.location.href = "https://gocamping.or.kr/bsite/camp/info/read.do?c_no=8014&viewType=read03";
//   };

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 마커 클릭 시 인포윈도우 */}
//               {selectedMarker === pos && isOpen && (
//                 <div style={{ padding: "5px", color: "#000" }}>
//                   {/* 상세보기 버튼 */}
//                   <button onClick={() => onDetailButtonClick(pos.name)}>상세보기</button>
//                 </div>
//               )}
//             </MapMarker>
//           ))}
//         </MarkerClusterer>
//       </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const navigate = useNavigate();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 인포윈도우 Open 여부를 저장하는 state 입니다.
//   const [isOpen, setIsOpen] = useState(false)
  
  
//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(!isOpen); // 마커 클릭 시 인포윈도우가 열려 있으면 닫고 닫혀 있으면 열기
//   };
//   const handleClick = () => {
//     navigate("/search");
//   };
  

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && isOpen && (
//                 /* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */
//                 /* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */
//             <div style={{ padding: "5px", color: "#000" }}>
//                 하늘 캠핑장 
//                 <img
//               alt="close"
//               width="14"
//               height="13"
//               src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//               style={{
//                 position: "absolute",
//                 right: "5px",
//                 top: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(!isOpen)}
              
//             />
//             <br />
//                 <Link
//                   to="#"
//                   onClick={handleClick}
//                   style={{ color: "blue" }}
//                   rel="noreferrer"
//                 >
//                     상세보기
//                 </Link>{" "}
//                 <a
//                 href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     길찾기
//                 </a>
//             </div>
//             )}
            
//             </MapMarker>
//         ))}
//         </MarkerClusterer>
//     </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker, MapInfoWindow, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk";
// // import clusterPositionsData from "../Camping.json";
// import clusterPositionsData from "../Camping copy.json";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const navigate = useNavigate();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 인포윈도우 Open 여부를 저장하는 state 입니다.
//   const [isOpen, setIsOpen] = useState(false)
//   const [result, setResult] = useState("")
  
//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(!isOpen); // 마커 클릭 시 인포윈도우가 열려 있으면 닫고 닫혀 있으면 열기
//   };
//   const handleClick = () => {
//     navigate("/search");
//   };
  

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           mapy: 37.6764256,
//           mapx: 127.0330822,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               // key={`${pos.contentId}`}
//               // position={{
//               //   contentId: pos.contentId
//               // }}
//               key={`${pos.mapy}-${pos.mapx}`}
//               position={{
//                 mapy: pos.mapy,
//                 mapx: pos.mapx,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && isOpen && (
//                 /* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */
//                 /* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */
//             <div style={{ padding: "5px", color: "#000" }}>
//                 무수아취 
//                 <img
//               alt="close"
//               width="14"
//               height="13"
//               src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//               style={{
//                 position: "absolute",
//                 right: "5px",
//                 top: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(!isOpen)}
              
//             />
//             <br />
//                 <Link
//                   to="#"
//                   onClick={handleClick}
//                   style={{ color: "blue" }}
//                   rel="noreferrer"
//                 >
//                     상세보기
//                 </Link>{" "}
//                 <a
//                 href="https://map.kakao.com/link/to/Hello World!,37.6764256,127.0330822"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     길찾기
//                 </a>
//             </div>
//             )}
            
//             </MapMarker>
//         ))}
//         </MarkerClusterer>
//         {/* 확대 막대 추가 */}
//         <ZoomControl />  
//     </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

// import React, { useEffect, useRef, useState } from "react";
// import BasicLayout from "../layouts/BasicLayout";
// import { Map, MarkerClusterer, MapMarker, MapInfoWindow, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk";
// import clusterPositionsData from "../Camping.json";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const { kakao } = window;

// const MapPage = () => {
//   const mapRef = useRef();
//   const navigate = useNavigate();
//   const [positions, setPositions] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [currentLocationError, setCurrentLocationError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 인포윈도우 Open 여부를 저장하는 state 입니다.
//   const [isOpen, setIsOpen] = useState(false)
//   const [result, setResult] = useState("")
  
//   useEffect(() => {
//     // 클러스터 위치 설정
//     setPositions(clusterPositionsData.positions);
//   }, []);

//   const onClusterclick = (f_target, cluster) => {
//     const map = mapRef.current;
//     const level = map.getLevel() - 1;
//     map.setLevel(level, { anchor: cluster.getCenter() });
//   };

//   const onMarkerClick = (marker) => {
//     setSelectedMarker(marker);
//     setIsOpen(!isOpen); // 마커 클릭 시 인포윈도우가 열려 있으면 닫고 닫혀 있으면 열기
//   };
//   const handleClick = () => {
//     navigate("/search");
//   };
  

//   return (
//     <BasicLayout>
//       <Map
//         center={{
//           lat: 36.2683,
//           lng: 127.6358,
//         }}
//         style={{
//           width: "100%",
//           height: "760px",
//         }}
//         level={14}
//         ref={mapRef}
//       >
//         {/* 클러스터 마커 표시 */}
//         <MarkerClusterer
//           averageCenter={true}
//           minLevel={10}
//           disableClickZoom={true}
//           onClusterclick={onClusterclick}
//         >
//           {positions.map((pos) => (
//             <MapMarker
//               key={`${pos.lat}-${pos.lng}`}
//               position={{
//                 lat: pos.lat,
//                 lng: pos.lng,
//               }}
//               onClick={() => onMarkerClick(pos)}
//             >
//               {/* 선택된 마커일 때만 위치 정보 표시 */}
//               {selectedMarker === pos && isOpen && (
//                 /* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */
//                 /* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */
//             <div style={{ padding: "5px", color: "#000" }}>
//                 하늘 캠핑장 
//                 <img
//               alt="close"
//               width="14"
//               height="13"
//               src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//               style={{
//                 position: "absolute",
//                 right: "5px",
//                 top: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={() => setIsOpen(!isOpen)}
              
//             />
//             <br />
//                 <Link
//                   to="#"
//                   onClick={handleClick}
//                   style={{ color: "blue" }}
//                   rel="noreferrer"
//                 >
//                     상세보기
//                 </Link>{" "}
//                 <a
//                 href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
//                 style={{ color: "blue" }}
//                 target="_blank"
//                 rel="noreferrer"
//                 >
//                     길찾기
//                 </a>
//             </div>
//             )}
            
//             </MapMarker>
//         ))}
//         </MarkerClusterer>
//         {/* 확대 막대 추가 */}
//         <ZoomControl />  
//     </Map>
//     </BasicLayout>
//   );
// };

// export default MapPage;

import React, { useEffect, useRef, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import Kakaomapapi from "./todo/KakaoMap"

const MapPage = () => {

  return (
    <BasicLayout>
        <Kakaomapapi></Kakaomapapi>
    </BasicLayout>
  );
};

export default MapPage;
