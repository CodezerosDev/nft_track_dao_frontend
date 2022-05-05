import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import slide_img1 from "../assets/image/slide_img.png";
import slide_img2 from "../assets/image/slide_img2.png";
import slide_img3 from "../assets/image/slide_img3.png";
import slide_img4 from "../assets/image/slide_img4.png";

export default function SimpleSlider2() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>

            <div className="slide_border ">
                <img src={slide_img1}></img>
                <p>BAYC</p>
            </div>

            <div className="slide_border ">
                <img src={slide_img2}></img>
                <p>CryptoPunks</p>
            </div>

            <div className="slide_border">
                <img src={slide_img3}></img>
                <p>Clone X</p>
            </div>

            <div className="slide_border">
                <img src={slide_img4}></img>
                <p>Azuki</p>
            </div>

            <div className="slide_border ">
                <img src={slide_img1}></img>
                <p>MAYC</p>
            </div>

            <div className="slide_border ">
                <img src={slide_img2}></img>
                <p>Azuki</p>
            </div>

            <div className="slide_border">
                <img src={slide_img3}></img>
                <p>Clone X</p>
            </div>

            <div className="slide_border">
                <img src={slide_img4}></img>
                <p>CryptoPunks</p>
            </div>



        </Slider>
    );
}