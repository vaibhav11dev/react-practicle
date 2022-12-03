import { useState } from "react";
import "./App.css";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const slidenext = () => {
    console.log('next call', slideIndex);
    if(slideIndex !== 3 ) {
      setSlideIndex( slideIndex+1)
    } else if (slideIndex === 3) {
      setSlideIndex(1)
    }
  }

  const slidePrev = () => {
    console.log('prev call', slideIndex);
    if(slideIndex !== 1 ) {
      setSlideIndex( slideIndex-1)
    } else if (slideIndex === 1) {
      setSlideIndex(3)
    }
  }

  return (
    <div className="image_slider">
      {Array.from({length: 3}).map((item, index) => (
        
        <div key={index} className={slideIndex === index+1 ? 'active' : ""}>
          <img src={process.env.PUBLIC_URL + `/img/${index+1}.jpg`} alt="" />
        </div>
      ))}
      <button onClick={slidePrev}>Prev</button>
      <button onClick={slidenext}>Next</button>
    </div>
  );
}

export default ImageSlider;
