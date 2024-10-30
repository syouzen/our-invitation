'use client';

import {Dialog, DialogContent} from '@/app/components';
import {IconPhone} from '@/app/assets';

import styles from './components.module.css';

const ContactButton = () => {
  return (
    <Dialog
      trigger={
        <button className={styles.contactButton}>
          <IconPhone width="0.9em" height="0.9em" /> 연락하기
        </button>
      }
    >
      <DialogContent title="연락하기">
        <div className={styles.contactWrapper}>
          <div className={styles.contact}>
            <span>신랑 최승연</span>
            <button
              className={styles.infoPhone}
              onClick={() => (window.location.href = 'tel:010-9058-9205')}
            >
              <a className={styles.aPhone} href="tel:010-9058-9205">
                <IconPhone width="0.8em" height="0.8em" /> 010-9058-9205
              </a>
            </button>
          </div>
          <div className={styles.contact}>
            <span>어머니 육은주</span>
            <button
              className={styles.infoPhone}
              onClick={() => (window.location.href = 'tel:010-3716-4766')}
            >
              <a className={styles.aPhone} href="tel:010-3716-4766">
                <IconPhone width="0.8em" height="0.8em" /> 010-3716-4766
              </a>
            </button>
          </div>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contact}>
            <span>신부 김현아</span>
            <button
              className={styles.infoPhone}
              onClick={() => (window.location.href = 'tel:010-3415-7375')}
            >
              <a className={styles.aPhone} href="tel:010-3415-7375">
                <IconPhone width="0.8em" height="0.8em" /> 010-3415-7375
              </a>
            </button>
          </div>
          <div className={styles.contact}>
            <span>어머니 서영민</span>
            <button
              className={styles.infoPhone}
              onClick={() => (window.location.href = 'tel:010-3415-7375')}
            >
              <a className={styles.aPhone} href="tel:010-3415-7375">
                <IconPhone width="0.8em" height="0.8em" /> 010-3415-7375
              </a>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
