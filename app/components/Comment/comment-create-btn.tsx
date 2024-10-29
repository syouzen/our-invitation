'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconMessage} from '@/app/assets';
import {toast, ToastOptions} from 'react-toastify';

import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';

const CommentDeleteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {createComment} = useCommentsStore();

  const onRegist = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: {value: string};
      password: {value: string};
      content: {value: string};
    };

    const toastId = 'unique-create-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    if (!target.content.value) {
      toast.error('마음을 적어주세요', options);
      return;
    }

    try {
      setIsLoading(true);
      await toast.promise(
        createComment(
          target.name.value || '익명',
          target.password.value,
          target.content.value.replace(/\n\r?/g, '\n\r'),
        ),
        {
          pending: '마음을 남기고 있어요',
          success: '마음을 남겼어요',
          error: '마음 남기기에 실패했어요',
        },
        options,
      );
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button className={styles.commentSendButton}>
          <IconMessage /> 남기기
        </button>
      }
    >
      <DialogContent title="마음 남기기">
        <form className="" onSubmit={e => onRegist(e)}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              autoComplete="off"
              name="name"
              type="text"
              placeholder="이름"
            />
            <input
              className={styles.input}
              autoComplete="new-password"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className={styles.inputContentWrapper}>
            <textarea
              name="content"
              className={styles.textarea}
              maxLength={200}
              placeholder="200자까지 작성이 가능해요"
              onKeyDown={onKeyDown}
            />
          </div>
          <div className={styles.dialogButtonWrapper}>
            <button
              disabled={isLoading}
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              취소
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className={styles.primaryButton}
            >
              남기기
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteButton;
