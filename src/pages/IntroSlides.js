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
    if (window.matchMedia("screen and (min-width: 768px)").matches) {
      animation();
    }
  });

  return (
    <section className="intro_sec">
      <div id="scrollStart"></div>
      <div className="intro_cali" id="scrollContainer">
        <div className="intro_cali_content panel  ">
          <span className="fs-32px text-white">01</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The initial token supply will be 1,000,000.
            The base price of $TRACK will be determined following the completion of the IDO on Copper Launch.
            Let us assume it is $1.00.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">02</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            The current total floor price of the Blue Chip NFT index is 236 ETH (4/03/2022).
            Let us assume that this remains the same until DEX launch.
            This 236 ETH represents the base price from which to match to the initial launch price of $TRACK. (in our assumptions, $1.00)
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">03</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            If the price of $TRACK increases to $2.00,
            the supply of track would increase to 2,000,000 to
            reach the target price of $1.00 via Uniswap liquidity pools.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">04</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            If the total value of the 10 Blue Chip project's floor price increases to 472 ETH,
            the target price of $TRACK will be $2.00. In this instance,
            the supply of $TRACK is recalibrated via Uniswap liquidity pools to reach this target price.
            $TRACK allows investors to speculate on the NFT field with one token.
          </p>
        </div>
        <div className="intro_cali_content panel ">
          <span className="fs-32px text-white">05</span>
          <p className="fs-16px fs-md-14px text-white fw-300">
            Supply expansions/contractions are called Calibrations and will occur every 24 hours.
            Expansion creates new supply, which reduces the price of $TRACK down
            when paired with the ETH in the liquidity pool; Contraction decreases supply,
            which drives the $TRACK price up to its target.
          </p>
        </div>

      </div>
    </section>
  );
}
