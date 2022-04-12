import React from "react";

import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from "../../assets/image/logo.svg";
import socialfooter from "../../assets/image/social.png";
const Footer = () => {
    return <>
        <footer>
            <Container>
                <div className="text-center">
                    <img src={logo} alt="logo" className='img-fluid' />
                </div>

                <div className="copy_right d-flex justify-content-between">
                    <div className="">
                        <p className="mb-0">© NFT Track Dao 2022</p>
                    </div>
                    <div className="">
                        <p className="mb-0 fs-16px fw-300"><img src={socialfooter} /></p>
                    </div>
                </div>
            </Container>

        </footer>

    </>
}

export default Footer;