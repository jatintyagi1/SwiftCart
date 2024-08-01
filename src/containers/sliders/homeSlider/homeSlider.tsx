import React, { useState, useEffect } from 'react';
import './homeSlider.css';
import { SliderImage } from '../../../assets/images/slider/slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? SliderImage.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderImage.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderImage.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div
                className="slider-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {SliderImage.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image.src} alt={image.alt} className='slider-image' />
                    </div>
                ))}
            </div>
            <div className='slider-arrow' onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='slider-arrow' onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default Slider;
