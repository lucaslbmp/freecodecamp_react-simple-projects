import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numberOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [starSelected, setStarSelected] = useState(0);

  const handleMouseEnter = (starIndex) => {
    setHover(starIndex);
  };

  const handleMouseLeave = () => {
    // setHover(starSelected || hover)
    setHover(starSelected);
  }

  const handleClick = (starIndex) => {
    setStarSelected(starIndex)
  } 

  const getStarState = (starIndex) => {
    return starIndex < (hover || starSelected) ? "on" : "off";
  };

  useEffect(() => console.log(hover), [hover])

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => (
        <FaStar
          key={`star-${index}`}
          onMouseMove={() => handleMouseEnter(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleClick(index+1)}
          className={`star ${getStarState(index)}`}
        />
      ))}
    </div>
  );
}
