import React from 'react'
import '../../../assets/css/sb-admin-2.min.css'
import Sidebar from './sidebar'
import HeaderAdmin from './header'

const LayoutAdmin = ({children, Menu}) => {
    return(
        <>
         <div id="wrapper">
        <Sidebar Menu={Menu}/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <HeaderAdmin />
            <div className="container-fluid">
                {children}
              </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>© 2020 All Rights Reserved | Managed By Victor Mascarenhas</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
        </>
    )
}


export default LayoutAdmin