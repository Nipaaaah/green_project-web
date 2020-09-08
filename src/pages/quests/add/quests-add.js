import React, { useState } from 'react';
import { addQuest } from '../../../services/quests.service'
import { ResultModal } from '../../../components/ModalReturn'
import { useForm } from "react-hook-form";
import { Container, Col, Row } from 'react-bootstrap';
import './quests-add.css'

const AddQuest = props => {
  const { register, handleSubmit, errors } = useForm();
  const [modalShow, setModalShow] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  /**
     * Add tip and redirect if ok
     * @param {array} formData 
     */
  const onSubmit = async (formData) => {
    await addQuest(formData)
      .then(() => {
        props.history.push({
          pathname: '/quests',
          state: { msg: "Quest was successfully added" }
        });
      }, (error) => {
        displayStatus(error.response.data.msg.name)
      });
  };

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

  return (
    <Container fluid>
      <Row>
        <Col>
          <ResultModal
            msg={resultMessage}
            show={modalShow}
            animation={false}
            onHide={() => setModalShow(false)}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label>Nom</label>
              <input name="name" maxLength="45" placeholder="Ex: Test Quest" ref={register({ required: true })} />
              {errors.name && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea name="desc" maxLength="120" placeholder="Ex: Test Quest desc" ref={register({ required: true })} />
              {errors.desc && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>XP donné</label>
              <input name="expAmount" placeholder="Ex: 10" ref={register({ required: true })} />
              {errors.expAmount && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Niveau minimum</label>
              <input name="minLevel" placeholder="Ex: 1" ref={register({ required: true })} />
              {errors.minLevel && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Temps de réalisation</label>
              <input name="timeForQuest" placeholder="Ex: 100000" ref={register({ required: true })} />
              {errors.timeForQuest && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Date de fin</label>
              <input name="endDate" placeholder="Ex: 2030-07-25" ref={register({ required: true })} />
              {errors.endDate && <span>Ce champ est requis</span>}
            </div>

            <input type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddQuest;