import React from "react";
import SlideButton from "../Button/SlideButton";
import IconLeft from "./svg/IconLeft";
import IconRight from "./svg/IconRight";

import style from "./Slide.module.scss";
import "./SlideAnimation.css";

import photo1 from "../../assets/image-slide-1.jpg";
import photo2 from "../../assets/image-slide-2.jpg";
import photo3 from "../../assets/image-slide-3.jpg";
import photo4 from "../../assets/image-slide-4.jpg";
import photo5 from "../../assets/image-slide-5.jpg";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = React.useState(2);
  const slideBoardRef = React.useRef();
  React.useEffect(() => {
    slideBoardRef.current.style.animation = "";
    setTimeout(() => {
      slideBoardRef.current.style.animation = "slideAnimation .6s";
    }, 5)
  }, [currentIndex]);

  const photos = [
    [photo1, "Photo 1"],
    [photo2, "Photo 2"],
    [photo3, "Photo 3"],
    [photo4, "Photo 4"],
    [photo5, "Photo 5"],
  ];

  const previousIndex = (currentIndex - 1 + photos.length) % photos.length;
  const nextIndex = (currentIndex + 1) % photos.length;

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
  };

  const previusPhoto = () => {
    const previousIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(previousIndex);
  };

  return (
    <div className={style.SlideContainer}>
      <ul className={style.SlidePhotos} ref={slideBoardRef}>
        <li>
          <img src={photos[previousIndex][0]} alt={photos[previousIndex][1]} />
        </li>
        <li>
          <img src={photos[currentIndex][0]} alt={photos[currentIndex][1]} />
        </li>
        <li>
          <img src={photos[nextIndex][0]} alt={photos[nextIndex][1]} />
        </li>
      </ul>
      <nav>
        <SlideButton handleClick={previusPhoto} aria="Previous Photo Button">
          <IconLeft />
        </SlideButton>
        <SlideButton handleClick={nextPhoto} aria="Next Photo Button">
          <IconRight />
        </SlideButton>
      </nav>
    </div>
  );
};

export default Slide;
