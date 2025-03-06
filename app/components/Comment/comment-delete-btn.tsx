'use client';

import {useState} from 'react';
import {Dialog, DialogContent} from '@/app/components';
import {IconClose, IconLoading} from '@/app/assets';

import {useCommentsStore} from '@/app/store';

import {Comment} from '@/app/type';
import {cn} from '@/app/utils/tailwind-utils';
import useToast from '@/app/hook/useToast';

const CommentDeleteButton = ({comment}: {comment: Comment}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {deleteComment} = useCommentsStore();
  const {showToast} = useToast();

  const onDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    e.preventDefault();

    const target = e.target as typeof e.target & {
      password: {value: string};
    };

    try {
      setIsLoading(true);
      await deleteComment(comment.id, target.password.value);
      showToast('보내신 마음을 지웠어요');
      setIsOpen(false);
    } catch (e) {
      console.error(e);
      showToast('마음 지우기에 실패했어요');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button className="border-none bg-transparent cursor-pointer text-gray-400 ml-[12px] pt-[1.5px]">
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
          <div className="flex h-[25px] w-full justify-between items-center mb-[8px] gap-[8px]">
            <input
              className="flex h-[25px] w-full px-[4px] justify-between text-[14px] leading-[20px] p-[16px] border border-gray-900 rounded-[4px]"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호"
            />
          </div>
          <div className="flex justify-center items-center mt-[16px] gap-[8px]">
            <button
              type="button"
              disabled={isLoading}
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
              className={cn(
                'flex border-none w-full px-[12px] py-[6px] justify-center items-center gap-[5px] text-[14px] leading-[20px] rounded-[8px] cursor-pointer transition-colors bg-black text-white',
                isLoading &&
                  'cursor-not-allowed pointer-events-none opacity-50',
              )}
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
