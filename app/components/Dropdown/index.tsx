import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {ReactNode} from 'react';
import {cn} from '@/app/utils/tailwind-utils';

interface DropdownMenuProps {
  children: ReactNode;
}

const DropdownMenu = ({children}: DropdownMenuProps) => (
  <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>
);

interface DropdownMenuTriggerProps {
  children: ReactNode;
  className?: string;
}

const DropdownMenuTrigger = ({
  children,
  className,
}: DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger asChild>
    <button
      className={cn(
        'border-none cursor-pointer outline-color-white p-[8px] bg-gray-100 rounded-[100px]',
        className,
      )}
    >
      {children}
    </button>
  </DropdownMenuPrimitive.Trigger>
);

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}

const DropdownMenuContent = ({
  children,
  className,
}: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Content
    className={cn(
      'flex flex-col bg-white border border-solid border-gray-200 rounded-[4px] p-[8px] mt-[4px] mr-[12px] mb-[4px] ml-[12px] shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
  >
    {children}
  </DropdownMenuPrimitive.Content>
);

interface DropdownMenuItemProps {
  children: ReactNode;
  href?: string;
  onSelect?: () => void;
  className?: string;
  target?: string;
}

const DropdownMenuItem = ({
  children,
  href,
  onSelect,
  className,
  target = '_blank',
}: DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item asChild onSelect={onSelect}>
    <a
      href={href}
      target={target}
      className={cn(
        'min-w-[100px] text-decoration-none text-black cursor-pointer px-[8px] py-[8px] text-[12px] leading-[18px]',
        className,
      )}
    >
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
