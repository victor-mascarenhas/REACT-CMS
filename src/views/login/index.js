import React from 'react'
import styled from 'styled-components'
import imgBg from '../../assets/images/bg-tacos.jpg'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default () => {
    return (
        
        <Login>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Bem-vindo ao Chido Tacos!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                          Login
                        </a>
                        <hr />                        
                      </form>
                      
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