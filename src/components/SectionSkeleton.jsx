import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Grid-aligned skeletons matching ProductCard proportions.
const SectionSkeleton = ({ cards = 4, imageHeight = 220 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
      {Array.from({ length: cards }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-2xl overflow-hidden border shadow-bakery"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'rgba(107,79,57,0.2)'
          }}
        >
          <div style={{ height: `${imageHeight}px` }}>
            <Skeleton height={imageHeight} />
          </div>
          <div className="p-4 space-y-2">
            <Skeleton width="60%" height={18} />
            <Skeleton width="90%" height={12} />
            <Skeleton width="80%" height={12} />
            <Skeleton width="50%" height={16} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionSkeleton;



