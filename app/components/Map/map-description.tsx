import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Dropdown';

const MapDescription = () => {
  return (
    <div className="mt-[16px] mb-[64px] px-[16px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">지하철</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex flex-col gap-[4px]">
              <Link
                href="https://naver.me/5JpkWgRu"
                target="_blank"
                className="flex items-center"
              >
                <div className="bg-[-40px_0px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_traffic_190826.png)] bg-no-repeat w-[14px] h-[14px] mr-[5px] overflow-hidden" />
                3호선 안국역 1번 출구, 도보 약 5분 거리에 위치
              </Link>
              <Link
                href="https://naver.me/5Bcj1E4C"
                target="_blank"
                className="flex items-center"
              >
                <div className="bg-[-80px_0px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_traffic_190826.png)] bg-no-repeat w-[14px] h-[14px] mr-[5px] overflow-hidden" />
                5호선 광화문역 2번 출구, 도보 약 5분 거리에 위치
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">버스</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <Link
                href="https://naver.me/GWegvO0b"
                target="_blank"
                className="flex items-center"
              >
                법련사 정류장, 도보 약 1분 거리에 위치
              </Link>
            </div>
            <div className="flex gap-[4px] items-center">
              <div>*</div>
              <div className="bg-[-330px_-410px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_traffic_190826.png)] bg-no-repeat w-[26px] h-[16px] overflow-hidden" />
              <span>종로 11번 버스</span>
            </div>
            <div className="my-[2px]" />
            <div className="flex gap-[2px]">
              <Link
                href="https://naver.me/G65eGJfJ"
                target="_blank"
                className="flex items-center"
              >
                덕성여중고 정류장, 도보 약 3분 거리에 위치
              </Link>
            </div>
            <div className="flex gap-[4px] items-center">
              <div>*</div>
              <div className="bg-[0px_-410px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_traffic_190826.png)] bg-no-repeat w-[26px] h-[16px] overflow-hidden" />
              <span>171, 272, 401, 406, 704, 710번 버스</span>
            </div>
            <div className="flex gap-[4px] items-center">
              <div>*</div>
              <div className="bg-[-60px_-410px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_traffic_190826.png)] bg-no-repeat w-[26px] h-[16px] overflow-hidden" />
              <span>7022, 7025, 8111번 버스</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">주차</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>건물 내 15대 무료</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>주차장이 매우 협소하여 혼잡할 수 있습니다.</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>불편하시더라도 가능한 대중교통 이용을 권장 드립니다.</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>
                만차 시 <b>국립현대미술관, 경복궁</b> 주차장 이용 부탁 드립니다.
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="mt-[4px] w-fit px-[16px] py-[8px] flex justify-center items-center">
                <div className="text-[13px] leading-[20px] text-gray-500">
                  <span>외부 주차장 안내</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem href="https://naver.me/GDa2FKhZ">
                  국립현대미술관 주차장
                </DropdownMenuItem>
                <DropdownMenuItem href="https://naver.me/FY3ycwW6">
                  경복궁 주차장
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">식사</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>신선한 제철 재료를 사용한 코스요리입니다.</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>
                모든 자리는 <b>지정석</b>입니다.
              </span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>
                <b>80인</b>까지 이용이 가능합니다. 너른 양해를 부탁 드립니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDescription;
