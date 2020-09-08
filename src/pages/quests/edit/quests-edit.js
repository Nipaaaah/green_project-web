import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { editQuest } from '../../../services/quests.service';
import { ResultModal } from '../../../components/ModalReturn'

const EditQuest = props => {
    const { register, handleSubmit, errors } = useForm();
    const [modalShow, setModalShow] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    /**
     * Edit tip and redirect if ok
     * @param {array} formData 
     */
    const onSubmit = async (formData) => {
        await editQuest(props.location.state.data.id, formData)
            .then(() => {
                props.history.push({
                    pathname: '/quests',
                    state: { msg: "Quest was successfully edited" }
                });
            }, (error) => {
                if (error.response.data.msg.name !== undefined) {
                    displayStatus(error.response.data.msg.name);
                }
                else {
                    displayStatus(error.response.data.msg);
                }
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
            <ResultModal
                msg={resultMessage}
                show={modalShow}
                animation={false}
                onHide={() => setModalShow(false)}
            />

            <Row>
                <Col>
                    <div>Modifier quête</div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-field">
                            <label>ID</label>
                            <input placeholder={props.location.state.data.id} type="text" name="id" defaultValue={props.location.state.data.id} ref={register({ required: true })} />
                            {errors.name && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>Nom</label>
                            <input placeholder={props.location.state.data.name} type="text" name="name" defaultValue={props.location.state.data.name} ref={register({ required: true })} />
                            {errors.name && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>Description</label>
                            <input placeholder={props.location.state.data.desc} type="text" name="desc" defaultValue={props.location.state.data.desc} ref={register({ required: true })} />
                            {errors.desc && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>XP donné</label>
                            <input placeholder={props.location.state.data.expAmount} type="text" name="expAmount" defaultValue={props.location.state.data.expAmount} ref={register({ required: true })} />
                            {errors.expAmount && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>Niveau minimum</label>
                            <input placeholder={props.location.state.data.minLevel} type="text" name="minLevel" defaultValue={props.location.state.data.minLevel} ref={register({ required: true })} />
                            {errors.minLevel && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>Temps de réalisation</label>
                            <input placeholder={props.location.state.data.timeForQuest} type="text" name="timeForQuest" defaultValue={props.location.state.data.timeForQuest} ref={register({ required: true })} />
                            {errors.timeForQuest && <span>Ce champ est requis</span>}
                        </div>

                        <div className="form-field">
                            <label>Date de fin</label>
                            <input placeholder={props.location.state.data.endDate} type="text" name="endDate" defaultValue={props.location.state.data.endDate} ref={register({ required: true })} />
                            {errors.endDate && <span>Ce champ est requis</span>}
                        </div>
                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditQuest;