import React, { useRef, useState } from "react";

// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from "react-router-dom";
import menuIcon from "../assets/image/hamburger-menu.svg";
import crossIcon from "../assets/image/crossIcon.svg";
import { Nav } from "react-bootstrap";
import HomePage from "../pages/HomePage";
// import scrollToElement from "../pages/HomePage"
// import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
// import SideBar from "./Sidebar";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleCloseMenu = () => {
        setAnchorEl(false);
    };
    const handleOpenMenu = () => {
        setAnchorEl(true);
    };
    // const scrollToElement = () => {
    //     console.log("hello");
    // }
    const scrollToWhatIs$Track = () => {
        const element = document.getElementById('what_is_$track');
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
    const scrollToHowItWorks = () => {
        const element = document.getElementById('secondStep');
        console.log("element", element.scrollHeight);
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
    const scrollToFairPublicLaunch = () => {
        const element = document.getElementById('fair_public_launch');
        console.log("element", element.scrollHeight);
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
    const scrollToTokenomics = () => {
        const element = document.getElementById('Tokenomics');
        console.log("element", element.scrollHeight);
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
    const scrollToTeam = () => {
        const element = document.getElementById('team');
        console.log("element", element.scrollHeight);
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
    const scrollToRoadmap = () => {
        const element = document.getElementById('roadMap');
        console.log("element", element.scrollHeight);
        if (element) {
            window.scroll({
                top: element.scrollHeight,
                behavior: 'smooth',
            })
        }
    }
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
                                <Nav.Item className="py-2" onClick={scrollToWhatIs$Track}>
                                    <Nav.Link href="" >What is $TRACK</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2" onClick={scrollToHowItWorks}>
                                    <Nav.Link href="" >How It Works</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2" onClick={scrollToFairPublicLaunch}>
                                    <Nav.Link href="" >Fair Public Launch</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2" onClick={scrollToTokenomics}>
                                    <Nav.Link href="" >Tokenomics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2" onClick={scrollToTeam}>
                                    <Nav.Link href="" >Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="py-2" onClick={scrollToRoadmap}>
                                    <Nav.Link href="" >Roadmap</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </>
                ) : null}
            </div>
            {/*<Dropdown>
                <Dropdown.Toggle style={{ background: "none" }} className=" btn_no_style nav_toggle" id="dropdown-basic">

                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleDashboard} >Dashboard</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>}
            {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
            </Menu> */}
        </>
    );
}
