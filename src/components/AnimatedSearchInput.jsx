import React, { useState, useRef, useEffect } from 'react';
import TypingPlaceholder from './TypingPlaceholder';

const AnimatedSearchInput = ({ value, onChange, className, style }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (value && value.length > 0) {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={className}
        style={style}
      />
      
      {/* Animated Placeholder Overlay */}
      {showPlaceholder && !isFocused && (
        <div 
          className="absolute inset-0 flex items-center pl-4 pointer-events-none"
          style={{ color: 'rgba(107,79,57,0.6)' }}
        >
          <TypingPlaceholder />
        </div>
      )}
    </div>
  );
};

export default AnimatedSearchInput;
