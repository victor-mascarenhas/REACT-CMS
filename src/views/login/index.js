import React, { useState } from 'react'
import styled from 'styled-components'
import imgBg from '../../assets/images/bg-tacos.jpg'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button, Form, Spinner } from 'react-bootstrap'
import { auth } from '../../services/auth'
import http from '../../config/http'
import { saveToken } from '../../config/auth'
import history from '../../config/history'

export default () => {

  const [form, setForm] = useState({
    email: "user@email.com",
    password: "user123"
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (attr) => {
    setForm({
      ...form,
      [attr.target.name]: [attr.target.value]
    })
  }

  const isSubmitValid = () => form.email && form.password

  const submitLogin = async (e) => {
    e.preventDefault()
    if(isSubmitValid()){      
    setLoading(true)

      try{
        const { data } = await auth(form)
        const { token } = data
        http.defaults.headers["x-auth-token"] = token;
        saveToken(data)
        history.push('/admin')

      }catch(err){
        setLoading(false)
        console.log('erro na autenticação', err)
      }
    }
  }

  return (

    <Login>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Bem-vindo ao Chido Tacos!</h1>
                    </div>
                    <Form className="user">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control className="form-control form-control-user" onChange={handleChange} type="email" name="email" value={form.email || ""} placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Control className="form-control form-control-user" onChange={handleChange} type="password" name="password" value={form.password || ""} placeholder="Password" />
                      </Form.Group>
                      <Button onClick={submitLogin} disabled={!isSubmitValid()} className={`btn ${isSubmitValid() ? "btn-primary" : "btn-secondary"} btn-user btn-block`} variant="primary" type="submit">


                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                             Carregando...
                          </>
                        ) : "Login"}
                      </Button>
                      <hr />
                    </Form>

                    <div className="text-center">
                      <Link className="medium" to="/"><FaHome /> Página inicial</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Login>

  )
}

const Login = styled.div.attrs({
  className: 'container',
})`
.bg-login-image{
    background-image: url(${imgBg})
}


`