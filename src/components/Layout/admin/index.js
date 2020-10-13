import React from 'react'
import '../../../assets/css/sb-admin-2.min.css'
import Sidebar from './sidebar'
import HeaderAdmin from './header'

const LayoutAdmin = ({children}) => {
    return(
        <>
         <div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <HeaderAdmin />
            {/* Begin Page Content */}
            <div className="container-fluid">
                {children}
              </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
        </>
    )
}


export default LayoutAdmin