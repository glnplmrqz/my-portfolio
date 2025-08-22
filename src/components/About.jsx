import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center mb-5 display-5 fw-bold text-primary" data-aos="fade-up">
              About Me
            </h2>
            
            <Card className="shadow-lg border-0" data-aos="fade-up" data-aos-delay="200">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="fas fa-user-circle text-primary" style={{fontSize: '4rem'}}></i>
                </div>
                
                <p className="lead mb-4">
                  Hi, I'm Glen Paul Marquez and currently a 3rd year student at Colegio de Montalban. 
                  I am pursuing a <span className="text-primary fw-semibold">Bachelor of Technology and Livelihood Education Major in Information and Communication</span>.
                </p>
                
                <p className="mb-4">
                  Since I was a kid, I've dreamed of creating websites, software, and games. 
                  My first programming language was <span className="text-primary fw-semibold">Java</span> when I was in grade 11 during senior high school, 
                  and since then I've learned other basic programming languages such as <span className="text-primary fw-semibold">C, C++ and Python</span>.
                </p>
                
                <p className="mb-0">
                  Currently, I'm studying Web Development including <span className="text-primary fw-semibold">HTML, CSS and JavaScript</span>. 
                  My biggest dream is to become a <span className="text-primary fw-semibold">Full Stack Developer</span>.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About