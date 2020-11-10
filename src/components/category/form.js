import React, { useState } from 'react'
import { postCategories, patchCategories } from '../../services/admin'
import { Form, Spinner, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'


//Create Item
const CategoryForm = (props) => {

    const isEdit = Object.keys(props.edit).length > 0
    const typeReq = (data) => isEdit ? patchCategories(props.edit._id, data) : postCategories(data)


    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        ...props.edit
    })


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
                await typeReq(form)

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Categoria ${isEdit ? 'atualizada' : 'criada' } com sucesso!`,
                    showConfirmButton: false,
                    timer: 1500
                })

                setForm({})
                setLoading(false)                
                setTimeout(() => props.create(), 1500)

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


    return (
        <>
            {isEdit ? <h1> Editar categoria</h1> : <h1> Adicionar nova categoria</h1>}

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
}

export default CategoryForm