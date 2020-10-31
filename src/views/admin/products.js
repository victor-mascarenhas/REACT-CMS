import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import List from '../../components/products/list'
import Form from '../../components/products/form'

const Products = () => {

    const [isForm, setForm] = useState(false)
    const [patch, setPatch] = useState({})

    const changePage = () => setForm(!isForm)
    const expEdit = (ctg) => {
        setForm(true)
        setPatch(ctg)
    }
    
    return(
        <>
            <Button size="sm" onClick={() => setForm(!isForm)}>{isForm ? "Lista" : "Novo"}</Button>
            <hr />
            {isForm ? <Form create={changePage} edit={patch} /> : <List edit={expEdit}/>}
        </>


    )}

    export default Products
