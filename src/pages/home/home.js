import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { actualDate, isTokenValid, tokenDate } from '../../services/token.service';

function Home() {
  useEffect(() => {
    if (localStorage.getItem('token') === null && isTokenValid(actualDate, tokenDate)) {
      window.location = "/login"
    }
  })

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            Hello Home
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;