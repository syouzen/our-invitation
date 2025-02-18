import {IconMap, IconPhone} from '@/app/assets';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Dropdown';
import Image from 'next/image';

const MapInfo = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] my-[48px]">
      <div className="flex justify-center items-center mb-[32px]">
        <Image
          src="/images/logo.png"
          alt="두가헌"
          width={360}
          height={140}
          className="px-[32px] min-w-[180px]"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[16px] leading-[24px] flex flex-col gap-[4px]">
          <strong>💍 두가헌</strong>
          <p>서울 종로구 삼청로 14</p>
        </div>

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
      <button
        className="text-gray-500 text-[14px] leading-[20px] bg-white cursor-pointer w-fit"
        onClick={() => (window.location.href = 'tel:02-6261-1616')}
      >
        <a
          className="flex items-center gap-[4px] text-gray-500 text-[14px] leading-[20px]"
          href="tel:02-3210-2100"
        >
          <IconPhone width="13px" height="13px" />
          02-3210-2100
        </a>
      </button>
    </div>
  );
};

export default MapInfo;
