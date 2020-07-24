import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAllQuests, getOneQuest, deleteQuest, addQuest, editQuest } from '../../services/quests.service'


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

  const allQuests = async () => {
    const response = await getAllQuests();
    setQuestList(response.data.quests);
  }

  useEffect(() => {
    allQuests();
  }
  );
  

  // allQuests();

  const { token } = useContext(AuthContext);

  const goToAddQuest = () => {
    props.history.push('quests/add');
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>Liste des quêtes</Col>
          <Col>
            <Button onClick={goToAddQuest}>Ajouter quête</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <table class="table table-condensed">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Date de création</th>
                  <th>Deadline</th>
                  <th>Durée</th>
                  <th>Level min</th>
                  <th>XP</th>
                  <th>Statut</th>
                  <th>Editer</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                {questList.map((d, index) => (
                  <tr key={index}>
                    <td>{d.name}</td>
                    <td>{d.desc}</td>
                    <td>{d.endDate}</td>
                    <td>{d.endDate}</td>
                    <td>{d.timeForQuest}</td>
                    <td>{d.minLevel}</td>
                    <td>{d.expAmount}</td>
                    <td><Button>Activer</Button></td>
                    <td><FontAwesomeIcon icon={faEdit} /></td>
                    <td><FontAwesomeIcon icon={faTrash} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Quests;