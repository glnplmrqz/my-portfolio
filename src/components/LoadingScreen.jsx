import React from 'react'
import { Container } from 'react-bootstrap'

const LoadingScreen = () => {
  const loaderStyle = {
    '--path': '#007bff',
    '--dot': '#6c757d',
    '--duration': '3s',
    width: '44px',
    height: '44px',
    position: 'relative',
    display: 'inline-block',
    margin: '0 16px'
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient" 
         style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <Container className="text-center">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div style={loaderStyle}>
            <svg viewBox="0 0 80 80" width="44" height="44">
              <circle r="32" cy="40" cx="40" fill="none" stroke="var(--path)" strokeWidth="10" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" dur="3s" values="0 200;100 200;0 200" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" dur="3s" values="0;-50;-200" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div style={{...loaderStyle, width: '48px'}}>
            <svg viewBox="0 0 86 80" width="48" height="44">
              <polygon points="43 8 79 72 7 72" fill="none" stroke="var(--path)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="stroke-dasharray" dur="3s" values="0 300;150 300;0 300" repeatCount="indefinite"/>
              </polygon>
            </svg>
          </div>
          <div style={loaderStyle}>
            <svg viewBox="0 0 80 80" width="44" height="44">
              <rect height="64" width="64" y="8" x="8" fill="none" stroke="var(--path)" strokeWidth="10" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" dur="3s" values="0 256;128 256;0 256" repeatCount="indefinite"/>
              </rect>
            </svg>
          </div>
        </div>
        <h4 className="text-white">Loading Portfolio...</h4>
      </Container>
    </div>
  )
}

export default LoadingScreen