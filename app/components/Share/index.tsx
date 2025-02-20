'use client';

import React from 'react';
import {IconKakao, IconLink, IconShare} from '@/app/assets';
import Script from 'next/script';
import {toast, ToastOptions} from 'react-toastify';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Dropdown';

const INVITATION_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://our-invitation.vercel.app/'
    : 'http://localhost:3000/';

const Share = () => {
  const onInitKakao = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  const onShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        imageUrl: 'https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG',
        imageWidth: 600,
        imageHeight: 400,
        title: '최승연 ♥ 김현아 결혼합니다',
        description: '11월 8일 오후 12시 30분, 두가헌',
        link: {
          mobileWebUrl: INVITATION_URL,
          webUrl: INVITATION_URL,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: INVITATION_URL,
            webUrl: INVITATION_URL,
          },
        },
      ],
    });
  };

  const onLinkCopy = async () => {
    const toastId = 'unique-link-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    try {
      await navigator.clipboard.writeText(INVITATION_URL);
      toast.success('링크를 복사했어요', options);
    } catch (e) {
      console.error(e);
      toast.error('링크 복사를 실패했어요', options);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
        onLoad={onInitKakao}
      />

      <span className="text-center mb-[16px] text-[12px] leading-[18px]">
        공유하기
      </span>

      <div className="flex gap-[12px] mb-[8px]">
        <button
          className="flex justify-center items-center gap-[6px] text-[12px] leading-[18px] w-[40px] h-[40px] bg-gray-100 rounded-[100px]"
          onClick={onLinkCopy}
        >
          <IconLink width={16} height={16} />
        </button>
        <button
          className="flex justify-center items-center gap-[6px] text-[12px] leading-[18px] w-[40px] h-[40px] bg-gray-100 rounded-[100px]"
          onClick={onShareKakao}
        >
          <IconKakao width={22} height={22} />
        </button>
      </div>
    </div>
  );
};

export default Share;
