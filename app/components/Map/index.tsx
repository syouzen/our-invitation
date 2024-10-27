'use client';

import React, {useRef} from 'react';
import styles from './components.module.css';
import Script from 'next/script';
import Intersection from '../Intersection';
import MapDescription from './map-description';
import MapInfo from './map-info';

const Map = () => {
  const map = useRef<any>(null);

  const initMap = () => {
    const position = new window.naver.maps.LatLng(
      37.5771083858247,
      126.979935344842,
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
      <Intersection>
        <div className={styles.wrapper}>
          <span className={styles.mapTitle}>오시는 길</span>
          <Script
            src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
            onLoad={initMap}
          />
          <div className={styles.mapWrapper}>
            <div id="naver-map" className={styles.map}></div>
          </div>
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
