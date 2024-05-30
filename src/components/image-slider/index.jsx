import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${url}?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrMsg(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchImages();
  }, []);

  useEffect(() => {
    console.log(currentSlide)
  }, [currentSlide])

  if (loading) {
    return <div>Loading data!</div>;
  }

  if (errMsg) {
    return <div>Error!</div>;
  }

  const mod = (n, m) => ((n%m) + m) % m;

  const handlePrevious = () => {
    setCurrentSlide( mod((currentSlide-1), images.length))
  }

  const handleNext = () => {
    setCurrentSlide(mod((currentSlide+1), images.length))
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

      {images &&
        images.length &&
        images.map((imgItem, index) => (
          <img
            key={imgItem.id}
            src={imgItem.download_url}
            alt=""
            className={`current-image ${currentSlide !== index ? "hide-image" : "" }`}
          />
        ))}

      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

      <span className="circle-indicators">
        {images &&
          images.length &&
          images.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`current-indicator ${currentSlide !== index ? "indicator-inactive" : "" }`}
            ></button>
          ))}
      </span>
    </div>
  );
}
