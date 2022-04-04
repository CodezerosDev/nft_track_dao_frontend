import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Introlside() {
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);
    var container = document.getElementById("scrollContainer");
    var scrollStart = document.getElementById("scrollStart");
    var duration = document.documentElement.clientHeight;
    gsap.set(container, {
      x: 300 + "px",
      width: (document.documentElement.clientWidth + 100) + "px",
    });
    gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: scrollStart,
        pin: false,
        scrub: -100,
        end: () => "+=" + (container.scrollWidth - document.documentElement.clientWidth),
        end: "+=" + duration
      }
    })
  };
  useEffect(() => {
    animation();
  });

  return (
    <section className="intro_sec">
      <div id="scrollStart"></div>
      <div className="intro_cali" id="scrollContainer">
        <div className="intro_cali_content panel  ">
          <span className="fs-32px text-white">01</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">02</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">03</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">04</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">05</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">06</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000. The base price of $TRACK
            will be determined following the completion.
          </p>
        </div>
      </div>
    </section>
  );
}
