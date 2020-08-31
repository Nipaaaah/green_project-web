import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { EditTip } from '../../../services/tips.service';
import { ResultModal } from '../../../components/ModalReturn'

function EditTipPage(props) {
  const { register, handleSubmit } = useForm();
  const [modalShow, setModalShow] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  /**
   * Edit tip and redirect if ok
   * @param {array} formData 
   */
  const onSubmit = async (formData) => {
    await EditTip(props.location.state.data.id, formData)
      .then(() => {
        props.history.push({
          pathname: '/tips',
          state: { msg: "Tip was successfully edited" }
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
        <input placeholder={props.location.state.data.name} type="text" name="name" defaultValue={props.location.state.data.name} ref={register({ required: true })} />
        </label>
        <label>
          Description :
        <input placeholder={props.location.state.data.desc} type="text" name="desc" defaultValue={props.location.state.data.desc} ref={register} />
        </label>
        <input type="submit" value="Edit" />
      </Form>
    </Container>
  )
}

export default EditTipPage;