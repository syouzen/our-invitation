import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ReactNode} from 'react';
import styles from './components.module.css';
import {IconArrowDown} from '@/app/assets';

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({children}: AccordionProps) => (
  <AccordionPrimitive.Root type="multiple" className={styles.root}>
    {children}
  </AccordionPrimitive.Root>
);

interface AccordionItemProps {
  value: string;
  children: ReactNode;
}

const AccordionItem = ({value, children}: AccordionItemProps) => (
  <AccordionPrimitive.Item value={value} className={styles.item}>
    {children}
  </AccordionPrimitive.Item>
);

interface AccordionTriggerProps {
  children: ReactNode;
}

const AccordionTrigger = ({children}: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className={styles.header}>
    <AccordionPrimitive.Trigger className={styles.trigger}>
      {children}
      <IconArrowDown className={styles.arrow} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({children}: AccordionContentProps) => (
  <AccordionPrimitive.Content className={styles.content}>
    {children}
  </AccordionPrimitive.Content>
);

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent};
