'use client';

import {IconCopy} from '@/app/assets';
import Link from 'next/link';
import {cn} from '@/app/utils/tailwind-utils';
import useToast from '@/app/hook/useToast';

type AccountInfo = {
  info: {
    name: string;
    bank: string;
    account: string;
    kakao?: string;
  };
};

const AccountInfo = ({info}: AccountInfo) => {
  const {showToast} = useToast();

  const onAccountCopy = async (bank: string, account: string) => {
    try {
      await navigator.clipboard.writeText(`${bank} ${account}`);
      showToast('계좌번호를 복사했어요');
    } catch (e) {
      console.error(e);
      showToast('계좌번호 복사에 실패했어요');
    }
  };

  return (
    <div className="flex flex-col gap-[12px] py-[8px]">
      <div className="mb-[6px] flex justify-between items-center">
        <span>
          <b>{info.name}</b>
        </span>
        <div>
          <span>{info.bank}</span>
          <span> {info.account}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-[4px]">
        <button
          className="flex w-[100%] h-[40px] justify-center items-center cursor-pointer text-[12px] leading-[18px] gap-[4px] bg-gray-100 rounded-[8px] whitespace-nowrap"
          onClick={() => onAccountCopy(info.bank, info.account)}
        >
          <IconCopy width={14} height={14} />
          계좌번호 복사하기
        </button>
        {!!info.kakao && (
          <Link
            className={cn(
              'flex w-[100%] h-[40px] justify-center items-center bg-transparent border-none cursor-pointer bg-[#fae14b] rounded-[8px] p-[16px]',
            )}
            href={info.kakao}
            target="_blank"
          >
            <span className="relative inline-block w-[34px] h-[11px] top-[0.5px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAWCAYAAAB5VTpOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDQtMTdUMjM6MzI6NTUrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA0LTE3VDIzOjQ4OjU1KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA0LTE3VDIzOjQ4OjU1KzA5OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MzM4NTU0LWYzZjItNGQ0ZC04MTY3LTdhZDkwYTlmNjFhMyIgeG1w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')] bg-no-repeat bg-contain scale-[1.2]" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
