import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Quests = props => {
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
                <tr>
                  <td>Quête 1</td>
                  <td>La warrior</td>
                  <td>Today</td>
                  <td>Tomorrow</td>
                  <td>1 jour</td>
                  <td>1</td>
                  <td>20</td>
                  <td><Button>Activer</Button></td>
                  <td><FontAwesomeIcon icon={faEdit} /></td>
                  <td><FontAwesomeIcon icon={faTrash} /></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Quests;