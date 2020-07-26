import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Form, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { AddTip } from '../../../services/tips.service';

function AddTipPage(props) {
  const { register, handleSubmit, errors } = useForm();
  const [addError, setError] = useState('');

  const onSubmit = async (formData) => {
    await AddTip(formData)
      .then(() => {
        props.history.push('/tips')
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
      <label>{addError}</label>
    </Container>
  )
}

export default AddTipPage;