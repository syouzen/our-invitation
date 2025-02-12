'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconLoading, IconMessage} from '@/app/assets';
import {toast, ToastOptions} from 'react-toastify';

import {useCommentsStore} from '@/app/store';
import {cn} from '@/app/utils/tailwind-utils';

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
      await createComment(
        target.name.value || '익명',
        target.password.value,
        target.content.value.replace(/\n\r?/g, '\n\r'),
      );
      toast.success('마음을 남겼어요', options);
      setIsOpen(false);
    } catch (e) {
      console.error(e);
      toast.error('마음 남기기에 실패했어요', options);
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
        <button className="flex w-fit px-[12px] py-[6px] border-none rounded-full bg-gray-100 justify-center items-center gap-[5px] text-[14px] leading-[20px] cursor-pointer transition-colors">
          <IconMessage /> 남기기
        </button>
      }
    >
      <DialogContent
        title="마음 남기기"
        onClose={() => {
          setIsLoading(false);
        }}
      >
        <form className="" onSubmit={e => onRegist(e)}>
          <div className="flex h-[25px] w-full justify-between items-center mb-[8px] gap-[8px]">
            <input
              className="flex h-[25px] w-full px-[4px] justify-between text-[14px] leading-[20px] p-[16px] border border-gray-900 rounded-[4px]"
              autoComplete="off"
              name="name"
              type="text"
              placeholder="이름"
            />
            <input
              className="flex h-[25px] w-full px-[4px] justify-between text-[14px] leading-[20px] p-[16px] border border-gray-900 rounded-[4px]"
              autoComplete="new-password"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="flex flex-col justify-between">
            <textarea
              name="content"
              className="w-full h-[70px] box-border py-[4px] px-[4px] resize-none border border-gray-900 rounded-[4px] text-[14px] leading-[20px]"
              maxLength={200}
              placeholder="200자까지 작성이 가능해요"
              onKeyDown={onKeyDown}
            />
          </div>
          <div className="flex justify-center items-center mt-[16px] gap-[8px]">
            <button
              disabled={isLoading}
              type="button"
              className="flex border-none w-[40%] px-[12px] py-[6px] justify-center items-center gap-[5px] text-[14px] leading-[20px] rounded-[8px] cursor-pointer transition-colors bg-white text-black"
              onClick={() => {
                setIsOpen(false);
                setIsLoading(false);
              }}
            >
              취소
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className={cn(
                'flex border-none w-full px-[12px] py-[6px] justify-center items-center gap-[5px] text-[14px] leading-[20px] rounded-[8px] cursor-pointer transition-colors bg-black text-white',
                isLoading &&
                  'cursor-not-allowed pointer-events-none opacity-50',
              )}
            >
              {!isLoading && '남기기'}
              {isLoading && <IconLoading width={20} height={20} />}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteButton;
