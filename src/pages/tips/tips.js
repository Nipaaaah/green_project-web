import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { getTips } from '../../services/tips.service'

function Tips() {
  const [tipsList, setListTips] = useState([]);

  const getAllTips = async () => {
    try {
      const res = await getTips();
      setListTips(res);
    }
    catch (error) {
      console.log(error)
    }
  }

  getAllTips()

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