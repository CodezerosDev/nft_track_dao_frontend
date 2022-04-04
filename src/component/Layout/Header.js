import React, {useContext} from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/image/logo.svg";
import dashogo from "../../assets/image/dash_logo.svg";
import {Web3Context} from '../../web3/contexts/web3Context'
import { Link } from "react-router-dom";

function Header() {
    const {networkDetails, handleConnect, loading, setLoading} = useContext(Web3Context)

    const connectWallet = () => {
        handleConnect()
    }

    return (
        <div className="App">
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
            <div className="dashboard_logo text-center">
                <div className=' '>
                    <div>                   
                      <img src={dashogo} alt="dash_logo" className='img-fluid' />
                        {!networkDetails.address && 
                        <Button className="fs-22px connect_btn_head" size="lg" onClick={connectWallet} >
                            Connect
                        </Button>}
                        {networkDetails.address && <Button className="fs-22px connect_btn_head" size="lg">
                        {networkDetails.address?`...${networkDetails.address.substring(networkDetails.address.length -6)}`:0}
                        </Button>}
                  </div>
                  <div>
                       
                    </div>
                </div>

            </div>
            {/* dashboard-nav */}
        </div>
    );
}

export default Header;
