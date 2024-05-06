import React from 'react';

const CardFormat = ({ imageUrl, blob, size }) => {
  let cardSizeClass = '';
  switch (size) {
    case 'big':
      cardSizeClass = 'h-72 w-72';
      break;
    case 'small':
      cardSizeClass = 'h-36 w-36';
      break;
      case 'medium':
        cardSizeClass = 'h-48 w-48';
        break;
        case 'xs':
          cardSizeClass = 'h-36 w-36';
          break;
    default:
      cardSizeClass = 'h-36 w-36';
      break;
  }

  return (
    <div className='flex items-center justify-center bg-white rounded-full overflow-hidden p-2'>
    <div className={`flex items-center justify-center bg-gray-200 rounded-full overflow-hidden shadow-md ${cardSizeClass}`}>
      <img src={imageUrl} alt="Card" className="h-full w-full object-cover" />
    </div>
    </div>
  );
};

export default CardFormat;
