import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import slide_img1 from "../assets/image/slide_img.png";
import slide_img2 from "../assets/image/slide_img2.png";
import slide_img3 from "../assets/image/slide_img3.png";
import slide_img4 from "../assets/image/slide_img4.png";

export default function SimpleSlider() {

    const image = [
        "https://lh3.googleusercontent.com/Czn9y9yAUpvuI6SGoVSnNe29_kZ84Ey_9saCrdpA7a5j2_8IWlUFSBM3_GMkjBPmbG8AS1jWtrzgQG4nCsyAlR_VtEI0fXMeKD8ILA=w286",
        "https://lh3.googleusercontent.com/6PFIYICLqlR-f7oDeROPorLObT-tjNEiUBkY0r-hnrjA5ypcvqyC5UhXBcuHvQuadW8ac1MVveevIw9usMz6kC0MZ6aQLSKXBSZtcQ=w286",
        "https://lh3.googleusercontent.com/VcINO7tS_jlFUDPoEAAAcU9scOLfTNKWHB8u2U30BwZMFFS5eUfQeeaDTz_qKAQ1mt6jjUOFg-1bdSprvk53zGpGsstwwLORQur9Zg=w286",
        "https://lh3.googleusercontent.com/I7yxsg5cBindbstIuEctPiPLgK3QxAmWIU2Uqe5xAK3dAnl5L4TipPygOf5ynpr_7AkxKDPdxD1OaoeTSjdyzH7OYPgQqNHkyWS7xWY=w600",
        "https://lh3.googleusercontent.com/bY7Shp-jwm7gzfOAD684dD6Qk87utF5m5AHHxSmg0j1Zzx3VOH2wazftdA4Q30LrU7ESRid79O4Wi6VcjRas3mnOh4HuhxYHqQA_7Z8=w286",
        "https://lh3.googleusercontent.com/CihDNOBwzoCK__mgJgFFyRazaOm-5WGvxp4YdTLLyUiq86seRPPfUN7aZOCArpGvG2RLpBjpy0b8RukVIWD4a0GkLLxJ_6xAPKydZ2I=w286",
        "https://lh3.googleusercontent.com/2ZfTLFDnlFS-SbVf_h5fV2Dwnx8FTt_EJZajLlY8K08uZXMMkwjMohq5fAfhRoylrk68kaNkCNOhbfQY-FYJbrDqdc6XfetMiwVS=w286",
        "https://lh3.googleusercontent.com/pjja9yQOgIzrAfFPwgXi-KfQTz-Kxw-jZkDGoA0XGfYJc1325nQ9vc5xi1-eyFtM0lIETWInSGagyOAXsw2DqAIK1IE15jWeE_2U=w286",
        "https://lh3.googleusercontent.com/SLewJKxPmXfpFEdGBmlH_BMN3MdI5BBPi3xvr0TAKhGRx4f09msqKYzT1U1tZbAU8aSQVmjjfuWMktfHITHRcu5tiBBI7V5FEc15wQ=w286",
        "https://lh3.googleusercontent.com/AJ_40kO009xD-XE2Wyy0ANYKi9uzVYQAaybVGIWBXMA4cIKdggBWG6WHxXZTv4pdAR0OvA_i7X0hapqWixW12nvqHvclqcRpgcrtsg0=w286",
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        autoplay: false,
        infinite: true,
        mobileFirst: true,//add this one
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575.98,
                settings: {

                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>

            <div className="slide_border ">
                <img src={image[0]}></img>
                <p>Boredapeyachtclub</p>
            </div>

            <div className="slide_border ">
                <img src={image[1]}></img>
                <p>Invisiblefriends</p>
            </div>

            <div className="slide_border">
                <img src={image[2]}></img>
                <p>CloneX</p>
            </div>

            <div className="slide_border">
                <img src={image[3]}></img>
                <p>Azuki</p>
            </div>

            <div className="slide_border ">
                <img src={image[4]}></img>
                <p>Oxmayc-official</p>
            </div>

            <div className="slide_border ">
                <img src={image[5]}></img>
                <p>Doodles-official</p>
            </div>

            <div className="slide_border">
                <img src={image[6]}></img>
                <p>Cool-cats-nft</p>
            </div>

            <div className="slide_border">
                <img src={image[8]}></img>
                <p>World-of-women-nft</p>
            </div>



        </Slider>
    );
}