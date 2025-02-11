import * as DialogPrimitive from '@radix-ui/react-dialog';
import {ReactNode} from 'react';

import {cn} from '@/app/utils/tailwind-utils';

interface DialogProps {
  children: ReactNode;
  trigger: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Dialog = ({children, trigger, open, onOpenChange}: DialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
    {children}
  </DialogPrimitive.Root>
);

interface DialogContentProps {
  title?: string;
  description?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

const DialogContent = ({
  title,
  description,
  children,
  onClose,
  className,
}: DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-white/80 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      )}
      onClick={onClose}
    />
    <DialogPrimitive.Content
      className={cn(
        'container w-[80%] max-w-[400px] z-50 bg-white',
        'fixed left-[50%] top-[25%] translate-x-[-50%] translate-y-[-50%]',
        'px-[16px] py-[12px] rounded-[8px] shadow-lg',
        'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className,
      )}
    >
      {title && (
        <DialogPrimitive.Title className="font-[14px] leading-[20px] text-gray-900 p-0 m-0 text-center">
          {title}
        </DialogPrimitive.Title>
      )}
      {description && (
        <DialogPrimitive.Description className="mt-[8px] text-[12px] leading-[18px] text-gray-500">
          {description}
        </DialogPrimitive.Description>
      )}
      <div className="mt-[16px]">{children}</div>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

export {Dialog, DialogContent};
