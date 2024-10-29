'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconClose, IconLoading} from '@/app/assets';
import {toast, ToastOptions} from 'react-toastify';

import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';

import {Comment} from '@/app/type';

const CommentDeleteButton = ({comment}: {comment: Comment}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {deleteComment} = useCommentsStore();

  const onDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    e.preventDefault();

    const target = e.target as typeof e.target & {
      password: {value: string};
    };

    const toastId = 'unique-delete-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    try {
      setIsLoading(true);
      await deleteComment(comment.id, target.password.value);
      toast.success('보내신 마음을 지웠어요', options);
      setIsOpen(false);
    } catch (e) {
      console.error(e);
      toast.error('마음 지우기에 실패했어요', options);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button className={styles.commentDeletebutton}>
          <IconClose width={12} height={12} />
        </button>
      }
    >
      <DialogContent
        title="마음 지우기"
        onClose={() => {
          setIsLoading(false);
        }}
      >
        <form className="" onSubmit={e => onDelete(e)}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호"
            />
          </div>
          <div className={styles.dialogButtonWrapper}>
            <button
              disabled={isLoading}
              className={styles.closeButton}
              onClick={() => {
                setIsOpen(false);
                setIsLoading(false);
              }}
            >
              취소
            </button>
            <button
              disabled={isLoading}
              className={styles.primaryButton}
              type="submit"
            >
              {!isLoading && '지우기'}
              {isLoading && <IconLoading width={20} height={20} />}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteButton;
