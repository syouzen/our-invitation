'use client';

import React from 'react';
import Intersection from '../Intersection';
import MapDescription from './map-description';
import MapInfo from './map-info';
import MapLocation from './map-location';

const Map = () => {
  return (
    <>
      <Intersection className="flex flex-col gap-[32px]">
        <span className="text-center text-[16px] leading-[24px] text-gray-900">
          오시는 길
        </span>
        <MapLocation />
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
