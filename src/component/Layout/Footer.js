import React from "react";

import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from "../../assets/image/logo.svg";
import socialfooter from "../../assets/image/socialIcons.png";
import tweeterIcon from '../../assets/image/tweeterIcon.svg';
import discordIcon from '../../assets/image/DiscordIcon.svg'

const Footer = () => {
    return <>
        <footer>
            <Container>
                <div className="text-center mb-3">
                    <img src={logo} alt="logo" className='img-fluid' />
                </div>

                <div className="copy_right d-flex justify-content-between">
                    <div className="">
                        <p className="mb-0">&copy; NFT Track Dao 2022</p>
                    </div>
                    <div className="socialIcons">
                        <a target="_blank" href="https://twitter.com/TrackDAO"><p className="mb-0 fs-16px fw-300 tweeterIcon"><img src={tweeterIcon} /></p></a>
                        <a target="_blank" href="https://discord.gg/cMG6qvfYWv"><p className="mb-0 fs-16px fw-300"><img src={discordIcon} /></p></a>
                    </div>
                </div>
            </Container>

        </footer>

    </>
}

export default Footer;