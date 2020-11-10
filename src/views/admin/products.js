import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

import List from '../../components/products/list'
import Form from '../../components/products/form'
import Modal from '../../components/modal/index'

const Products = () => {

    const [isPatch, setPatch] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const expEdit = (prd) => {
        setShow(true)
        setPatch(prd)
    }
    
    //render
    return(
        <>
            <NewButton variant="primary" onClick={handleShow}>
                Novo produto
            </NewButton>
            <hr />

            {show &&
                <Modal show={show} handleClose={handleClose}>
                    <Form create={handleClose} edit={isPatch} />
                </Modal>
            }
            <List edit={expEdit}/>
        </>

    )}

    export default Products

    const NewButton = styled(Button)`
background-color: #A4C972;
border: none;
:hover{
    color: #eee !important;
    background-color: #DF5D2E !important;
}`
