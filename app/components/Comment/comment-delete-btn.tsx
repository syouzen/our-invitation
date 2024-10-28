'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconClose} from '@/app/assets';
import {toast, ToastOptions} from 'react-toastify';

import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';

const CommentDeleteButton = ({comment}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [password, setPassword] = useState('');

  const {deleteComment} = useCommentsStore();

  const onDelete = async () => {
    const toastId = 'unique-delete-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    try {
      await deleteComment(comment.id, password);
      toast.success('코멘트를 삭제했어요', options);
      setIsOpen(false);
      setPassword('');
    } catch (e) {
      console.error(e);
      toast.error('비밀번호를 확인해주세요', options);
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
        title="방명록 삭제"
        onClose={() => {
          setPassword('');
        }}
      >
        <div className={styles.inputWrapper}>
          <p className={styles.inputTitle}>비밀번호</p>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.dialogButtonWrapper}>
          <button className={styles.primaryButton} onClick={onDelete}>
            삭제하기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteButton;
