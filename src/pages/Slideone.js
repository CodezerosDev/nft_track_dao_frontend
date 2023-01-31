import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// import slide_img1 from "../assets/image/slide_img.png";
// import slide_img2 from "../assets/image/slide_img2.png";
// import slide_img3 from "../assets/image/slide_img3.png";
// import slide_img4 from "../assets/image/slide_img4.png";
import coolCats from"../assets/image/Cool-Cats.png"
import azuki from"../assets/image/azuki.jpg"
import boarClub from"../assets/image/Board-Ape-Yacht-Club.png"
import cloneX from"../assets/image/CloneX.jpg"
import doodles from"../assets/image/Doodles.png"
import meebits from"../assets/image/Meebits.png"
import mutant from"../assets/image/Mutant-Ape-Yacht-Club.png"
import worldWomen from"../assets/image/World-of-Womenpng.png"




export default function SimpleSlider() {

    var settings = {
        dots: false,
        speed: 300,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        rtl: true,
        autoplay: false,
        infinite: true,
        mobileFirst: true,//add this one
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 3,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div className="slide_border ">
                <img src={mutant} alt="img1"></img>
                <p>Mutant Ape Yacht Club</p>
            </div>

            <div className="slide_border">
                <img src={meebits} alt="img2"></img>
                <p>Meebits</p>
            </div>

            <div className="slide_border">
                <img src={cloneX} alt="img3"></img>
                <p>CloneX</p>
            </div>

            <div className="slide_border">
                <img src={azuki} alt="img4"></img>
                <p>Azuki</p>
            </div>

            <div className="slide_border ">
                <img src={boarClub} alt="img5"></img>
                <p>Bored Ape Yacht Club</p>
            </div>

            <div className="slide_border ">
                <img src={doodles} alt="img5"></img>
                <p>Doodles</p>
            </div>

            <div className="slide_border">
                <img src={coolCats} alt="img6"></img>
                <p>Cool Cats</p>
            </div>

            <div className="slide_border">
                <img src={worldWomen} alt="img7"></img>
                <p>World of Women</p>
            </div>

        </Slider>
    );
}