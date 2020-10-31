import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import List from '../../components/category/list'
import Form from '../../components/category/form'


const Category = () => {

    const [isForm, setForm] = useState(false)
    const [patch, setPatch] = useState({})

    const changePage = () => setForm(!isForm)
    const expEdit = (ctg) => {
        setForm(true)
        setPatch(ctg)
    }


    //Render
    return (
        <>
            <Button size="sm" onClick={() => setForm(!isForm)}>{isForm ? "Lista" : "Novo"}</Button>
            <hr />
            {isForm ? <Form create={changePage} edit={patch} /> : <List edit={expEdit}/>}
        </>


    )
}

export default Category




