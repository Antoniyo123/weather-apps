import React, { useState, useEffect } from 'react';

const PlayerVideo = ({ thumbnailSrc, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false); // Hide video when mouse leaves
  };

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 300); // Delay video appearance by 300ms

      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showVideo ? (
        <img
          src={thumbnailSrc}
          alt="Thumbnail"
          style={styles.thumbnail}
        />
      ) : (
        <video
          src={videoSrc}
          style={styles.video}
          autoPlay
          muted
        />
      )}
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default PlayerVideo;
