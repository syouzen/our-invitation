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
        imageUrl:
          'https://lh6.googleusercontent.com/proxy/vuxyus0fYbILQcp7YGZetOZECaBMPJBE9IY4OEBmw1y47E5ULJpRjCYl9P53o-1G2OrxQg8ftdrJIEWrY69X6tdlFEOo_BbPW-TOZYtL9FAzwgz6uxDje-PWwdfMNgBrU3aA1C26zRKlI4o',
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

      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconShare />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onLinkCopy}>
            <div className="flex justify-center items-center gap-[4px]">
              <IconLink width={16} height={16} />
              링크주소 복사하기
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={onShareKakao}>
            <div className="flex justify-center items-center gap-[4px]">
              <IconKakao width={20} height={20} />
              카카오톡 공유하기
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Share;
