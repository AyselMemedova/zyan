import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();




const Header_prtf = () => {
    return (
        <div className="header_and__firstSection" id='top'>
            <div className='header_all'>
                <div className='logo'>
                    <img src="https://zyan.vercel.app/images/logo.png" alt="" />
                </div>
                <div className='main'>
                    <Navbar expand="lg" className="bg-body-dark">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto " >
                                    <NavDropdown title="home" id="basic-nav-dropdown" className="headerLi">
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.1">Home1</NavDropdown.Item>
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.2">
                                            Home2
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.3">Home3</NavDropdown.Item>
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.3">Home4</NavDropdown.Item>
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.3">Home RL</NavDropdown.Item>

                                        <NavDropdown.Divider />
                                       
                                    </NavDropdown>
                                    <Nav.Link className='headerLi' href="#link">About Us</Nav.Link>
                                    <Nav.Link className='headerLi' href="#link">Services</Nav.Link>
                                    <Nav.Link className='headerLi' href="#link">Project</Nav.Link>

                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.1" >Blog Details</NavDropdown.Item>
                                        <NavDropdown.Item className="headerLiDrop" href="#action/3.2">
                                        Blog List
                                        </NavDropdown.Item>
                                     
                                    </NavDropdown>
                                    <Nav.Link className='headerLi' href="#link">Contact</Nav.Link>


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* <ul>
                    <li>Home <i class="fa-solid fa-chevron-down"></i></li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Blog <i class="fa-solid fa-chevron-down"></i></li>
                    <li>Contact</li>
                </ul> */}

                    {/* <div className="navbar">
                    <ul>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">
                                    Home
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Home 1</a>
                                    <a href="#">Home 2</a>
                                    <a href="#">Home 3</a>
                                    <a href="#">Home 3</a>
                                    <a href="#">Home RTL</a>
                                </div>
                            </div>{" "}
                        </li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Projets</li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">
                                    Blog
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Blog List</a>
                                    <a href="#">Blog Details</a>
                                </div>
                            </div>{" "}
                        </li>
                        <li>Contact</li>
                    </ul>
                </div> */}

                </div>
                <div className='bar '>
                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

                    <div class="offcanvas offcanvas-end cssOfcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel"><img src="https://zyan.vercel.app/images/logo2.png" alt="" /></h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='ofcanvas_div'>
                                <h3>About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae facilis delectus quisquam blanditiis illo?</p>
                            </div>

                            <div className='get_in_touch'>
                                <h3>Get In Touch</h3>
                                <input type="text" placeholder='YOUR NAME' />
                                <input type="email" placeholder='YOUR EMAIL' />
                                <input id='message' type="text" placeholder='MESSAGE' /> <br />
                                <button>Submit now</button>

                            </div>
                        </div>
                    </div>


                    {/* <i class="fa-solid fa-bars"></i> */}

                </div>

            </div>
            <div className='section1'>
                <div className='main_left'>
                    <h2>HI, I'M ZYAN!  <br />CREATIVE <span style={{ color: '#55e6a5' }} >DESIGNER</span></h2>
                    <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                    <div className='main_left_btn'>

                        <button className='dwnload'>Download CV <i class="fa-solid fa-download"></i></button>

                        <button className='video'>
                            <div className='video_btn'>
                                <i class="fa-solid fa-play"></i>

                            </div>
                            Watch Video    </button>
                    </div>

                </div>

                <div className='main_right'>
                    <div className='main_right_img'>
                        <img src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header_prtf
