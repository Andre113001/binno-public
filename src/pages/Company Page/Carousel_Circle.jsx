import React, { useState, useEffect } from 'react';
import CardFormat from './Card_Format';

const CardContainer = ({ imageUrls, data, onChangeEnabler }) => {
  const cards = [
    { size: 'big', index: 0 },
    { size: 'medium', index: 1 },
    { size: 'small', index: 2 }
  ]; // Define the sizes and indices of the cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageBlobs, setImageBlobs] = useState([]);
  const [blobIds, setBlobIds] = useState([]); 
  const [currentEnabler, setCurrentEnabler] = useState();

  useEffect(() => {
    const blobUrls = Object.values(imageUrls);
    const ids = Object.keys(imageUrls); // Get the IDs of the blobs
    setImageBlobs(blobUrls); // Set the blob URLs in state
    setBlobIds(ids); // Set the blob IDs in state

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    }, 2000); // Advance every 3 seconds

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  useEffect(() => {
    const current = blobIds[currentIndex % blobIds.length];
    onChangeEnabler((data?.find(item => item.setting_id === current)));
  }, [currentIndex, blobIds]);

  return (
    <div className="flex items-center space-x-8">
      {cards.map((card, index) => {
        const cardIndex = (currentIndex + card.index) % imageBlobs.length;
        return (
          <CardFormat
            key={index}
            imageUrl={imageBlobs[cardIndex]}
            size={card.size}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
