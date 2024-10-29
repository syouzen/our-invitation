import * as DialogPrimitive from '@radix-ui/react-dialog';
import {ReactNode} from 'react';

import styles from './components.module.css';

interface ImageDialogProps {
  children: ReactNode;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ImageDialog = ({
  children,
  trigger,
  open,
  onOpenChange,
}: ImageDialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
    {children}
  </DialogPrimitive.Root>
);

interface ImageDialogContentProps {
  children: ReactNode;
  onClose?: () => void;
}

const ImageDialogContent = ({children, onClose}: ImageDialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={`${styles.overlay} ${styles.fadeinout}`}
      onClick={onClose}
    />
    <DialogPrimitive.Content
      className={`${styles.content} ${styles.fadeinout}`}
    >
      <div>{children}</div>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

export {ImageDialog, ImageDialogContent};
