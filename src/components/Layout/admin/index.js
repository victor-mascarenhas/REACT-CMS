import React from 'react'
import '../../../assets/css/sb-admin-2.min.css'
import Sidebar from './sidebar'
import HeaderAdmin from './header'
import styled from 'styled-components'

const LayoutAdmin = ({children, Menu}) => {
    return(
        <>
         <div id="wrapper">
        <Sidebar Menu={Menu}/>
        <Background id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <HeaderAdmin />
            <div className="container-fluid">
                {children}
              </div>
          </div>
          <NewFooter className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>© 2020 All Rights Reserved | Managed By Victor Mascarenhas</span>
              </div>
            </div>
          </NewFooter>
        </Background>
      </div>
        </>
    )
}


export default LayoutAdmin

const Background = styled.div`
color: #FFB43E;
background-color: #541E35 !important;
`
const NewFooter = styled.footer`
color: #FFB43E;
background-color: #541E35 !important;
`

