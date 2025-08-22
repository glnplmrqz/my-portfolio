import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'

const Projects = () => {
  const projects = [
    {
      title: 'First Website Project using HTML, CSS & JavaScript (SHS)',
      image: './IMAGES/website-shs.png',
      description: 'My first website project showcasing HTML, CSS and JavaScript implementation during Senior High School.',
      link: 'https://glnplmrqz.github.io/website-shs',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Colegio de Montalban Mock-up Website',
      image: './IMAGES/cdm-mock.png',
      description: 'A mock-up website design for Colegio de Montalban showcasing modern web design principles.',
      link: 'https://glnplmrqz.github.io/cdm-website-project',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold text-primary" data-aos="fade-up">
          Projects
        </h2>
        
        {/* Desktop/Tablet View - Cards */}
        <div className="d-none d-md-block">
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={6} key={index}>
                <Card className="project-card h-100 shadow border-0" 
                      data-aos="fade-up" 
                      data-aos-delay={200 + index * 100}>
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{height: '250px', objectFit: 'cover'}}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-primary h5">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-secondary me-2 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="primary" 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Mobile View - Carousel */}
        <div className="d-md-none" data-aos="fade-up">
          <Carousel indicators={true} controls={true} interval={null}>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <Card className="project-card shadow border-0 mx-2">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text-primary h6">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="small">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-secondary me-1 mb-1 small">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt me-1"></i>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Projects