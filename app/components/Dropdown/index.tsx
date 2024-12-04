import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {ReactNode} from 'react';
import styles from './components.module.css';

interface DropdownMenuProps {
  children: ReactNode;
}

const DropdownMenu = ({children}: DropdownMenuProps) => (
  <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>
);

interface DropdownMenuTriggerProps {
  children: ReactNode;
}

const DropdownMenuTrigger = ({children}: DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger asChild>
    <button className={styles.trigger}>{children}</button>
  </DropdownMenuPrimitive.Trigger>
);

interface DropdownMenuContentProps {
  children: ReactNode;
}

const DropdownMenuContent = ({children}: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Content className={styles.content}>
    {children}
  </DropdownMenuPrimitive.Content>
);

interface DropdownMenuItemProps {
  children: ReactNode;
  href?: string;
}

const DropdownMenuItem = ({children, href}: DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item asChild>
    <a href={href} target="_blank" className={styles.item}>
      {children}
    </a>
  </DropdownMenuPrimitive.Item>
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
