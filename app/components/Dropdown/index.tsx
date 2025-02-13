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
}

const DropdownMenuTrigger = ({children}: DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger asChild>
    <button className="border-none cursor-pointer outline-color-white p-[8px] bg-gray-100 rounded-[100px]">
      {children}
    </button>
  </DropdownMenuPrimitive.Trigger>
);

interface DropdownMenuContentProps {
  children: ReactNode;
}

const DropdownMenuContent = ({children}: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Content
    className={cn(
      'flex flex-col bg-white border border-solid border-gray-200 rounded-[4px] p-[8px] mt-[4px] mr-[12px] mb-[4px] ml-[12px] shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    )}
  >
    {children}
  </DropdownMenuPrimitive.Content>
);

interface DropdownMenuItemProps {
  children: ReactNode;
  href?: string;
  onSelect?: () => void;
}

const DropdownMenuItem = ({
  children,
  href,
  onSelect,
}: DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item asChild onSelect={onSelect}>
    <a
      href={href}
      target="_blank"
      className="min-w-[100px] text-decoration-none text-black cursor-pointer px-[8px] py-[8px] text-[12px] leading-[18px]"
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
