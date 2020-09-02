import React, { useState, useEffect } from 'react';
import { addQuest, editQuest, getOneQuest } from '../../../services/quests.service'
import { useForm } from "react-hook-form";
import { Container, Col, Row } from 'react-bootstrap';
import './quests-add.css'

const AddQuest = props => {
  const { register, handleSubmit, errors } = useForm();
  const [formErrors, setFormErrors] = useState([]);
  const [quest, setQuest] = useState();

  useEffect(() => {
    props.id && getQuest(props.id);
  }, []);

  const getQuest = async (id) => {
    const quest = await getOneQuest(id);
    setQuest(quest);
  }

  const onSubmit = async (formData) => {
    try {
      const res = props.id ?
        await editQuest(
          formData.name,
          formData.desc,
          formData.expAmount,
          formData.minLevel,
          formData.timeForQuest,
          formData.endDate
        ) :
        await addQuest(
          formData.name,
          formData.desc,
          formData.expAmount,
          formData.minLevel,
          formData.timeForQuest,
          formData.endDate
        );

      //Gestion erreurs et redirection
      if (res.data.status === 400) {
        setFormErrors([<p key="error_field">{Object.entries(res.data.msg)[0][1][0]}</p>])
      } else {
        props.history.push('/quests')
      }
    } catch (error) {
      if (error.response.status === 401) {
        setFormErrors([<p key='error_login'>Vous n'êtes pas connecté - <a href="/login">Connectez-vous</a></p>])
      } else if (error.response.status === 500) {
        setFormErrors([<p key='error_server'>Erreur côté serveur, nous allons régler ça !</p>])
        console.log('Erreur serveur')
      }
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>{props.id ? 'Modifier quête' : 'Ajouter quête'}</div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label>Nom</label>
              <input name="name" maxLength="45" placeholder="Ex: Test Quest" defaultValue={quest && quest.name} ref={register({ required: true })} />
              {errors.name && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea name="desc" maxLength="120" placeholder="Ex: Test Quest desc" defaultValue={quest && quest.desc} ref={register({ required: true })} />
              {errors.desc && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>XP donné</label>
              <input name="expAmount" placeholder="Ex: 10" defaultValue={quest && quest.expAmount} ref={register({ required: true })} />
              {errors.expAmount && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Niveau minimum</label>
              <input name="minLevel" placeholder="Ex: 1" defaultValue={quest && quest.minLevel} ref={register({ required: true })} />
              {errors.minLevel && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Temps de réalisation</label>
              <input name="timeForQuest" placeholder="Ex: 100000" defaultValue={quest && quest.timeForQuest} ref={register({ required: true })} />
              {errors.timeForQuest && <span>Ce champ est requis</span>}
            </div>

            <div className="form-field">
              <label>Date de fin</label>
              <input name="endDate" placeholder="Ex: 2030-07-25" defaultValue={quest && quest.endDate} ref={register({ required: true })} />
              {errors.endDate && <span>Ce champ est requis</span>}
            </div>

            <input type="submit" />
          </form>

          {formErrors && formErrors}
        </Col>
      </Row>
    </Container>
  )
}

export default AddQuest;