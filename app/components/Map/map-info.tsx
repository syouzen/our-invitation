import {IconMap, IconPhone2} from '@/app/assets';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Dropdown';
import MapGallary from './map-gallary';

const MapInfo = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] mt-[32px] mb-[48px]">
      <MapGallary />

      <div className="flex flex-col justify-center items-center gap-[16px]">
        <div className="text-[16px] leading-[24px] flex flex-col gap-[4px] justify-center items-center">
          <strong>두가헌</strong>
          <span>서울 종로구 삼청로 14</span>
        </div>

        <div className="flex gap-[8px]">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IconPhone2 />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem href="tel:02-3210-2100" target="_self">
                tel: 02-3210-2100
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <IconMap />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem href="https://tmap.life/754d0653">
                티맵
              </DropdownMenuItem>
              <DropdownMenuItem href="https://naver.me/5vIYBzpn">
                네이버 지도
              </DropdownMenuItem>
              <DropdownMenuItem href="https://kko.kakao.com/YQjI3gSmm7">
                카카오 지도
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
