import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Slideone from "../pages/Slideone.js";
import Introslides from "../pages/IntroSlides.js";
import logobox from "../assets/image/lg_logo_box.svg";
import logoanimate from "../assets/image/lg_logo.svg";
import arrowdropup from "../assets/image/arrow_drop_up.svg";
import arrowdropdown from "../assets/image/arrow_drop_down.svg";
import arrowdownlg from "../assets/image/arrow_down_lg.svg";
import pub_logo from "../assets/image/pub_logo.png";
import sale_willbanner from "../assets/image/sale_willbanner.png";
import coins from "../assets/image/coins.png";
import logopart1 from "../assets/image/logopart1.svg";
import logopart2 from "../assets/image/logopart2.svg";
import team_one_img from "../assets/image/team_one.png";
import hrlinelogo from "../assets/image/hrlinelogo.png";
import greenright from "../assets/image/green_right.svg";
import Slider from "react-slick/lib/slider";
const HomePage = () => {
  //onscroll 2 line animation
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  //onscroll 2 parallax animation
  const imgRef = useRef(null);
  const imgMoveRef = useRef(null);
  const parallax = (e) => {
    const x = (window.innerWidth - e.pageX) / 90;
    const y = (window.innerHeight - e.pageY) / 90;
    if (imgRef.current) {
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };
  useEffect(() => {
    if (imgMoveRef.current) {
      imgMoveRef.current.addEventListener("mousemove", parallax);
    }
  }, []);
  // on scroll logo animation
  const logopart1ref = useRef(null);
  const logopart2ref = useRef(null);
  const logoAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    var triggerOffset = document.documentElement.clientHeight / 2;
    var requestId = null;
    if (window.matchMedia("screen and (max-width: 2564px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -5 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 83 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart1ref.current, {
          left: 32 + "%",
          top: 3282 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart2ref.current, {
          left: 62 + "%",
          top: 3289 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart1ref.current, {
          left: "calc(50% - 35px)",
          top: 4030 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart2ref.current, {
          left: "calc(50% - 47px)",
          top: 4030 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(57% - 47px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart1ref.current, {
          left: 30 + "%",
          top: 7058 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 7058 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      var t9 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart1ref.current, {
          left: 30 + "%",
          top: 7058 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 7058 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart1ref.current, {
          left: -5 + "%",
          top: 7646 + "px",
          width: 300 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart2ref.current, {
          left: 93 + "%",
          top: 8003 + "px",
          width: 300 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });

      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 8000)
        .to(logopart1ref.current, {
          left: 34 + "%",
          top: 8382 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 8000)
        .to(logopart2ref.current, {
          left: 60 + "%",
          top: 8382 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });

      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t110.time(window.pageYOffset + triggerOffset);
        t11110.time(window.pageYOffset + triggerOffset);

        requestId = null;
      }
    }
    if (window.matchMedia("screen and (max-width: 1920px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -12 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 84 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart1ref.current, {
          left: 22 + "%",
          top: 3084 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart2ref.current, {
          left: 71 + "%",
          top: 3084 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart1ref.current, {
          left: "calc(50% - 35px)",
          top: 3761 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart2ref.current, {
          left: "calc(50% - 47px)",
          top: 3761 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 6200 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(60% - 47px)",
          top: 6200 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart1ref.current, {
          left: 30 + "%",
          top: 6560 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6560 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //nine step
      var t9 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart1ref.current, {
          left: 30 + "%",
          top: 6560 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6560 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      //ten step
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7000)
        .to(logopart1ref.current, {
          left: -8 + "%",
          top: 7151 + "px",
          width: 300 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7000)
        .to(logopart2ref.current, {
          left: 92 + "%",
          top: 7511 + "px",
          width: 300 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //eleven step
      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7600)
        .to(logopart1ref.current, {
          left: 29 + "%",
          top: 8000 + "px",
          width: 135 + "px",
          opacity: 0,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11110 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7600)
        .to(logopart2ref.current, {
          left: 64 + "%",
          top: 7940 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t110.time(window.pageYOffset + triggerOffset);
        t11110.time(window.pageYOffset + triggerOffset);
        requestId = null;
      }
    }
    if (window.matchMedia("screen and (max-width: 1680px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -15 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 81 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart1ref.current, {
          left: 20 + "%",
          top: 2950 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart2ref.current, {
          left: 71 + "%",
          top: 2950 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart1ref.current, {
          left: "calc(50% - 35px)",
          top: 3650 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3200)
        .to(logopart2ref.current, {
          left: "calc(50% - 47px)",
          top: 3650 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(57% - 47px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart1ref.current, {
          left: 27 + "%",
          top: 6380 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6000)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6380 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //nine step
      var t9 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart1ref.current, {
          left: 20 + "%",
          top: 7000 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6900)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 7000 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      //ten step
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7000)
        .to(logopart1ref.current, {
          left: -35 + "%",
          top: 7500 + "px",
          width: 300 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7000)
        .to(logopart2ref.current, {
          left: 120 + "%",
          top: 7900 + "px",
          width: 300 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //eleven step
      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: 29 + "%",
          top: 7700 + "px",
          width: 135 + "px",
          opacity: 0,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11110 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 64 + "%",
          top: 7700 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t110.time(window.pageYOffset + triggerOffset);
        t11110.time(window.pageYOffset + triggerOffset);
        requestId = null;
      }
    }
    if (window.matchMedia("screen and (max-width: 1440px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -15 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 74 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2600)
        .to(logopart1ref.current, {
          left: 20 + "%",
          top: 2775 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2600)
        .to(logopart2ref.current, {
          left: 71 + "%",
          top: 2775 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3000)
        .to(logopart1ref.current, {
          left: "calc(50% - 35px)",
          top: 3509 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 3000)
        .to(logopart2ref.current, {
          left: "calc(50% - 47px)",
          top: 3509 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(57% - 47px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart1ref.current, {
          left: 24 + "%",
          top: 6210 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6210 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //nine step
      var t9 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 6300)
        .to(logopart1ref.current, {
          left: -3 + "%",
          top: 6950 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7200 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      //ten step
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: -3 + "%",
          top: 7350 + "px",
          width: 300 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7400 + "px",
          width: 300 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);

        requestId = null;
      }
    }

    if (window.matchMedia("screen and (max-width: 1366px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -15 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 77 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2300 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart1ref.current, {
          left: 22 + "%",
          top: 2720 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart2ref.current, {
          left: 69 + "%",
          top: 2720 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2700)
        .to(logopart1ref.current, {
          left: "calc(49% - 21px)",
          top: 3314 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2700)
        .to(logopart2ref.current, {
          left: "calc(49% - 32px)",
          top: 3316 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(57% - 47px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart1ref.current, {
          left: 24 + "%",
          top: 6139 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6139 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //nine step
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7200 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      //ten step
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: -3 + "%",
          top: 7500 + "px",
          width: 300 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7500 + "px",
          width: 300 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //ten step
      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: 24 + "%",
          top: 7395 + "px",
          width: 153 + "px",
          opacity: 0,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11110 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 67 + "%",
          top: 7395 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t110.time(window.pageYOffset + triggerOffset);
        t11110.time(window.pageYOffset + triggerOffset);
        requestId = null;
      }
    }
    if (window.matchMedia("screen and (max-width: 1280px)").matches) {
      gsap.set("#animation_ovelay_dark", {
        top: 80 + "%",
        opacity: 0,
      });
      gsap.set(logopart1ref.current, {
        left: 60 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      gsap.set(logopart2ref.current, {
        left: 70 + "%",
        top: 500 + "px",
        width: 100 + "px",
        opacity: 0,
      });
      //first step
      var t1 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart1ref.current, {
          left: -15 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 645)
        .to(logopart2ref.current, {
          left: 73 + "%",
          top: 1400 + "px",
          width: 560 + "px",
          opacity: 1,
          zIndex: 2222222,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //second step
      var t2 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart1ref.current, {
          left: 45 + "%",
          top: 2300 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t22 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 1600)
        .to(logopart2ref.current, {
          left: 45 + "%",
          top: 2500 + "px",
          width: 135 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //third step
      var t3 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart1ref.current, {
          left: 20 + "%",
          top: 2590 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t33 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2500)
        .to(logopart2ref.current, {
          left: 71 + "%",
          top: 2590 + "px",
          width: 135 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fourth step
      var t4 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2800)
        .to(logopart1ref.current, {
          left: "calc(50% - 37px)",
          top: 3386 + "px",
          width: 75 + "px",
          rotateZ: 37,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t44 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 2800)
        .to(logopart2ref.current, {
          left: "calc(50% - 50px)",
          top: 3384 + "px",
          width: 75 + "px",
          rotateZ: 38,
          rotateX: 150,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //fifth step
      var t5 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t55 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4000)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 4500 + "px",
          width: 500 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t555 = gsap
        .timeline({ paused: true })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
        .to("#animation_ovelay_dark", {
          top: 50 + "%",
          opacity: 1,
          ease: "none",
          duration: 300,
        })
        .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
      //sixth step
      var t6 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart1ref.current, {
          left: "calc(40% - 35px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t66 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 4800)
        .to(logopart2ref.current, {
          left: "calc(37% - 47px)",
          top: 5300 + "px",
          width: 500 + "px",
          opacity: 1,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //sixth step
      var t7 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart1ref.current, {
          left: "calc(60% - 35px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t77 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5500)
        .to(logopart2ref.current, {
          left: "calc(57% - 47px)",
          top: 5800 + "px",
          width: 300 + "px",
          opacity: 0,
          zIndex: 0,
          ease: "none",
          duration: 600,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      //Eight step
      var t8 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart1ref.current, {
          left: 24 + "%",
          top: 6177 + "px",
          width: 135 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t88 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 5900)
        .to(logopart2ref.current, {
          left: 65 + "%",
          top: 6177 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //nine step
      var t99 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 6300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7200 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 600,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });

      //ten step
      var t10 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: -3 + "%",
          top: 7600 + "px",
          width: 300 + "px",
          opacity: 1,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t1010 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 94 + "%",
          top: 7600 + "px",
          width: 300 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      //ten step
      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart1ref.current, {
          left: 24 + "%",
          top: 7395 + "px",
          width: 153 + "px",
          opacity: 0,
          rotateZ: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart1ref.current, { backgroundColor: "transparent" });
      var t11110 = gsap
        .timeline({ paused: true })
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7300)
        .to(logopart2ref.current, {
          left: 67 + "%",
          top: 7395 + "px",
          width: 135 + "px",
          rotateZ: 0,
          rotateX: 0,
          opacity: 0,
          zIndex: 1,
          ease: "none",
          duration: 200,
        })
        .set(logopart2ref.current, { backgroundColor: "transparent" });
      // Only update on animation frames
      window.addEventListener("scroll", function () {
        if (!requestId) {
          requestId = requestAnimationFrame(update);
        }
      });

      update();

      // Set timeline time to scrollTop
      function update() {
        t1.time(window.pageYOffset + triggerOffset);
        t11.time(window.pageYOffset + triggerOffset);
        t2.time(window.pageYOffset + triggerOffset);
        t22.time(window.pageYOffset + triggerOffset);
        t3.time(window.pageYOffset + triggerOffset);
        t33.time(window.pageYOffset + triggerOffset);
        t4.time(window.pageYOffset + triggerOffset);
        t44.time(window.pageYOffset + triggerOffset);
        t5.time(window.pageYOffset + triggerOffset);
        t55.time(window.pageYOffset + triggerOffset);
        t555.time(window.pageYOffset + triggerOffset);
        t6.time(window.pageYOffset + triggerOffset);
        t66.time(window.pageYOffset + triggerOffset);
        t7.time(window.pageYOffset + triggerOffset);
        t77.time(window.pageYOffset + triggerOffset);
        t8.time(window.pageYOffset + triggerOffset);
        t88.time(window.pageYOffset + triggerOffset);
        t9.time(window.pageYOffset + triggerOffset);
        t99.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t10.time(window.pageYOffset + triggerOffset);
        t1010.time(window.pageYOffset + triggerOffset);
        t110.time(window.pageYOffset + triggerOffset);
        t11110.time(window.pageYOffset + triggerOffset);
        requestId = null;
      }
    }

  };
  useEffect(() => {
    logoAnimation();
  });

  //slider
  var settings = {
    dots: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    autoplay: true,
  };
  return (
    <>
      <div className="d-none d-xl-block">
        <img src={logopart1} alt="" id="logopart1" ref={logopart1ref} />
        <img src={logopart2} alt="" id="logopart2" ref={logopart2ref} />
      </div>
      <Container>
        <Row className="align-items-center pt-5">
          <Col lg={6}>
            <div className="section_one">
              <div className="track_content">
                <p>$TRACK</p>
                <p>A DAO to merge the DEFI & NFT worlds into a single token</p>
                <Button className="fs-22px" size="lg">
                  Dashboard
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="infinite_logo ">
              <img src={logobox} alt="logobox" className="img-fluid"></img>

              <div className="lg_logoanimate rotate">
                <img
                  src={logoanimate}
                  alt="logobox"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="marq_strips ">
        <div
          className={`green_strips ${scroll ? "strip_tras_add" : "strip_tras_remove"
            }`}
        >
          <marquee behavior="scroll" direction="left" scrollamount="20">
            <div className="d-flex justify-content-between">
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px">Treasury Balance</span> $434,561,892{" "}
                  <img src={arrowdropup}></img>
                </p>
              </div>
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px">Treasury Balance</span> $309,561,892{" "}
                  <img src={arrowdropdown}></img>
                </p>
              </div>
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px">Treasury Balance</span> $309,561,892{" "}
                  <img src={arrowdropup}></img>
                </p>
              </div>
            </div>
          </marquee>
        </div>
        <div
          className={`blue_strips ${scroll ? "strip_tras_add" : "strip_tras_remove"
            }`}
        >
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <div className="d-flex justify-content-between">
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px fw-700">Last 7 Days</span>
                  $23,726,783,682 <img src={arrowdropdown}></img>
                </p>
              </div>
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px fw-700">NFT Currency</span>{" "}
                  $309,561,892 <img src={arrowdropup}></img>
                </p>
              </div>
              <div>
                <p className="fs-45px m-0 fw-400">
                  <span className="fs-22px fw-700">Last 7 Days</span>{" "}
                  $309,561,892 <img src={arrowdropup}></img>
                </p>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      <section className="what_track text-center sale_will_take">
        <Container>
          <div className="sale_will_banner text-center ">
            <img src={sale_willbanner}></img>
            <div className="ovelay_dark">
              <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 ">
                What is $TRACK?
              </h2>
              <Row className=" d-flex justify-content-center">
                <Col xl={7}>
                  <p className="fs-18px text-white fw-300">
                    NFT TrackDAO ($TRACK), built on Ethereum, is a synthetic asset
                    pegged to the floor prices of the top 10 Blue Chip NFT projects.
                    As a single entry trading derivative,
                    $TRACK allows investors to speculate on the Blue Chip NFT
                    market simultaneously, rather than having to purchase those
                    assets or select a portfolio. This will be of value to
                    investors interested in the NFT field, those priced out of
                    such assets and those who require immediate liquidity on
                    their investments without requiring a peer-to-peer purchase
                    arrangement.
                  </p>
                  <p className="fs-18px text-white fw-300">
                    In addition, a reflection on market sales of 5% will create a fund with which the DAO will be able to buy NFT Blue Chip Protocol assets to create an asset-backed value for $TRACK holders. Each sale will attract a 5% fee, where 4% of the sale of $TRACK to ETH will be sent to the DAO wallet for DAO asset purchases, while the remaining 1% will go towards future development of the project.
                  </p>
                </Col>
              </Row>
              <Button className="fs-22px mt-5" size="lg">
                Discover NTD
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="dark_strip">
        <div className="">
          <marquee behavior="scroll" direction="left" scrollamount="5">
            <div className="d-flex justify-content-between">
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
              <div>
                <p className="gren_title fs-45px fw-700">
                  Chainlink{" "}
                  <span className="strip_text_cl fs-45px fw-700">
                    Each sale will attract a 5%
                  </span>
                </p>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      <section className="slider_one">
        <Slideone />
      </section>
      <section className="how_does_work">
        <Container>
          <Row className=" d-flex justify-content-center">
            <Col xl={6}>
              <h2 className="gren_title fs-xl-55px fl-lg-30 fs-md-30px fw-700 pb-2 text-center ">
                How does it Work? Introducing Calibrations?
              </h2>
            </Col>
          </Row>
        </Container>
        <Introslides />
      </section>
      <section className="coin_shadow">
        <div className="public_fair_launch" ref={imgMoveRef}>
          <img src={coins} alt="" ref={imgRef} className="w-100 moveImg" />
          <div className="coins_inner_content">
            <Container>
              <Row className="justify-content-center">
                <Col xl={8} className="text-center">
                  <div className="arrowdown bounce">
                    <img src={arrowdownlg}></img>
                  </div>
                  <div className="pub_logo  ">
                    <img src={pub_logo} className=""></img>
                  </div>
                  <div>
                    <h2 className="gren_title fs-55px fw-700 pb-2 text-center ">
                      Fair Public Launch
                    </h2>
                    <p className="fw-400 fs-32px fs-md-20px text-white">
                      Too many DAOs and protocols are negatively impacted by
                      VCs and other private sale buyers purchasing tokens at low prices
                      and then using DEX liquidity to exit. with NFT TrackDAO,
                      there is just one sale with the same entry point for all
                      investors.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="fs-22px mt-5 btn btn-primary btn-lg"
                  >
                    Request a Demo
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      <section className="sale_will_take">
        <Container>
          <div className="sale_will_banner text-center">
            <img src={sale_willbanner}></img>
            <div className="ovelay_dark" id="animation_ovelay_dark">
              <h4 className="fs-55px fs-md-30px fw-700 text-white">
                Our sale will take place on{" "}
                <span className="gren_title fw-700">Copperlaunch.com</span>
              </h4>
              <div>
                <p className="fs-18px fw-300 text-white">
                  'Copper is the most open, transparent, and user-friendly way
                  to participate in Balancer Liquidity Bootstrapping Pools.
                  Liquidity and price discovery for an idea can now be easily
                  bootstrapped by any community. Copper is here to help make
                  LBPs accessible for everyone.'
                </p>
              </div>
              <button
                type="button"
                className="fs-22px mt-5 btn btn-primary btn-lg"
              >
                Bid Copper
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="key_features ">
        <Container>
          <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 text-center">
            Key Features
          </h2>
          <Row className="d-flex justify-content-center">
            <Col xl={7}>
              <div>
                <p className="fs-18px fw-300 text-white">
                  'Copper is the most open, transparent, and user-friendly way
                  to participate in Balancer Liquidity Bootstrapping Pools.
                  Liquidity and price discovery for an idea can now be easily
                  bootstrapped by any community. Copper is here to help make
                  LBPs accessible for everyone.'
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <div className="key_blocks">
                <h4 className="fs-32px gren_title fw-400">Price discovery</h4>
                <p className="fs-18 fw-300 text-white">
                  The price of the token starts high and drops based on a
                  pre-configured price decay curve that can be resisted by
                  buying pressure from LBP participants. Anyone can buy into or
                  sell out of the LBP freely at any time, so price truly
                  regulates itself. Open and permissionless participation. No
                  whitelists, hard caps, or listing requirements. There is no
                  minimum or maximum allocation. LBP participants choose how
                  much they want to buy.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <div className="key_blocks">
                <h4 className="fs-32px gren_title fw-400">Fair distribution</h4>
                <p className="fs-18 fw-300 text-white">
                  The price of the token starts high and drops based on a
                  pre-configured price decay curve that can be resisted by
                  buying pressure from LBP participants. Anyone can buy into or
                  sell out of the LBP freely at any time, so price truly
                  regulates itself. Open and permissionless participation. No
                  whitelists, hard caps, or listing requirements. There is no
                  minimum or maximum allocation. LBP participants choose how
                  much they want to buy.
                </p>
              </div>
            </Col>
            <Col xl={12}>
              <div className="key_blocks">
                <h4 className="fs-32px gren_title fw-400">
                  Capital efficiency
                </h4>
                <p className="fs-18 fw-300 text-white">
                  The price of the token starts high and drops based on a
                  pre-configured price decay curve that can be resisted by
                  buying pressure from LBP participants. Anyone can buy into or
                  sell out of the LBP freely at any time, so price truly
                  regulates itself. Open and permissionless participation. No
                  whitelists, hard caps, or listing requirements. There is no
                  minimum or maximum allocation. LBP participants choose how
                  much they want to buy.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="most_trusted" >
        <Container>
          <Row className="justify-content-center">
            <Col xl={5}>
              <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2">
                The Most Trusted Tokenomics Wallet
              </h2>
              <p className="fs-18px  fw-300 text-white">
                Starlight is built on top of Gnosis Safe technology, the most
                secure and trusted non-custodial wallet in the Ethereum
                ecosystem. You–and only you–will have access to your wallet and
                funds.
              </p>
            </Col>
            <Col xl={5} className="text-center">
              <Slider {...settings} className="vslider">
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-55px  fw-700 text-white">$1,000,000</p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-55px  fw-700 text-white">$1,000,000</p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-55px  fw-700 text-white">$1,000,000</p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-55px  fw-700 text-white">$1,000,000</p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-55px  fw-700 text-white">$1,000,000</p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial supply
                  </p>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="nft_dao">
        <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-5 text-center">
          NFT TRACK DAO
        </h2>
        <Container>
          <Row>
            <Col xl={6}>
              <p className="fw-400 fs-xl-32px fs-md-28px text-white">
                Decide and Manage the purchase of Blue Chip NFT assets
              </p>
            </Col>
            <Col xl={6}>
              <p className="fw-400 fs-xl-32px text-white fs-md-28px">
                Vote on changes to the Blue Chip NFT index as assets in the NFT
                space evolve
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="our-team">
        <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 text-center">OUR TEAM</h2>
        <Container>
          <div className="d-flex justify-content-center row">
            <div className="col-xl-7 text-center">
              <div>
                <p className="fs-18px fw-300 text-white mb-5">
                  We believe that about 90% of success depends on people.And it seems that the time has come to present ourselves personally.
                </p>
              </div>
            </div>
          </div>
          <div className="team_member">
            <Row>
              <Col xl={4} col={12}>
                <div className="bluechip_img img-border-box">
                  <div className="bluechip_inner team_member_info">
                    <img src={team_one_img} alt="slide_img1" className="img-fluid mb-2" />
                    <h4 className="fs-32px gren_title fw-400 pt-3">Kenny Sandulak</h4>
                    <div className="fs-xl-25px fs-md-20px text-white fw-400 pb-4">Community Management</div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-lg-45px fw-700  gren_title mb-3">Kenny Sandulak</div>
                    <div className=" fs-xl-15px fw-300 text-white">
                      <p className="text-center px-4">Kenny graduated from Sprott-Shaw College in Vancouver, Canada, in Social Services.
                        He is a Canadian Certified Addiction Counsellor and certified Substance Abuse Therapist.
                        Until Covid in April 2020, Ken worked in mental health and with at-risk youth. When Covid
                        caused the inability to meet clients, Ken decided to concentrate on his long term love of crypto and
                        started working
                        in several Telegram and Discord community chats. Because of his
                        extensive counselling experience, he isn’t your average mod!</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4} col={12}>
                <div className="bluechip_img img-border-box">
                  <div className="bluechip_inner team_member_info">
                    <img src={team_one_img} alt="slide_img1" className="img-fluid mb-2" />
                    <h4 className="fs-32px gren_title fw-400 pt-3">Kenny Sandulak</h4>
                    <div className="fs-xl-25px fs-md-20px text-white fw-400 pb-4">Community Management</div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-lg-45px fw-700  gren_title mb-3">Kenny Sandulak</div>
                    <div className=" fs-xl-15px fw-300 text-white">
                      <p className="text-center px-4">Kenny graduated from Sprott-Shaw College in Vancouver, Canada, in Social Services.
                        He is a Canadian Certified Addiction Counsellor and certified Substance Abuse Therapist.
                        Until Covid in April 2020, Ken worked in mental health and with at-risk youth. When Covid
                        caused the inability to meet clients, Ken decided to concentrate on his long term love of crypto and
                        started working
                        in several Telegram and Discord community chats. Because of his
                        extensive counselling experience, he isn’t your average mod!</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4} col={12}>
                <div className="bluechip_img img-border-box">
                  <div className="bluechip_inner team_member_info">
                    <img src={team_one_img} alt="slide_img1" className="img-fluid mb-2" />
                    <h4 className="fs-32px gren_title fw-400 pt-3">Kenny Sandulak</h4>
                    <div className="fs-xl-25px fs-md-20px text-white fw-400 pb-4">Community Management</div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-lg-45px fw-700  gren_title mb-3">Kenny Sandulak</div>
                    <div className=" fs-xl-15px fw-300 text-white">
                      <p className="text-center px-4">Kenny graduated from Sprott-Shaw College in Vancouver, Canada, in Social Services.
                        He is a Canadian Certified Addiction Counsellor and certified Substance Abuse Therapist.
                        Until Covid in April 2020, Ken worked in mental health and with at-risk youth. When Covid
                        caused the inability to meet clients, Ken decided to concentrate on his long term love of crypto and
                        started working
                        in several Telegram and Discord community chats. Because of his
                        extensive counselling experience, he isn’t your average mod!</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

        </Container>
      </section>
      <section className="hr_line_logo">

        <div className="hr_line">
          <div className="container">
            <Row className="justify-content-around ">
              <Col xl={6} className="text-center hr_line_left">
                <img src={hrlinelogo} alt="hrlogo" />
                <div className="fs-xl-40px gren_title fw-700 ">
                  Q2 2022
                </div>
              </Col>
              <Col xl={6} className="hr_line_right">
                <img src={hrlinelogo} alt="hrlogo" />
                <div className="fs-xl-40px gren_title fw-700 ">
                  Q2 2022
                </div>
              </Col>

            </Row>
          </div>
        </div>
      </section>
      <section className="key_features  listing_checkbox">
        <Container>
          <Row className="justify-content-center">
            <Col xl={4} className=" listing_checkbox_left">
              <div className="key_blocks text-white">

                <p className="fw-300 fs-xl-18px "><img src={greenright} />Initial LBP on Copper Launch</p>
                <p><img src={greenright} />DEX listing</p>
                <p><img src={greenright} />Calibrations start every 24 hours</p>
                <p><img src={greenright} />Dashboard launch</p>
                <p><img src={greenright} />DAO voting mechanisms introduced</p>
              </div>
            </Col>
            <Col xl={4} className=" listing_checkbox_right">
              <div className="key_blocks text-white">

                <p className="fw-300 fs-xl-18px "><img src={greenright} />Initial LBP on Copper Launch</p>
                <p><img src={greenright} />DEX listing</p>
                <p><img src={greenright} />Calibrations start every 24 hours</p>
                <p><img src={greenright} />Dashboard launch</p>
                <p><img src={greenright} />DAO voting mechanisms introduced</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};
export default HomePage;
