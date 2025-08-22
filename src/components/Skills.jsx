import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Skills = () => {
  const skills = [
    {
      name: 'C Programming Language',
      icon: './IMAGES/C.png',
      alt: 'C Programming Language'
    },
    {
      name: 'C++ Programming Language',
      icon: './IMAGES/C++.png',
      alt: 'C++ Programming Language'
    },
    {
      name: 'Java Programming Language',
      icon: './IMAGES/Java.png',
      alt: 'Java Programming Language'
    },
    {
      name: 'Python Programming Language',
      icon: './IMAGES/Python.png',
      alt: 'Python Programming Language'
    },
    {
      name: 'HTML5, CSS3, & JavaScript',
      icons: [
        { src: './IMAGES/HTML.png', alt: 'HTML5' },
        { src: './IMAGES/CSS.png', alt: 'CSS3' },
        { src: './IMAGES/JavaScript.png', alt: 'JavaScript' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-light">
      <Container>
        <h2 className="text-center mb-3 display-5 fw-bold text-primary" data-aos="fade-up">
          Skills
        </h2>
        <p className="text-center mb-5 lead" data-aos="fade-up" data-aos-delay="100">
          I have basic knowledge in the following Programming Languages:
        </p>
        
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="skill-card h-100 shadow border-0 text-center" 
                    data-aos="fade-up" 
                    data-aos-delay={200 + index * 100}>
                <Card.Body className="d-flex flex-column justify-content-center p-4">
                  <div className="mb-3">
                    {skill.icons ? (
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        {skill.icons.map((icon, iconIndex) => (
                          <img 
                            key={iconIndex}
                            src={icon.src} 
                            alt={icon.alt}
                            style={{height: '60px', objectFit: 'contain'}}
                            className="img-fluid"
                          />
                        ))}
                      </div>
                    ) : (
                      <img 
                        src={skill.icon} 
                        alt={skill.alt}
                        style={{height: '60px', objectFit: 'contain'}}
                        className="img-fluid"
                      />
                    )}
                  </div>
                  <Card.Title className="h5 text-primary">
                    {skill.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills