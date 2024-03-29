import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "../../assets/image/logo.svg";
import dashogo from "../../assets/image/dash_logo.svg";
import { Web3Context } from '../../web3/contexts/web3Context'
// import { Link } from "react-router-dom";
import HamburgerMenu from '../HamburgerMenu'
import tweeterIcon from '../../assets/image/tweeterIcon.svg';
import discordIcon from '../../assets/image/DiscordIcon.svg'
import telegramIcon from '../../assets/image/telegram.svg'
import ScrollToTop from "react-scroll-to-top";

function Header() {
    const { networkDetails, handleConnect, loading, setLoading } = useContext(Web3Context)

    const connectWallet = () => {
        handleConnect()
    }

    return (
        <div className="App">
            <div className="d-flex mt-4 align-items-center">
                {/* homenav */}
                {/* <Navbar expand="lg" className='pt-5'>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" className='img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="/" className='text-white fs-18px fw-400'>NTD Pro</Nav.Link>
                            <Nav.Link href="#" className='text-white fs-18px fw-400'>Stake</Nav.Link>
                            <Nav.Link href="#" className='text-white fs-18px fw-400'>Bond</Nav.Link>
                            <Nav.Link href="#" className='text-white fs-18px fw-400'>FAQs</Nav.Link>
                            <Nav.Link href="#" className='text-white fs-18px fw-400'>Governance</Nav.Link>
                            <Nav.Link href="#" className='text-white fs-18px fw-400'>Vote</Nav.Link>

                            <Button className='fs-22px' size="lg" as={Link} to="/Dashboard">  Dashboard </Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
                {/* homenav */}
                {/* dashboard-nav */}
                <HamburgerMenu />
                {<div className="mx-auto dashboard_logo">
                    {/*<img src={dashogo} alt="dash_logo" className='img-fluid' />*/}
                </div>}
                <div className="socialIcon ">
                <a target="_blank" href="https://t.me/TrackDaoGroup"><p className="mb-0 fs-16px fw-300 tweeterIcon" ><img src={telegramIcon} /></p></a>
                <a target="_blank" href="https://twitter.com/NFTTrackDAO?t=EMEtQiBF6p0zOlT9SyTqKQ&s=08"><p className="mb-0 fs-16px fw-300 tweeterIcon"><img src={tweeterIcon} /></p></a>
                <a target="_blank" href="https://discord.gg/JJNHWyhEvP"><p className="mb-0 fs-16px fw-300 tweeterIcon"><img src={discordIcon} /></p></a>

            </div>
                <div className="btn_connect text-center me-4">
                    {!networkDetails.address &&
                        <Button className="fs-22px connect_btn_head" size="lg" onClick={connectWallet} >
                            Connect
                        </Button>}
                    {networkDetails.address && <Button className="fs-22px connect_btn_head" size="lg">
                        {networkDetails.address ? `...${networkDetails.address.substring(networkDetails.address.length - 6)}` : 0}
                    </Button>}
                </div>
                {/* dashboard-nav */}
            </div>
        </div>
    );
}

export default Header;
