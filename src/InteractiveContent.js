import React, { useState, useEffect } from 'react';

const InteractiveContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('content').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1>Scroll down to reveal content</h1>
      </div>
      <div
        id="content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <h2>This content appears when you scroll down!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default InteractiveContent;
