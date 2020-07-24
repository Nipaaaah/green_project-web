import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { GetTips } from '../../services/tips.service'
import DataTable, { defaultThemes } from 'react-data-table-component';


const Tips = () => {

  const [tipList, setTipList] = useState([])

  const getAllTips = async () => {
    const res = await GetTips();
    setTipList(res.data.tips);
  }

  useEffect(() => {
    setTimeout(
      () => {
        getAllTips();
      }
      , 1000)
  },
    [],
  )

  const edit = () => {
    console.log('Edit')
  }

  const del = () => {
    console.log('Delete')
  }

  const columns = [
    {
      name: 'Id',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'desc',
      sortable: true,
    },
    {
      name: 'Edit',
      cell: () => <Button onClick={edit}>Edit</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Delete',
      cell: () => <Button onClick={del}>Delete</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
  ];

  if (tipList.length === 0) {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              Loading...
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
  else {
    return (
      <div>
        <Container fluid>
          <DataTable
            title="Tip List"
            columns={columns}
            data={tipList}
          />
        </Container>
      </div >
    )
  }
}

export default Tips;