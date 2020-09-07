import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function Home() {

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
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