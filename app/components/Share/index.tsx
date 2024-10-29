'use client';

import React from 'react';
import styles from './components.module.css';
import {IconKakao, IconLink} from '@/app/assets';
import Image from 'next/image';
import Script from 'next/script';
import {toast, ToastOptions} from 'react-toastify';

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
        title: '공유 타이틀',
        description: '공유 내용',
        link: {
          mobileWebUrl: INVITATION_URL,
          webUrl: INVITATION_URL,
        },
      },
      buttons: [
        {
          title: '공유 내용 내 버튼 (URL 이동 버튼)',
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
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
        onLoad={onInitKakao}
      />
      <div className={styles.shareImageContainer}>
        <Image
          src="https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_5988.JPG"
          alt="공유하기 이미지"
          fill
          style={{objectFit: 'cover'}}
          sizes="100vw"
        />
        <div className={styles.shareImageOverlayText}>
          10월의 어느 햇살 고운 날,
          <br />
          귀한 걸음 하시어 따뜻한 마음으로
          <br />
          축복해 주시면 더 없는 기쁨이 되겠습니다.
        </div>
      </div>

      <div className={styles.shareInvitation}>
        <button className={styles.shareButton} onClick={onShareKakao}>
          <IconKakao width={24} height={24} />
          카카오톡 공유하기
        </button>
        <button className={styles.shareButton} onClick={onLinkCopy}>
          <IconLink width={20} height={20} />
          링크주소 복사하기
        </button>
      </div>
    </>
  );
};

export default Share;
