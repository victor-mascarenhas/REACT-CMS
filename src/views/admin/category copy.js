import React, { useEffect, useState } from 'react'
import { Table, Button, Form, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import { getCategories, delCategories, postCategories } from '../../services/admin'
import Swal from 'sweetalert2'


const Category = () => {
    const [categories, setCategories] = useState([])
    const [isUpdate, setUpdate] = useState(false)
    const [isCreate, setCreate] = useState(false)
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (attr) => {
        setForm({
            ...form,
            [attr.target.name]: attr.target.value
        })
    }



    const isSubmitValid = () => form.name && form.icon

    const submitCtg = async (e) => {
        e.preventDefault()
        if (isSubmitValid()) {
            setLoading(true)

            try {

                //service http post category
                await postCategories(form)

                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Categoria criada com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                })
                
                setForm({})
                setLoading(false)
                setUpdate(true)
                setTimeout(() => setCreate(false), 1500)

            } catch (err) {
                setLoading(false)
                console.log('erro no envio do formulário', err)

                Swal.fire({
                    position: '',
                    icon: 'error',
                    title: 'Ocorreu um erro ao enviar o formulário',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }
    }




    //Mount List
    const List = () => (
        <>
            <Button size="sm" onClick={() => setCreate(true)}>Adicionar</Button>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <TableH>Nome</TableH>
                        <TableH>Ações</TableH>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((ctg, i) => (
                        <tr key={i}>
                            <td>{ctg.name}</td>
                            <td>Editar | <Button variant="danger" size="sm" onClick={() => deleteCategory(ctg)}> Excluir </Button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )

    //Create Item
    const Create = () => (
        <>
            <Button size="sm" onClick={() => setCreate(false)}>Lista</Button>
            <hr />
            <h1> Adicionar nova categoria</h1>

            <Form>
                <Form.Group controlId="formCategoryName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="name" value={form.name || ""} placeholder="" />
                </Form.Group>

                <Form.Group controlId="formCategoryIcon">
                    <Form.Label>Icone URL</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="icon" value={form.icon || ""} placeholder="" />
                </Form.Group>

                <Button onClick={submitCtg} disabled={!isSubmitValid()} variant="primary" type="submit">
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                             Enviando...
                          </>
                    ) : "Enviar!"}
                </Button>
            </Form>

        </>
    )

    //Get List
    useEffect(() => {
        setUpdate(false)
        let get = async () => {
            const c = await getCategories()
            setCategories(c.data)
        }
        if (!isUpdate) {
            get();
        }

        return () => get = () => { };
    }, [isUpdate])

    //Delete Item
    const deleteCategory = async (ctg) => {

        const message = (type, message) => Swal.fire({
            title: message || 'Categoria excluída com sucesso!',
            text: "",
            icon: type || 'success'
        })

        Swal.fire({
            title: `Deseja excluir a categoria "${ctg.name}"?`,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, excluir!'
        }).then((result) => {

            if (result.isConfirmed) {

                delCategories(ctg._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', 'Categoria excluída com sucesso!')
                    })
                    .catch(() => message('danger', 'Erro ao tentar excluir categoria.'))

            }
        })
    }

    //Render
    return (
        <Categories>
            {isCreate ? Create() : List()}
        </Categories>


    )
}

export default Category


const Categories = styled.div`
`

const TableH = styled.th`
background: #666;
color: #eee;


:nth-child(1){
    width: 80%
}
`
