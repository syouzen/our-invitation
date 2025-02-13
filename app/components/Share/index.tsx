'use client';

import React from 'react';
import {IconKakao, IconLink} from '@/app/assets';
import Image from 'next/image';
import Script from 'next/script';
import {toast, ToastOptions} from 'react-toastify';
import Intersection from '../Intersection';

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
    <>
      <Intersection>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
          onLoad={onInitKakao}
        />
        <div className="relative w-full h-[250px] overflow-hidden">
          <Image
            src="https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG"
            alt="공유하기 이미지"
            fill
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center text-white text-[14px] leading-[20px] [text-shadow:_1px_1px_2px_gray-900/70]">
            11월의 어느 햇살 고운 날,
            <br />
            귀한 걸음 하시어 따뜻한 마음으로
            <br />
            축복해 주시면 더 없는 기쁨이 되겠습니다.
          </div>
        </div>
      </Intersection>

      <Intersection>
        <div className="flex flex-col justify-center items-center mt-[32px] mb-[16px]">
          <button
            className="flex justify-center items-center bg-transparent border-none cursor-pointer w-[200px] h-[40px] gap-[4px] text-[13px] leading-[20px]"
            onClick={onShareKakao}
          >
            <IconKakao width={20} height={20} />
            카카오톡 공유하기
          </button>
          <button
            className="flex justify-center items-center bg-transparent border-none cursor-pointer w-[200px] h-[40px] gap-[4px] text-[13px] leading-[20px]"
            onClick={onLinkCopy}
          >
            <IconLink width={16} height={16} />
            링크주소 복사하기
          </button>
        </div>
      </Intersection>
    </>
  );
};

export default Share;
