import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const [user] = useAuthState(auth);

    const logOut =()=>{
        signOut(auth);
    }

    return (
        <div className="header text-center">
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="text-white mx-2 my-2">Home</Link>
                                <Link to="/blogs" className="text-white mx-2 my-2">Blogs</Link>
                                <Link to="/my-portfolio" className="text-white mx-2 my-2">My Portfolio</Link>
                                {
                                    user && <>
                                        <Link to="/dashboard" className="text-white mx-2 my-2">Dashboard</Link>
                                        <p className="text-primary mx-2 my-2">{user.displayName}</p>
                                    </>
                                }
                               
                                {
                                    user ?
                                        <button className='btn btn-primary text-white text-decoration-none' onClick={() => logOut()}>Log Out</button>
                                        :
                                        <Link to="/login" className="text-white mx-2 my-2">
                                            Login
                                        </Link>}

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;