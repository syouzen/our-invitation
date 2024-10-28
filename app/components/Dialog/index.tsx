import * as DialogPrimitive from '@radix-ui/react-dialog';
import {ReactNode} from 'react';

import styles from './components.module.css';
import {IconClose} from '@/app/assets';

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
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
}

const DialogContent = ({
  title,
  description,
  children,
  onClose,
}: DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.overlay} onClick={onClose} />
    <DialogPrimitive.Content className={styles.content}>
      <DialogPrimitive.Title className={styles.title}>
        {title}
      </DialogPrimitive.Title>
      {description && (
        <DialogPrimitive.Description className={styles.description}>
          {description}
        </DialogPrimitive.Description>
      )}
      <div className={styles.body}>{children}</div>
      <DialogPrimitive.Close asChild>
        <button onClick={onClose} className={styles.closeButton}>
          <IconClose width={16} height={16} />
        </button>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

export {Dialog, DialogContent};
