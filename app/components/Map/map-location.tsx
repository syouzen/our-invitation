import Script from 'next/script';
import {useRef} from 'react';

const MapLocation = () => {
  const map = useRef<any>(null);

  const initMap = () => {
    const position = new window.naver.maps.LatLng(
      37.5771045665509,
      126.9800877049,
    );

    map.current = new window.naver.maps.Map('naver-map', {
      center: position,
      zoom: 15,
    });

    new window.naver.maps.Marker({
      position: position.destinationPoint(90, 15),
      map: map.current,
    });
  };

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onLoad={initMap}
      />
      <div className="w-full h-[250px]">
        <div id="naver-map" className="w-full h-full z-0"></div>
      </div>
    </>
  );
};

export default MapLocation;
