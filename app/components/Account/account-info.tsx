'use client';

import {toast, ToastOptions} from 'react-toastify';
import styles from './components.module.css';
import {IconCopy} from '@/app/assets';
import Link from 'next/link';

type AccountInfo = {
  info: {
    name: string;
    bank: string;
    account: string;
    kakao?: string;
  };
};

const AccountInfo = ({info}: AccountInfo) => {
  const onAccountCopy = async (bank: string, account: string) => {
    const toastId = 'unique-accout-copy-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    try {
      await navigator.clipboard.writeText(`${bank} ${account}`);
      toast.success('계좌번호를 복사했어요', options);
    } catch (e) {
      console.error(e);
      toast.error('계좌번호 복사에 실패했어요', options);
    }
  };

  return (
    <div className={styles.account}>
      <div className={styles.name}>
        <span>
          <b>{info.name}</b>
        </span>
      </div>

      <div className={styles.bank}>
        <div>
          <span>{info.bank}</span>
          <span> {info.account}</span>
        </div>
        <button
          className={styles.copyButton}
          onClick={() => onAccountCopy(info.bank, info.account)}
        >
          <IconCopy width={16} height={16} />
        </button>
      </div>

      {!!info.kakao && (
        <div className={styles.bank}>
          <div>
            <span>카카오페이</span>
          </div>
          <Link
            className={`${styles.copyButton} ${styles.kakaoButton}`}
            href={info.kakao}
          >
            <span className={styles.kakaopay} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
