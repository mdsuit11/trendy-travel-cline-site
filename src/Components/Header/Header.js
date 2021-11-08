import React from 'react';
import './Header.css'
import { Button, Container, Form, FormControl, Nav, Navbar,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user.photoURL);
  console.log(user.displayName);
    return (
 
        <div className="mainheader-container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid nav-container bg-primary fixed-top">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li  className="nav-item">
                  <div className="company-name">
                  
            {
              user.email && <h6> Hello</h6>
            }
           <h6>{user?.displayName}</h6>
           <img src={user?.photoURL} alt="" />
          </div>
                  </li>
                 
                  <li className="nav-item nav-titile">
                    <NavLink className="nav-link active" aria-current="page" to="/home">HOME</NavLink>
                  </li>
                  <li className="nav-item nav-titile">
                  <NavLink className="nav-link active" aria-current="page" to="/courses">PACKAGES</NavLink>
                    {/* <a className="nav-link" href="#">Link</a> */}
                    
                  </li>
                  <li className="nav-item nav-titile">
                  <NavLink className="nav-link active" aria-current="page" to="/profile">Profile</NavLink>
                  
                  </li>
                  <li className="nav-item nav-titile">
                  <NavLink className="nav-link active" aria-current="page" to="/About">About</NavLink>
                  
                  </li>
                  <li className="nav-item nav-titile">
                  <NavLink className="nav-link active" aria-current="page" to="/addservice">Add Service</NavLink>
                  
                  </li>

                  {/* Conditonal format route  */}
                  {
                    user?.email && <li className="nav-item nav-titile">
                    <NavLink className="nav-link active" aria-current="page" to="/myorder">My Orders</NavLink>
                    
                    </li>
                  }
                  <li className="nav-item ">
                  {
                  user?.email && <button  onClick={logOut} className='btn bg-black text-white btn-black'>Log Out</button>
                  }
                  
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>




                {/* <Navbar expand="lg">
                <Container>
            <NavbarCollapse id="navbarScroll">
            <Nav mr-5
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink className="navber" to="/home">HOME</NavLink>
            <NavLink className="navber" to="/courses">PACKAGES</NavLink>
            <NavLink className="navber" to="/profile">Profile</NavLink>
            <NavLink className="navber" to="/About">About</NavLink>
            {
      user?.email && <button  onClick={logOut} className='btn btn-primary'>Log Out</button>
    }
          </Nav>
          <div className="company-name">
            <h2 className="title">Trendy Travel</h2>
          </div>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar> */}


        </div>
    );
};

export default Header;