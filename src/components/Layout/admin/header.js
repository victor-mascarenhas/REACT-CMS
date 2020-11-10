import React from 'react'
import chidoLogo from '../../../assets/images/mexican-man_preview_rev_2.png'
import { getUser, removeToken } from '../../../config/auth'
import {Dropdown} from 'react-bootstrap'
import styled from 'styled-components'

const HeaderAdmin = () => {

const logout = () => {
  removeToken()
}

  return (
    <>
      <NewHeader className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <ul className="navbar-nav ml-auto">
          <Dropdown>
            <User variant="info" id="dropdown-basic">
              
              <img src={chidoLogo} height="50" width="50" alt="logo"/>
              {getUser().name}
              
  </User>

            <Dropdown.Menu>
              <Dropdown.Item onClick={logout} href="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </NewHeader>
    </>
  )
}

export default HeaderAdmin

const NewHeader = styled.nav`
color: #FFB43E;
background-color: #541E35 !important;
`
const User = styled(Dropdown.Toggle)`
background-color: #A4C972;
border: none;
:hover{
    color: #eee !important;
    background-color: #DF5D2E !important;
}
`
