'use client';

import React, {useRef} from 'react';
import Script from 'next/script';
import Intersection from '../Intersection';
import MapDescription from './map-description';
import MapInfo from './map-info';

const Map = () => {
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
      <Intersection className="flex flex-col gap-[32px]">
        <span className="text-center text-[16px] leading-[24px] text-gray-900">
          오시는 길
        </span>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
          onLoad={initMap}
        />
        <div className="w-full h-[250px]">
          <div id="naver-map" className="w-full h-full z-0"></div>
        </div>
      </Intersection>

      <Intersection>
        <MapInfo />
      </Intersection>

      <Intersection>
        <MapDescription />
      </Intersection>
    </>
  );
};

export default Map;
