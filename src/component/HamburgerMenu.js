import * as React from 'react';

// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/image/hamburger-menu.svg'
import {  Button } from "react-bootstrap";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDashboard = () => {
        setAnchorEl(null);
        navigate('/DashboardPage')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="nav_toggle_wrapper ms-4 mb-2">
            <Button className="btn btn_no_style nav_toggle">
                <img src={menuIcon}  alt="menu"/>
            </Button>
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
        </div>
    );
}
