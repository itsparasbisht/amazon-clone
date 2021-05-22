import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css'

function Slider() {
    return (
        <div>
            <AwesomeSlider className="slider aws-btn">
                <div className="silder__img" data-src="slider/slider-1.jpg" />
                <div className="silder__img" data-src="slider/slider-2.jpg" />
                <div className="silder__img" data-src="slider/slider-3.jpg" />
            </AwesomeSlider>
        </div>
    )
}

export default Slider
