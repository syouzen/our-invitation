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
          <div className="text-[13px] leading-[20px] text-gray-600 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>3호선 안국역 1번 출구, 도보 5분 거리에 위치</span>
            </div>
            <div className="flex gap-[2px]">
              <span>5호선 광화문역 2번 출구, 도보 10분 거리에 위치</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">버스</div>
          <div className="text-[13px] leading-[20px] text-gray-600 flex flex-col gap-[2px]">
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
          <div className="text-[13px] leading-[20px] text-gray-600 flex flex-col gap-[2px]">
            <div className="flex gap-[4px]">
              <span>건물 내 12대 무료</span>
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
                만차 시 주위 <b>유료 주차장</b> 이용 부탁 드립니다.
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="mt-[4px] w-fit px-[16px] py-[8px] flex justify-center items-center">
                <div className="text-[13px] leading-[20px] text-gray-600">
                  <span>외부 주차장 안내</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem href="https://naver.me/FY3ycwW6">
                  경복궁 주차장
                </DropdownMenuItem>
                <DropdownMenuItem href="https://naver.me/GDa2FKhZ">
                  국립현대미술관 주차장
                </DropdownMenuItem>
                <DropdownMenuItem href="https://naver.me/F2ZABDCE">
                  트윈트리 타워 주차장
                </DropdownMenuItem>
                <DropdownMenuItem href="https://naver.me/xktVQP9w">
                  서머셋 팰리스 주차장
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col item-start gap-[8px]">
          <div className="font-bold text-[16px] leading-[24px]">식사</div>
          <div className="text-[13px] leading-[20px] text-gray-600 flex flex-col gap-[2px]">
            <div className="flex gap-[2px]">
              <span>식사는 프렌치&이탈리안 코스요리입니다.</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>
                예식 후 함께하는 식사와 담소의 시간이 약 1시간 30분 정도
                이어집니다.
              </span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>자리는 모두 가족/친지 지정석으로 마련되어 있습니다.</span>
            </div>
            <div className="flex gap-[4px]">
              <span>*</span>
              <span>
                지정석이 없는 분들은 서머셋 팰리스 1층, 더키친 일뽀르노에서
                편안히 식사하실 수 있습니다.
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="mt-[4px] w-fit px-[16px] py-[8px] flex justify-center items-center">
                <div className="text-[13px] leading-[20px] text-gray-600">
                  <span>외부 식당 안내</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem href="https://naver.me/xOxHPUUY">
                  더키친 일뽀르노
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[8px] pt-[32px]">
          <div className="text-[13px] leading-[20px] text-gray-700 flex flex-col gap-[2px] text-center">
            <span>화환은 정중히 사양합니다.</span>
            <span>좋은 마음만 감사히 받겠습니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDescription;
