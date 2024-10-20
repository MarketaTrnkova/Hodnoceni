import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  
  const onSelect = (value) =>{
    setRating(value);
  }

  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star value={1} onSelect={onSelect} glowing={rating >= 1} />
        <Star value={2} onSelect={onSelect} glowing={rating >= 2} />
        <Star value={3} onSelect={onSelect} glowing={rating >= 3} />
        <Star value={4} onSelect={onSelect} glowing={rating >= 4} />
        <Star value={5} onSelect={onSelect} glowing={rating == 5} />
      </div>
    </div>
  );
};
