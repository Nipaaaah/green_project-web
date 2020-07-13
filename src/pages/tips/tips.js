import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Row, Container, Col } from 'react-bootstrap';

function Tips() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            Hello Tips
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Tips;