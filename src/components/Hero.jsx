import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Full Stack Developer', 'Web Developer', 'Software Engineer']

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  return (
    <section id="home" className="hero-section bg-light">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="order-2 order-lg-1" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm <span className="text-primary">Paul</span>
            </h1>
            <h2 className="h3 mb-4">
              Aspiring <span className="text-primary typing-cursor">{currentText}</span>
            </h2>
            
            <div className="d-flex gap-3 mb-4">
              <a href="https://www.linkedin.com/in/glnplmrqz" target="_blank" rel="noopener noreferrer" 
                 className="social-btn btn btn-primary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/glnplmrqz" target="_blank" rel="noopener noreferrer" 
                 className="social-btn btn btn-dark">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://t.me/glnplmrqz" target="_blank" rel="noopener noreferrer" 
                 className="social-btn btn btn-info">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="mailto:glenpaulmarquez@gmail.com" 
                 className="social-btn btn btn-danger">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="order-1 order-lg-2 text-center" data-aos="fade-left">
            <img 
              src="./IMAGES/Formal Pic.png" 
              alt="Glen Paul Marquez - Professional Photo" 
              className="profile-image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero