import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

import List from '../../components/category/list'
import Form from '../../components/category/form'
import Modal from '../../components/modal/index'

const Category = () => {

    const [isPatch, setPatch] = useState({})
    const [show, setShow] = useState(false);    

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const expEdit = (ctg) => {
        setShow(true)
        setPatch(ctg)
    } 

    //Render
    return (
        <>
            <NewButton variant="primary" onClick={handleShow}>
                Nova categoria
            </NewButton>
            <hr />

            {show &&
                <Modal show={show} handleClose={handleClose}>
                    <Form create={handleClose} edit={isPatch} />
                </Modal>
            }

            <List edit={expEdit}/>
        </>


    )
}

export default Category

const NewButton = styled(Button)`
background-color: #A4C972;
border: none;
:hover{
    color: #eee !important;
    background-color: #DF5D2E !important;
}
`





