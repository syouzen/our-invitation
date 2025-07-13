'use client';

import React, {ReactNode} from 'react';
import {motion} from 'framer-motion';

interface IntersectionProps {
  children: ReactNode;
  noY?: boolean;
  className?: string;
}

export default function Intersection({
  children,
  noY,
  className,
}: IntersectionProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: noY ? 0 : 10}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{
        ease: 'easeInOut',
        duration: 0.4,
        y: {duration: 1},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
