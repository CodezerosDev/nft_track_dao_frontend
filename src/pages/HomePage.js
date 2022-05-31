import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Slideone from "../pages/Slideone.js";
import Introslides from "../pages/IntroSlides.js";
// import logobox from "../assets/image/lg_logo_box.svg";
import logoanimate from "../assets/image/lg_logo.svg";
// import arrowdropup from "../assets/image/arrow_drop_up.svg";
// import arrowdropdown from "../assets/image/arrow_drop_down.svg";
import arrowdownlg from "../assets/image/arrow_down_lg.svg";
import pub_logo from "../assets/image/pub_logo.png";
import sale_willbanner from "../assets/image/sale_willbanner.png";
import coins from "../assets/image/coins.png";
import logopart1 from "../assets/image/logopart1.svg";
import logopart2 from "../assets/image/logopart2.svg";
import team_one_img from "../assets/image/team_one.png";
import team_img1 from "../assets/image/team_stephen_img.png";
import team_img2 from "../assets/image/team_mahindra_img.png";
import team_img3 from "../assets/image/team_chirag_img.png";
import team_img4 from "../assets/image/team_simon_img.png";
import hrlinelogo from "../assets/image/hrlinelogo.png";
import greenright from "../assets/image/green_right.svg";
import Slider from "react-slick/lib/slider";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const datamain = {
  labels: [
    "Public Sale",
    "Initial Dex Liquidity ",
    "Ecosystem Development ",
    "Team",
    "Airdrop",
    // "IDO",
  ],
  datasets: [
    {
      // label: [""],
      // data: [5, 6, 9, 10, 12, 58],
      data: [470000, 280000, 100000, 100000, 50000],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(239, 139, 44, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(54, 162, 235, 1)",
        // "rgba(97, 225, 182, 1)",
      ],
      borderWidth: 0,
      cutout: 40,
    },
  ],
};
export const data1 = {
  labels: ["Public Sale", ""],
  datasets: [
    {
      // label: [""],
      data: [5, 95],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(70, 73, 78, 1)"],
      borderWidth: 0,
      cutout: 22,
    },
  ],
};
export const data2 = {
  labels: ["Initial Dex Liquidity", ""],
  datasets: [
    {
      // label: [""],
      data: [6, 94],
      backgroundColor: ["rgba(255, 206, 86, 1)", "rgba(70, 73, 78, 1)"],
      borderWidth: 0,
      cutout: 22,
    },
  ],
};
export const data3 = {
  labels: ["Ecosystem Development", ""],
  datasets: [
    {
      // label: [""],
      data: [9, 91],
      backgroundColor: ["rgba(239, 139, 44, 1)", "rgba(70, 73, 78, 1)"],
      borderWidth: 0,
      cutout: 22,
    },
  ],
};
export const data4 = {
  labels: ["Team", ""],
  datasets: [
    {
      // label: [""],
      data: [10, 90],
      backgroundColor: ["rgba(153, 102, 255, 1)", "rgba(70, 73, 78, 1)"],
      borderWidth: 0,
      cutout: 22,
    },
  ],
};
export const data5 = {
  labels: ["Airdrop", ""],
  datasets: [
    {
      // label: [""],
      data: [12, 88],
      backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(70, 73, 78, 1)"],
      borderWidth: 0,
      cutout: 22,
    },
  ],
};
// export const data6 = {
//   labels: ["IDO", ""],
//   datasets: [
//     {
//       // label: [""],
//       data: [58, 42],
//       backgroundColor: ["rgba(97, 225, 182, 1)", "rgba(70, 73, 78, 1)"],
//       borderWidth: 0,
//       cutout: 22,
//     },
//   ],
// };

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
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
        // t555.time(window.pageYOffset + triggerOffset);
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
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
        // t555.time(window.pageYOffset + triggerOffset);
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
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
        // t555.time(window.pageYOffset + triggerOffset);
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
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
      //eleven step
      var t110 = gsap
        .timeline({ paused: true })
        .set(logopart1ref.current, { backgroundColor: "transparent" }, 7500)
        .to(logopart1ref.current, {
          left: 29 + "%",
          top: 7053 + "px",
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
        .set(logopart2ref.current, { backgroundColor: "transparent" }, 7500)
        .to(logopart2ref.current, {
          left: 64 + "%",
          top: 7053 + "px",
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
        // t555.time(window.pageYOffset + triggerOffset);
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

    if (window.matchMedia("screen and (max-width: 1366px)").matches) {
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
        // t555.time(window.pageYOffset + triggerOffset);
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
      // gsap.set("#animation_ovelay_dark", {
      //   top: 80 + "%",
      //   opacity: 0,
      // });
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
      // var t555 = gsap
      //   .timeline({ paused: true })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" }, 4200)
      //   .to("#animation_ovelay_dark", {
      //     top: 50 + "%",
      //     opacity: 1,
      //     ease: "none",
      //     duration: 300,
      //   })
      //   .set("#animation_ovelay_dark", { backgroundColor: "transparent" });
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
        // t555.time(window.pageYOffset + triggerOffset);
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
    speed: 0,
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
        <img src={logopart1} alt="lp1" id="logopart1" ref={logopart1ref} />
        <img src={logopart2} alt="lp2" id="logopart2" ref={logopart2ref} />
      </div>
      <Container>
        <Row className="align-items-center pt-5">
          <Col lg={6}>
            <div className="section_one">
              <div className="track_content">
                <p>$TRACK</p>
                <p>
                  A DAO to merge the DEFI &amp; NFT worlds into a single token.
                </p>
                {/*<NavLink to="/DashboardPage"><Button className="fs-22px" size="lg">
                  Dashboard
  </Button></NavLink>*/}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="infinite_logo ">
              {/* <img src={logobox} alt="logobox" className="img-fluid"></img> */}

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

      <section
        className="what_track text-center sale_will_take"
        id="what_is_track"
      >
        <Container>
          <div className="sale_will_banner text-center">
            <img src={sale_willbanner} alt=""></img>
            <div className="ovelay_dark">
              <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 ">
                What is $TRACK?
              </h2>
              <Row className=" d-flex justify-content-center">
                <Col xl={7}>
                  <p className="fs-18px text-white fw-300">
                    NFT TrackDAO ($TRACK), built on Ethereum, is a synthetic
                    asset pegged to the floor prices of the top 10 Blue Chip NFT
                    projects. As a single entry trading derivative, $TRACK
                    allows investors to speculate on the Blue Chip NFT market
                    simultaneously, rather than having to purchase those assets
                    or select a portfolio. This will be of value to investors
                    interested in the NFT field, those priced out of such assets
                    and those who require immediate liquidity on their
                    investments without requiring a peer-to-peer purchase
                    arrangement.
                  </p>
                  <p className="fs-18px text-white fw-300">
                    In addition, a reflection on market sales of 5% will create
                    a fund with which the DAO will be able to buy NFT Blue Chip
                    Protocol assets to create an asset-backed value for $TRACK
                    holders. Each sale will attract a 5% fee, where 4% of the
                    sale of $TRACK to ETH will be sent to the DAO wallet for DAO
                    asset purchases, while the remaining 1% will go towards
                    future development of the project.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <section className="slider_one">
        <Slideone />
      </section>
      <section className="how_does_work">
        <Container id="secondStep">
          <Row className=" d-flex justify-content-center">
            <Col xl={6}>
              <h2 className="gren_title fs-xl-55px fl-lg-30 fs-md-30px fw-700 pb-2 text-center">
                How does it Work? Introducing Calibrations
              </h2>
            </Col>
          </Row>
        </Container>
        <Introslides />
      </section>
      <section className="coin_shadow">
        <div
          className="public_fair_launch"
          ref={imgMoveRef}
          id="fair_public_launch"
        >
          <img src={coins} alt="coins" ref={imgRef} className="w-100 moveImg" />
          <div className="coins_inner_content">
            <Container>
              <Row className="justify-content-center">
                <Col xl={8} className="text-center">
                  <div className="arrowdown bounce">
                    <img src={arrowdownlg} alt="fpl-img"></img>
                  </div>
                  <div className="pub_logo  ">
                    <img src={pub_logo} alt="Pub logo"></img>
                  </div>
                  <div className="fpl_text">
                    <h2 className="gren_title  fs-xl-55px fs-md-30px fw-700 pb-2 text-center ">
                      Fair Public Launch
                    </h2>
                    <p className="fw-400 fs-xl-32px fs-lg-30px fs-sm-20px  fs-md-20px text-white">
                      Too many DAOs and protocols are negatively impacted by VCs
                      and other private sale buyers purchasing tokens at low
                      prices and then using Dex liquidity to exit. With NFT
                      TrackDAO, there is only one sale with the same entry point
                      for all participants.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      <section className="sale_will_take">
        <Container>
          <div className="sale_will_banner text-center">
            <img src={sale_willbanner} alt="" />
            <div className="ovelay_dark" id="animation_ovelay_dark">
              <h4 className="fs-xl-55px fs-md-30px fw-700 text-white">
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
            </div>
          </div>
        </Container>
      </section>
      <section className="key_features ">
        <Container>
          <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 text-center">
            Key Features
          </h2>
          {/*<Row className="d-flex justify-content-center">
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
</Row>*/}
          <Row>
            <Col xl={12}>
              <div className="key_blocks">
                <h4 className="fs-32px gren_title fw-400">
                  Capital Efficiency
                </h4>
                <p className="fs-18 fw-300 text-white">
                  The price of the token starts high and drops based on a
                  pre-configured price decay curve that can be resisted by
                  buying pressure from Liquidity Bootstrapping Pool (LBP)
                  participants. Anyone can buy into or sell out of the LBP
                  freely at any time, so price truly regulates itself through
                  open and permissionless participation. No whitelists, hard
                  caps, or listing requirements. There is no minimum or maximum
                  allocation. LBP participants choose how much they want to buy.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="key_blocks">
                <h4 className="fs-32px gren_title fw-400">Community First</h4>
                <p className="fs-18 fw-300 text-white">
                  We believe actions speak louder than words. This is why, to
                  show our commitment to the community, the team will be keeping
                  ZERO funds from the initial sale of $TRACK. 100% of all funds
                  raised will go towards seeding the DAO and providing Uniswap
                  liquidity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="most_trusted" id="Tokenomics">
        <Container>
          <Row className="justify-content-center">
            <Col xl={5}>
              <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2">
                Tokenomics
              </h2>
              {/* <Row>
                <Col xl={12}>
                  <div className="key_blocks">
                    <p className="fs-18 fw-300 text-white">
                      <img src={greenright} alt="" /> 72% IDO
                    </p>
                    <p className="fs-18 fw-300 text-white">
                      <img src={greenright} alt="" /> 10% Team – locked for 1
                      year, then linear vesting over 12 months.
                    </p>
                    <p className="fs-18 fw-300 text-white">
                      <img src={greenright} alt="" /> 6% Marketing
                    </p>
                    <p className="fs-18 fw-300 text-white">
                      <img src={greenright} alt="" /> 12% Treasury
                    </p>
                  </div>
                </Col>
              </Row> */}
              <Row className="align-items-center">
                <Col sm={3} className="mY-3">
                  <div className="chart_main">
                    <Doughnut
                      data={datamain}
                      options={{
                        maintainAspectRatio: true,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </div>
                </Col>
                <Col sm={9}>
                  <Row>
                    <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data1}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_1 lh-sm">
                        5%
                        <span className="text-white-50 d-block">Airdrop</span>
                      </div>
                    </Col>
                    <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data2}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_2 lh-sm">
                        6%
                        <span className="text-white-50 d-block">Marketing</span>
                      </div>
                    </Col>
                    <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data3}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_3 lh-sm">
                        9%
                        <span className="text-white-50 d-block">Liquidity Provision</span>
                      </div>
                    </Col>
                    <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data4}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_4 lh-sm">
                        10%
                        <span className="text-white-50 d-block">Founding Team</span>
                      </div>
                    </Col>
                    <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data5}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_5 lh-sm">
                        12%
                        <span className="text-white-50 d-block">Treasury</span>
                      </div>
                    </Col>
                    {/* <Col sm={6} className="d-flex align-items-center my-3">
                      <div className="chart_block_small me-3">
                        <Doughnut
                          data={data6}
                          options={{
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="chart_text chart_6 lh-sm">
                        58%
                        <span className="text-white-50 d-block">IDO</span>
                      </div>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xl={5} className="text-center">
              <Slider {...settings} className="vslider">
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-xl-55px fs-lg-35px fs-sm-20px  fw-700 text-white text-center">
                      1,000,000
                    </p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial Supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-xl-55px fs-lg-35px fs-sm-20px  fw-700 text-white">
                      1,000,000
                    </p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial Supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-xl-55px fs-lg-35px fs-sm-20px  fw-700 text-white">
                      1,000,000
                    </p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial Supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-xl-55px fs-lg-35px fs-sm-20px fw-700 text-white">
                      1,000,000
                    </p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial Supply
                  </p>
                </div>
                <div className="py-5 my-5">
                  <div className="counting_amount">
                    <p className="fs-xl-55px fs-lg-35px fs-sm-20px  fw-700 text-white">
                      1,000,000
                    </p>
                  </div>
                  <p className="fs-32px  fw-400 text-white mt-3">
                    Initial Supply
                  </p>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="nft_dao">
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
</section>*/}
      <section className="our-team" id="team">
        <h2 className="gren_title fs-xl-55px fs-md-30px fw-700 pb-2 text-center">
          OUR TEAM
        </h2>
        <Container>
          <div className="d-flex justify-content-center row">
            <div className="col-xl-7 text-center">
              <div>
                <p className="fs-18px fw-300 text-white mb-5">
                  We believe that about 90% of success depends on people, and it
                  seems that the time has come to present ourselves personally.
                </p>
              </div>
            </div>
          </div>
          <div className="team_member">
            <Row>
              <Col md={6} xl={3}>
                <div className="bluechip_img img-border-box">
                  <div className="team_member_info">
                    <img
                      src={team_img1}
                      alt="Stephen Spanias - Chief Marketing Officer"
                      className="img-fluid mb-2"
                    />
                    <h4 className="fs-20px fs-md-22px fs-xl-26px fs-xxl-28px gren_title fw-400 pt-3">
                      Stephen Spanias
                    </h4>
                    <div className="fs-xl-22px fs-md-20px text-white fw-400 pb-4">
                      Chief Marketing Officer
                    </div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-xxl-36px fs-xl-32px fs-lg-28px fs-24px fw-700 gren_title mb-2">
                      Stephen Spanias
                    </div>
                    <div className="fs-xl-15px fw-300 text-white text_block">
                      <p className="text-center">Stephen lives and breathes promotion and marketing. He’s worked with global brands such as Samsung and Philip Morris to bring innovative concepts and products to markets around the world.</p>
                      <p className="text-center">Stephen has been a keen investor and supporter of all things crypto since 2017.
                      </p>
                      <p className="text-center">We are excited to have Stephen and his passion for all things marketing and crypto on the team. </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3}>
                <div className="bluechip_img img-border-box">
                  <div className="team_member_info">
                    <img
                      src={team_img2}
                      alt="Mahendra P - Lead Developer"
                      className="img-fluid mb-2"
                    />
                    <h4 className="fs-20px fs-md-22px fs-xl-26px fs-xxl-28px gren_title fw-400 pt-3">
                    Mahendra P
                    </h4>
                    <div className="fs-xl-22px fs-md-20px text-white fw-400 pb-4">
                    Lead Developer
                    </div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-xxl-36px fs-xl-32px fs-lg-28px fs-24px fw-700 gren_title mb-2">
                    Mahendra P
                    </div>
                    <div className="fs-xl-15px fw-300 text-white text_block">
                      <p className="text-center">
                      Mahendra has been involved in the blockchain space since 2017.
                      </p>
                      <p className="text-center">
                      He has worked on multiple blockchain projects as Lead Developer, Architect, and Team Lead.
                      </p>
                      <p className="text-center">
                      Since 2020 he has been performing the role of Blockchain Consultant and has been advising various companies in the DeFi space.
                      </p>
                      <p className="text-center">
                      Mahendra’s expertise in the blockchain space is an asset for any company.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3}>
                <div className="bluechip_img img-border-box">
                  <div className="team_member_info">
                    <img
                      src={team_img3}
                      alt="Chirag P - Lead Designer"
                      className="img-fluid mb-2"
                    />
                    <h4 className="fs-20px fs-md-22px fs-xl-26px fs-xxl-28px gren_title fw-400 pt-3">
                    Chirag P
                    </h4>
                    <div className="fs-xl-22px fs-md-20px text-white fw-400 pb-4">
                    Lead Designer
                    </div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-xxl-36px fs-xl-32px fs-lg-28px fs-24px fw-700 gren_title mb-2">
                    Chirag P
                    </div>
                    <div className="fs-xl-15px fw-300 text-white text_block">
                      <p className="text-center">
                      Chirag has been working as a lead designer since early 2015.
                      </p>
                      <p className="text-center">
                      He has worked on multiple projects in the DeFi space.
                      </p>
                      <p className="text-center">
                      Chirag has also delivered designs for multiple NFT projects in the past. His creative outlook to work is one of the biggest strengths for any team.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3}>
                <div className="bluechip_img img-border-box">
                  <div className="team_member_info">
                    <img
                      src={team_img4}
                      alt="Simon Lewis - Advisor"
                      className="img-fluid mb-2"
                    />
                    <h4 className="fs-20px fs-md-22px fs-xl-26px fs-xxl-28px gren_title fw-400 pt-3">
                      Simon Lewis
                    </h4>
                    <div className="fs-xl-22px fs-md-20px text-white fw-400 pb-4">
                      Advisor
                    </div>
                  </div>
                  <div className="bluechip_oeverlap">
                    <div className="fs-xxl-36px fs-xl-32px fs-lg-28px fs-24px fw-700 gren_title mb-2">
                    Simon Lewis
                    </div>
                    <div className="fs-xl-15px fw-300 text-white text_block">
                      <p className="text-center">
                        Simon has been involved in Crypto since 2017.
                      </p>
                      <p className="text-center">
                        In 2018, Simon co-founded Elevate Health which has attracted significant VC funding and was one of the first 'Change/Move to Earn' blockchain projects which have become very popular over the past 6 months. Elevate is still progressing well and will be moving from its pilot projects later this year.
                      </p>
                      <p className="text-center">
                      In 2020, Simon co-founded Bundles which has achieved significant token returns for investors. In 2022, Simon invited key community members to join him in the team to free up more time to concentrate on building Elevate Health and advising us at Track Dao. 
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="hr_line_logo" id="roadmap">
        <div className="hr_line">
          <div className="container">
            <Row className="justify-content-around ">
              <div className="col-xl-6 col-lg-4 col text-center hr_line_left">
                <img src={hrlinelogo} alt="hrlogo" />
                <div className="fs-xl-40px gren_title fw-700 ">Q3 2022</div>
              </div>
              <div className="col-xl-6 col-lg-4 col  hr_line_right">
                <img src={hrlinelogo} alt="hrlogo" />
                <div className="fs-xl-40px gren_title fw-700 ">Q4 2022</div>
              </div>
            </Row>
          </div>
        </div>
      </section>
      <section className="key_features  listing_checkbox">
        <Container>
          <Row className="justify-content-center">
            <Col xl={4} className=" listing_checkbox_left">
              <div className="key_blocks text-white">
                <p className="fw-300 fs-xl-18px ">
                  <img src={greenright} alt="" /> Initial LBP on Copper Launch
                </p>
                <p>
                  <img src={greenright} alt="" /> DEX listing
                </p>
                <p>
                  <img src={greenright} alt="" /> Calibrations start every 24
                  hours
                </p>
                <p>
                  <img src={greenright} alt="" /> Dashboard launch
                </p>
                <p>
                  <img src={greenright} alt="" /> DAO voting mechanisms
                  introduced
                </p>
              </div>
            </Col>
            <Col xl={4} className=" listing_checkbox_right">
              <div className="key_blocks text-white">
                <p className="fw-300 fs-xl-18px ">
                  <img src={greenright} alt="" /> Purchase of first DAO blue
                  Chip NFT assets
                </p>
                <p>
                  <img src={greenright} alt="" /> Further deployment of
                  governance mechanisms
                </p>
                <p>
                  <img src={greenright} alt="" /> Community and marketing
                  development
                </p>
                <p>
                  <img src={greenright} alt="" /> Roadmap 2.0 release
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
