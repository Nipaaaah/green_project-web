import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { EditTip } from '../../../services/tips.service';

function EditTipPage(props) {
  const { register, handleSubmit, errors } = useForm();
  const [editError, setError] = useState('');
  console.log(props.row)

  const onSubmit = async (formData) => {
    await EditTip(formData)
      .then(() => {
        // props.history.push('/tips')
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
        <input placeholder="" type="text" name="name" defaultValue="testName" />
        </label>
        <label>
          Description :
        <input placeholder="" type="text" name="desc" defaultValue="testDesc" />
        </label>
        <input type="submit" value="Edit" />
      </Form>
      <label>{editError}</label>
    </Container>
  )
}

export default EditTipPage;