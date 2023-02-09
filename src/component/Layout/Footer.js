import React from "react";

import { Container, Nav } from 'react-bootstrap';
import logo from "../../assets/image/logo.svg";
// import socialfooter from "../../assets/image/socialIcons.png";
import tweeterIcon from '../../assets/image/tweeterIcon.svg';
import discordIcon from '../../assets/image/DiscordIcon.svg'
import ScrollToTop from "react-scroll-to-top";
import telegramIcon from '../../assets/image/telegram.svg';

const Footer = () => {
    return <>
        <footer>
            <Container>
                <div className="text-center mb-3">
                    <img src={logo} alt="logo" className='img-fluid' />
                </div>
                <Nav className="ms-auto align-items-center justify-content-center pt-3 pb-4 mb-lg-2">
                    {/* <Nav.Link  href="/" className="text-white fs-18px fw-300">Home</Nav.Link> */}
                    <Nav.Link  href="/DashboardPage" className="text-white fs-18px fw-300">Dashboard</Nav.Link>
                    <Nav.Link  href="#what_is_track" className="text-white fs-18px fw-300">What is $TRACK</Nav.Link>
                    <Nav.Link  href="#secondStep" className="text-white fs-18px fw-300">How It Works</Nav.Link>
                    <Nav.Link  href="#fair_public_launch" className="text-white fs-18px fw-300">Fair Public Launch</Nav.Link>
                    <Nav.Link  href="#Tokenomics" className="text-white fs-18px fw-300">Tokenomics</Nav.Link>
                    <Nav.Link  href="#team" className="text-white fs-18px fw-300">Team</Nav.Link>
                    <Nav.Link  href="#roadmap" className="text-white fs-18px fw-300">Roadmap</Nav.Link>
                    <Nav.Link  href="https://solidity.finance/audits/TRACKToken/" className="text-white fs-18px fw-300" target={"_blank"} >Audit</Nav.Link>
                </Nav>
                <div className="copy_right d-flex justify-content-between">
                    <div className="">
                        <p className="mb-0">&copy; NFT Track Dao 2022</p>
                    </div>
                    <div className="socialIcons">
                        <a target="_blank" href="https://t.me/TrackDaoGroup"><p className="mb-0 fs-16px fw-300 tweeterIcon" ><img src={telegramIcon} /></p></a>
                        <a target="_blank" href="https://twitter.com/NFT_TrackDao"><p className="mb-0 fs-16px fw-300 tweeterIcon"><img src={tweeterIcon} /></p></a>
                          {/*<a target="_blank" href="https://discord.gg/JJNHWyhEvP"><p className="mb-0 fs-16px fw-300"><img src={discordIcon} /></p></a>*/}


                    </div>
                </div>
            </Container>
            <ScrollToTop smooth className="scrolltotop" />
        </footer>

    </>
}

export default Footer;