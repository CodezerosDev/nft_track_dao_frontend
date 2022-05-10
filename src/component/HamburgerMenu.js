import React, { useState } from "react";
import menuIcon from "../assets/image/hamburger-menu.svg";
import crossIcon from "../assets/image/crossIcon.svg";
import { Nav } from "react-bootstrap";


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleCloseMenu = () => {
        setAnchorEl(false);
    };
    const handleOpenMenu = () => {
        setAnchorEl(true);
    };


    return (
        <>
            <div className="">
                <div className="nav_toggle ms-3 " onClick={handleOpenMenu}>
                    <img src={menuIcon} alt="menu" />
                </div>

                {anchorEl ? (
                    <>
                        <div className={anchorEl ? "sidebar" : null}>
                            <div className="menu_close" onClick={handleCloseMenu}>
                                <img src={crossIcon} alt="menu" />
                            </div>
                            <Nav className="d-block mt-4">
                                <Nav.Item className="py-2">
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="/DashboardPage">Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#what_is_track" >What is $TRACK</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#secondStep" >How It Works</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#fair_public_launch" >Fair Public Launch</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#Tokenomics" >Tokenomics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#team" >Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2">
                                    <Nav.Link href="#roadmap" >Roadmap</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </div>
                    </>
                ) : null}
            </div>

        </>
    );
}
