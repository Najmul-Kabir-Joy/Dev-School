import { Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getStoredCart } from '../Utilities/fakedb';

const Navigation = () => {
    const db = getStoredCart()
    const count = Object.keys(db).length;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/home' style={{ textDecoration: 'none' }}><Navbar.Brand href="#home" className='ms-5 fw-bold'><i class="fas fa-university me-3"></i>DEV SCHOOL <i class="fas fa-university ms-3"></i></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Link to='/home' style={{ textDecoration: 'none' }}><Nav.Link href="#home" >HOME</Nav.Link></Link>
                        <Link to='/about' style={{ textDecoration: 'none' }}><Nav.Link href="#about">ABOUT US</Nav.Link></Link>
                        <Link to='/course' style={{ textDecoration: 'none' }}><Nav.Link href="#course">COURSES</Nav.Link></Link>
                        <Link to='/contact' style={{ textDecoration: 'none' }}><Nav.Link href="#contact">CONTACT US</Nav.Link></Link>
                        <Button variant="outline-secondary">
                            <i class="fas fa-shopping-cart"></i> <Badge bg="dark">{count}</Badge>
                        </Button>
                        <Button variant="outline-secondary" className='ms-2'>LOGIN</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div >
    );
};

export default Navigation;