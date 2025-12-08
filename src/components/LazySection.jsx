import React, { useEffect, useRef, useState } from 'react';

// Lazy render children when the wrapper nears the viewport.
const LazySection = ({ children, rootMargin = '200px', minHeight = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;

