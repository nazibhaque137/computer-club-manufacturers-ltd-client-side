import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    const [user] = useAuthState(auth);

    const logOut =()=>{
        signOut(auth);
        //localStorage.removeItem('accessToken');
    }

    return (
        <div className="header">
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="blogs">Blogs</Nav.Link>
                                <Nav.Link href="my-portfolio">My Portfolio</Nav.Link>
                                {
                                    user && <>
                                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                                    </>
                                }
                               
                                {
                                    user ?
                                        <button className='btn btn-link text-white text-decoration-none' onClick={() => logOut()}>Sign Out</button>
                                        :
                                        <Nav.Link href="login">
                                            Login
                                        </Nav.Link>}

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;