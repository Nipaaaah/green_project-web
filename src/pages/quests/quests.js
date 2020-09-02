import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllQuests, deleteQuest, addQuest, editQuest } from '../../services/quests.service';
import { BasicTable } from '../../components/Table';
import { ResultModal } from '../../components/ModalReturn';
import '../tips/tips.css';

const Quests = props => {

  const [questList, setQuestList] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const allQuests = async () => {
    const response = await getAllQuests();
    setQuestList(response.data.quests);
  }

  useEffect(() => {
    allQuests();
  }
  );

  const goToAddQuest = () => {
    props.history.push('quests/add');
  }

  /**
   * Update quest status
   * @param {array} row 
   */
  const changeStatus = async (row) => {
    let status;
    if (row.questStatus === 1) {
      status = 0;
    }
    else {
      status = 1;
    }
    let data = {
      id: row.id,
      name: row.name,
      desc: row.desc,
      questStatus: status
    }
    await editQuest(row.id, data)
      .then((res) => {
        let newQuestList = questList.map((item) => {
          if (item.id === row.id) {
            return data;
          }
          else
            return item;
        })
        setQuestList(newQuestList);
        displayStatus(res.data.msg);
      }, (error) => {
        displayStatus(error.response.data.message)
      });
  }

    /**
   * Delete a quest
   * @param {int} id 
   */
  const del = async (id) => {
    await deleteQuest(id)
      .then((res) => {
        let list = questList.filter(list => list.id !== id);
        setQuestList(list);
        displayStatus(res.data.msg);
      }, (error) => {
        displayStatus(error);
      });
  }
  
  /**
   * Display api return message to modal
   * @param {string} msg 
   */
  const displayStatus = (msg) => {
    setResultMessage(msg);
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
    }, 3000);
  }

    /**
   * Column definition for datatable
   */
  const columns = [
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
      name: 'End Date',
      selector: 'endDate',
      sortable: true,
    },
    {
      name: 'Time for quest',
      selector: 'timeForQuest',
      sortable: true,
    },
    {
      name: 'Minimum Level',
      selector: 'minLevel',
      sortable: true,
    },
    {
      name: 'XP',
      selector: 'expAmount',
      sortable: true,
    },
    {
      name: 'Edit',
      cell: (row) => <Button variant="outline-warning"><FontAwesomeIcon onClick={(e) => goToAddQuest(row)} icon={faEdit} /></Button>,
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
  ];

  if (questList.length === 0) {
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
          <BasicTable title="Quest List" columns={columns} array={questList}></BasicTable>
          <Button variant="outline-success" onClick={goToAddQuest}><FontAwesomeIcon icon={faPlus} /> Add</Button>
        </Container>
      </div >
    )
  }
}

export default Quests;