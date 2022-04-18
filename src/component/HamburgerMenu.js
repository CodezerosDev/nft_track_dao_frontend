import React, { useState } from 'react';

// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import menuIcon from '../assets/image/hamburger-menu.svg'
import crossIcon from '../assets/image/crossIcon.svg'
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import SideBar from "./Sidebar";


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(false);
    // const navigate = useNavigate()
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleDashboard = () => {
    //     // setAnchorEl(null);
    //     navigate('/DashboardPage')
    // };

    const handleCloseMenu = () => {
        setAnchorEl(false);
    };
    const handleOpenMenu = () => {
        setAnchorEl(true)
    }

    console.log("anchorEl", anchorEl);
    return (
        <>

            <div className="btn_no_style nav_toggle">

                <div className='menu_button' onClick={handleOpenMenu}>
                    <img src={menuIcon} alt="menu" />
                </div>

                {
                    anchorEl ? (
                        <>
                            <div className={anchorEl ? 'sidebar' : null}>
                                <div onClick={handleCloseMenu}>
                                    <img src={crossIcon} alt="menu" />
                                </div>
                            </div>
                        </>) : null
                }

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
