import React, { useState } from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { postEmail } from '../../../services/email'


export default () => {
  const [responseSubmit, setresponseSubmit] = useState("")

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (attr) => {
    setForm({
      ...form,
      [attr.target.name]: [attr.target.value]
    })
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    const result = await postEmail(form)
        setresponseSubmit(result.data)
  }




  return (
    <React.Fragment>

      <Contact>
        <TitlePage title="Contato" sub="Entre em contato conosco" />

        <Container>
          <Row>
            <Info md={3} ></Info>
            <FormBox md={9} >
              <br />
              <Form className="user">

                <Form.Group >
                  <Form.Control onChange={handleChange} type="text" name="name" value={form.name || ""} placeholder="Seu nome" />
                </Form.Group>

                <Form.Group>
                  <Form.Control onChange={handleChange} type="email" name="email" value={form.email || ""} placeholder="Seu E-mail" />
                </Form.Group>

                <Form.Group >
                  <Form.Control onChange={handleChange} rows={5} type="text" as="textarea" name="message" value={form.message || ""} placeholder="Sua mensagem" />
                </Form.Group>

                <Button onClick={submitEmail}variant="primary" type="submit">
                  Enviar
                      </Button>
                      <ResponseForm type={responseSubmit.type}>{responseSubmit.message}</ResponseForm>
              </Form>
            </FormBox>
          </Row>
        </Container>
      </Contact>

    </React.Fragment>
  )
}

const Contact = styled.div`
height: 500px;
display: block;
`

const Info = styled(Col)`
width: 100%;
background: #eee;
height: 400px;
`
const FormBox = styled(Col)`
width: 100%;
background: white;
height: 400px;
`

const ResponseForm = styled.div`
   color:  ${props => props.type === 'success' ? 'green' : 'red'};
`









