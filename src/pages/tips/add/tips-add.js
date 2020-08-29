import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { AddTip } from '../../../services/tips.service';
import { ResultModal } from '../../../components/ModalReturn'

function AddTipPage(props) {
  const { register, handleSubmit, errors } = useForm();
  const [modalShow, setModalShow] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  /**
   * Add tip and redirect if ok
   * @param {array} formData 
   */
  const onSubmit = async (formData) => {
    await AddTip(formData)
      .then(() => {
        props.history.push({
          pathname: '/tips',
          state: { msg: "Tip was successfully added" }
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
      <ResultModal
        msg={resultMessage}
        show={modalShow}
        animation={false}
        onHide={() => setModalShow(false)}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
        <input type="text" name="name" defaultValue="testName" ref={register({ required: true })} />
        </label>
        {errors.name && <span>Ce champ est requis</span>}
        <label>
          Description :
        <input type="text" name="desc" defaultValue="testDesc" ref={register({ required: true })} />
        </label>
        {errors.desc && <span>Ce champ est requis</span>}
        <input type="submit" value="Add" />
      </Form>
    </Container>
  )
}

export default AddTipPage;