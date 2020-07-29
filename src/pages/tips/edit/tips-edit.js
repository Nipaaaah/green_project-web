import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { EditTip } from '../../../services/tips.service';

function EditTipPage(props) {
  const { register, handleSubmit, errors } = useForm();
  const [editError, setError] = useState('');

  const onSubmit = async (formData) => {
    await EditTip(props.location.state.data.id, formData)
      .then(() => {
        // props.history.push('/tips')
        console.log('OK')
      }, (error) => {
        console.log(error.response.data);
        setError(error.response.data.message)
      });
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
        <input placeholder={props.location.state.data.name} type="text" name="name" defaultValue={props.location.state.data.name} ref={register({ required: true })}/>
        </label>
        <label>
          Description :
        <input placeholder={props.location.state.data.desc} type="text" name="desc" defaultValue={props.location.state.data.desc} ref={register}/>
        </label>
        <input type="submit" value="Edit" />
      </Form>
      <label>{editError}</label>
    </Container>
  )
}

export default EditTipPage;