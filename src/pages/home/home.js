import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Row, Container, Col } from 'react-bootstrap';

function Home() {
  const { token } = useContext(AuthContext);

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