import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'

const Navigation = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          Glen Paul Marquez
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <i className="fas fa-home me-2"></i>Home
            </Nav.Link>
            <Nav.Link href="#about">
              <i className="fas fa-user me-2"></i>About
            </Nav.Link>
            <Nav.Link href="#skills">
              <i className="fas fa-code me-2"></i>Skills
            </Nav.Link>
            <Nav.Link href="#projects">
              <i className="fas fa-project-diagram me-2"></i>Projects
            </Nav.Link>
          </Nav>
          
          <Nav className="align-items-center">
            <Nav.Link href="./HTML, CSS AND JS/RESUME.pdf" target="_blank" className="btn btn-outline-primary me-3">
              <i className="fas fa-download me-2"></i>Resume
            </Nav.Link>
            
            <Form.Check 
              type="switch"
              id="theme-switch"
              label={<i className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`}></i>}
              checked={darkMode}
              onChange={toggleTheme}
              className="text-primary"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation