import React, { useState } from 'react';
import styles from './ImageSlider.module.scss';

const ImageSlider = () => {
  // Danh sách tất cả hình ảnh từ folder assets
  const images = [
    '/assets/FTW00404.JPG',
    '/assets/FTW01085.JPG',
    '/assets/FTW01578.JPG',
    '/assets/FTW01086.JPG',
    '/assets/FTW01576.JPG',
    '/assets/FTW01560.JPG',
    '/assets/FTW01575.JPG',
    '/assets/FTW01582.JPG',
    '/assets/FTW01579.JPG',
    '/assets/FTW01087.JPG',
    '/assets/FTW01089.JPG',
    '/assets/FTW01577.JPG',
    '/assets/FTW00567.JPG',
    '/assets/FTW01580.JPG',
    '/assets/FTW01581.JPG',
    '/assets/FTW00569.JPG',
    '/assets/FTW00570.JPG',
    '/assets/FTW00576.JPG',
    '/assets/FTW00579.JPG',
    '/assets/FTW00577.JPG',
    '/assets/FTW00581.JPG',
    '/assets/FTW00582.JPG',
    '/assets/FTW00580.JPG',
    '/assets/FTW00578.JPG',
    '/assets/FTW01594.JPG',
    '/assets/FTW00584.JPG',
    '/assets/FTW00585.JPG',
    '/assets/FTW01600.JPG',
    '/assets/FTW00583.JPG',
    '/assets/FTW01598.JPG',
    '/assets/FTW01597.JPG',
    '/assets/FTW01596.JPG',
    '/assets/FTW00586.JPG',
    '/assets/FTW00589.JPG',
    '/assets/FTW01603.JPG',
    '/assets/FTW01602.JPG',
    '/assets/FTW01599.JPG',
    '/assets/FTW01116.JPG',
    '/assets/FTW01601.JPG',
    '/assets/FTW00594.JPG',
    '/assets/FTW01604.JPG',
    '/assets/FTW00595.JPG',
    '/assets/FTW01117.JPG',
    '/assets/FTW01606.JPG',
    '/assets/FTW00599.JPG',
    '/assets/FTW01608.JPG',
    '/assets/FTW01607.JPG',
    '/assets/FTW01605.JPG',
    '/assets/FTW01610.JPG',
    '/assets/FTW01123.JPG',
    '/assets/FTW01611.JPG',
    '/assets/FTW01609.JPG',
    '/assets/FTW00605.JPG',
    '/assets/FTW00600.JPG',
    '/assets/FTW00598.JPG',
    '/assets/FTW00604.JPG',
    '/assets/FTW00603.JPG',
    '/assets/FTW01617.JPG',
    '/assets/FTW01129.JPG',
    '/assets/FTW01619.JPG',
    '/assets/FTW01131.JPG',
    '/assets/FTW01621.JPG',
    '/assets/FTW01132.JPG',
    '/assets/FTW01618.JPG',
    '/assets/FTW01133.JPG',
    '/assets/FTW01628.JPG',
    '/assets/FTW01136.JPG',
    '/assets/FTW01637.JPG',
    '/assets/FTW01143.JPG',
    '/assets/FTW01649.JPG',
    '/assets/FTW01645.JPG',
    '/assets/FTW01646.JPG',
    '/assets/FTW01158.JPG',
    '/assets/FTW01651.JPG',
    '/assets/FTW01652.JPG',
    '/assets/FTW01656.JPG',
    '/assets/FTW01650.JPG',
    '/assets/FTW01163.JPG',
    '/assets/FTW01660.JPG',
    '/assets/FTW00644.JPG',
    '/assets/FTW01659.JPG',
    '/assets/FTW01663.JPG',
    '/assets/FTW01661.JPG',
    '/assets/FTW01172.JPG',
    '/assets/FTW00649.JPG',
    '/assets/FTW01173.JPG',
    '/assets/FTW00647.JPG',
    '/assets/FTW01662.JPG',
    '/assets/FTW01674.JPG',
    '/assets/FTW00658.JPG',
    '/assets/FTW01174.JPG',
    '/assets/FTW01670.JPG',
    '/assets/FTW01669.JPG',
    '/assets/FTW01178.JPG',
    '/assets/FTW01673.JPG',
    '/assets/FTW01672.JPG',
    '/assets/FTW01182.JPG',
    '/assets/FTW00661.JPG',
    '/assets/FTW01181.JPG',
    '/assets/FTW01675.JPG',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.imageSlider}>
      <div className={styles.sliderHeader}>
        <h3 className={styles.sliderTitle}>Thư viện ảnh</h3>
        <p className={styles.sliderDescription}>
          Những khoảnh khắc đẹp nhất của chúng tôi
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <button 
          className={`${styles.sliderButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <div className={styles.slideContainer}>
          <img 
            src={images[currentIndex]} 
            alt={`Ảnh ${currentIndex + 1}`}
            className={styles.slideImage}
          />
          <div className={styles.slideInfo}>
            <span className={styles.slideCounter}>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        <button 
          className={`${styles.sliderButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
