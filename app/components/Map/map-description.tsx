import Link from 'next/link';

const MapDescription = () => {
  return (
    <div className="mt-[16px] mb-[64px] px-[16px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">지하철</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>3호선 안국역 1번 출구, 도보 5분 거리에 위치</span>
            </div>
            <div className="flex gap-[2px]">
              <span>5호선 광화문역 2번 출구, 도보 5분 거리에 위치</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">버스</div>
          <div className="text-[13px] leading-[20px] text-gray-500 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>법련사 정류장, 도보 1분 거리에 위치</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>종로 11번 버스</span>
            </div>
            <div className="flex gap-[2px]">
              <span>덕성여중고 정류장, 도보 3분 거리에 위치</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>171, 272, 401, 406, 704, 710, 7022, 7025, 8111번 버스</span>
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
            <div className="flex gap-[4px] mt-[8px]">
              <Link
                href="https://naver.me/GDa2FKhZ"
                target="_blank"
                className="w-full text-center border border-gray-400 rounded-[4px] py-[4px] px-[8px]"
              >
                국립현대미술관 주차장
              </Link>
              <Link
                href="https://naver.me/FY3ycwW6"
                target="_blank"
                className="w-full text-center border border-gray-400 rounded-[4px] py-[4px] px-[8px]"
              >
                경복궁 주차장
              </Link>
            </div>
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
