import React, { useState, useEffect, StyleSheet } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { GetTips, DeleteTip, EditTip } from '../../services/tips.service';
import { BasicTable } from '../../components/Table';
import { ResultModal } from '../../components/ModalReturn';
import './tips.css';

const Tips = props => {
  const [tipList, setTipList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    setTimeout(
      () => {
        getAllTips();
        if (props.location.state !== undefined) {
          if (props.location.state.msg !== undefined) {
            displayStatus(props.location.state.msg);
            window.history.replaceState(null, null, "/");
          }
        }
      }
      , 1000)
  }, [])

  const getAllTips = async () => {
    const res = await GetTips();
    setTipList(res.data.tips);
  }

  const gotToEditTip = async (data) => {
    props.history.push({
      pathname: '/tips/edit',
      state: { data: data }
    });
  }

  const del = async (id) => {
    await DeleteTip(id)
      .then((res) => {
        let list = tipList.filter(list => list.id !== id);
        setTipList(list);
        displayStatus(res.data.msg);
      }, (error) => {
        displayStatus(error);
      });
  }

  const goToAddTip = () => {
    props.history.push('tips/add');
  }

  const changeStatus = async (row) => {
    let status;
    if (row.tipStatus === 1) {
      status = 0;
    }
    else {
      status = 1;
    }
    let data = {
      id: row.id,
      name: row.name,
      desc: row.desc,
      tipStatus: status
    }
    await EditTip(row.id, data)
      .then((res) => {
        let newTipList = tipList.map((item) => {
          if (item.id === row.id) {
            return data;
          }
          else
            return item;
        })
        setTipList(newTipList);
        displayStatus(res.data.msg);
      }, (error) => {
        displayStatus(error.response.data.message)
      });
  }

  const getStatusColor = (row) => {
    if (row.tipStatus === 1) {
      return "success"
    }
    else if (row.tipStatus === 0) {
      return "danger"
    }
  }

  const getStatusButtonText = (row) => {
    if (row.tipStatus === 1) {
      return "Enabled"
    }
    else if (row.tipStatus === 0) {
      return "Disabled"
    }
  }
  
  const displayStatus = (msg) => {
    setResultMessage(msg);
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
    }, 3000);
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
      cell: (row) => <Button variant="outline-warning"><FontAwesomeIcon onClick={(e) => gotToEditTip(row)} icon={faEdit} /></Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Delete',
      cell: (row) => <Button variant="outline-danger"><FontAwesomeIcon icon={faTrash} onClick={(e) => del(row.id)} /></Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      right: true,
    },
    {
      name: 'Status',
      selector: 'tipStatus',
      right: true,
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row) => <Button variant={getStatusColor(row)} onClick={(e) => changeStatus(row)} >{getStatusButtonText(row)}</Button>,
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
          <ResultModal
            msg={resultMessage}
            show={modalShow}
            animation={false}
            onHide={() => setModalShow(false)}
          />
          <BasicTable title="Tips List" columns={columns} array={tipList}></BasicTable>
          <Button variant="outline-success" onClick={goToAddTip}><FontAwesomeIcon icon={faPlus} /> Add</Button>
        </Container>
      </div >
    )
  }
}

export default Tips;