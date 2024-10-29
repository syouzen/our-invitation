'use client';

import React, {useEffect, useRef, useState} from 'react';

interface IntersectionProps {
  children: React.ReactNode;
}

const Intersection = ({children}: IntersectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.3},
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className={`animate ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default Intersection;
