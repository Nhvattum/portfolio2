// import {useEffect} from 'react'
import {Nav, Link, NavLink} from 'react-bootstrap'

export default function Navbar() {


    return (
        <div className="navDiv">
            
            <Nav className="navBar "activeKey="/home">
                <div className="favicon">
                    {/* <Nav.Item>
                        <Nav.Link className="navLink" href="/">
                            <img src="favicon.ico" />
                        </Nav.Link>
                    </Nav.Item> */}
                </div>
                <div className="navButtons">
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/about">About Nick</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </div>
    )
}