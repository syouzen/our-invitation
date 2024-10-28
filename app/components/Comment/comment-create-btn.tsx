'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconMessage} from '@/app/assets';
import {toast, ToastOptions} from 'react-toastify';

import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';

const CommentDeleteButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const {createComment} = useCommentsStore();

  const onInit = () => {
    setName('');
    setContent('');
    setPassword('');
  };

  const onRegist = async () => {
    const toastId = 'unique-create-toast-id';
    if (toast.isActive(toastId)) return;

    const options: ToastOptions = {
      toastId,
      icon: false,
    };

    try {
      await createComment(name, password, content);
      toast.success('방명록을 등록했어요', options);
      setIsOpen(false);
      onInit();
    } catch (e) {
      console.error(e);
      toast.error('방명록 등록에 실패했어요', options);
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
      <DialogContent title="방명록 작성" onClose={onInit}>
        <div className={styles.inputWrapper}>
          <p className={styles.inputTitle}>이름</p>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.inputTitle}>비밀번호</p>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputContentWrapper}>
          <p className={styles.inputTitle}>내용</p>
          <textarea
            className={styles.textarea}
            value={content}
            onChange={e => setContent(e.target.value)}
            maxLength={100}
            placeholder="100자까지 작성이 가능해요"
          />
          <div className={styles.textareaCount}>{content.length}/100</div>
        </div>
        <div className={styles.dialogButtonWrapper}>
          <button
            disabled={name === '' || content === ''}
            className={styles.primaryButton}
            onClick={onRegist}
          >
            등록하기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteButton;
