import React, { useContext, useState, useEffect, StyleSheet } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllQuests, getOneQuest, deleteQuest, addQuest, editQuest } from '../../services/quests.service';
import { getStatusButtonText, getStatusColor } from '../../services/design.service';
import { BasicTable } from '../../components/Table';
import { ResultModal } from '../../components/ModalReturn';
import '../tips/tips.css';


// async function allQuests() {
//   console.log('yo');
//   const response = await getAllQuests()
//   const quests = response.data.quests;
//   console.log(quests);
// };

// const Tips = () => {

//   const [tipList, setTipList] = useState([])

//   const getAllTips = async () => {
//     const res = await GetTips();
//     setTipList(res.data.tips);
//   }

//   useEffect(() => {
//     setTimeout(
//       () => {
//         getAllTips();
//       }
//       , 1000)
//   },
//     [],
//   )


const Quests = props => {

  //const data = [{ 'name': 'First', 'desc': 'blabla', 'expAmount': 20, 'minLevel': 2, 'timeForQuest': 'r', 'endDate': '2020' }, { 'name': 'Two', 'desc': 'blabla', 'expAmount': 20, 'minLevel': 2, 'timeForQuest': 'r', 'endDate': '2020' }, { 'name': 'Three', 'desc': 'blabla', 'expAmount': 20, 'minLevel': 2, 'timeForQuest': 'r', 'endDate': '2020' }]

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

 // /!\ Le useEffect de Tips, à voir si on l'adapte pour Quest ou pas ?
  // useEffect(() => {
  //   setTimeout(
  //     () => {
  //       getAllTips();
  //       if (props.location.state !== undefined) {
  //         //Everytime there's an api call, display status
  //         if (props.location.state.msg !== undefined) {
  //           displayStatus(props.location.state.msg);
  //           window.history.replaceState(null, null, "/"); //Empty status after display
  //         }
  //       }
  //     }
  //     , 1000)
  // }, [])
  

  // allQuests();

  const { token } = useContext(AuthContext);

  const goToAddQuest = () => {
    props.history.push('quests/add');
  }



  // CODE DE VICTOR

  /**
   * Update tips status
   * @param {array} row 
   */
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

  // CODE DE VICTOR - FIN


  // CODE DU PREMIER DATATABLE
  // return (
  //   <div>
  //     <Container fluid>
  //       <Row>
  //         <Col>Liste des quêtes</Col>
  //         <Col>
  //           <Button onClick={goToAddQuest}>Ajouter quête</Button>
  //         </Col>
  //       </Row>

  //       <Row>
  //         <Col>
  //           <table class="table table-condensed">
  //             <thead>
  //               <tr>
  //                 <th>Nom</th>
  //                 <th>Description</th>
  //                 <th>Date de création</th>
  //                 <th>Deadline</th>
  //                 <th>Durée</th>
  //                 <th>Level min</th>
  //                 <th>XP</th>
  //                 <th>Statut</th>
  //                 <th>Editer</th>
  //                 <th>Supprimer</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {questList.map((d, index) => (
  //                 <tr key={index}>
  //                   <td>{d.name}</td>
  //                   <td>{d.desc}</td>
  //                   <td>{d.endDate}</td>
  //                   <td>{d.endDate}</td>
  //                   <td>{d.timeForQuest}</td>
  //                   <td>{d.minLevel}</td>
  //                   <td>{d.expAmount}</td>
  //                   <td><Button>Activer</Button></td>
  //                   <td><FontAwesomeIcon icon={faEdit} /></td>
  //                   <td><FontAwesomeIcon icon={faTrash} /></td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // )



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
      cell: (row) => <Button variant="outline-warning"><FontAwesomeIcon onClick={(e) => goToEditQuest(row)} icon={faEdit} /></Button>,
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