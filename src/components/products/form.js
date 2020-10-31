import React, { useState, useEffect } from 'react'
import { postProducts, getCategories } from '../../services/admin'
import { Form, Spinner, Button, ProgressBar, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2'


//Create Item
const ProductsForm = (props) => {

    const [categories, setCategories] = useState([])

    //Get Categories List
    useEffect(() => {
        let get = async () => {
            const c = await getCategories()
            setCategories(c.data)
        }
        get();

        return () => get = () => { };
    }, [])


    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [form, setForm] = useState({
        highlight: false,
        status: true
    })


    const handleChange = (attr) => {
        const { name, value, checked } = attr.target
        const isCheck = name === 'status' || name === 'highlight'
        if (name ==='photo'){
            setForm({
                ...form,
                'photo': attr.target.files[0]
            })
        }else {
            setForm({
                ...form,
                [name]: isCheck ? checked : value
            })
        }
        
    }

    const isSubmitValid = () => form.title && form.description && form.complete_description && form.category && form.price && form.discount_price && form.discount_price_percent

    const submitPrd = async () => {
        let data = new FormData()

        if (isSubmitValid()) {
            setLoading(true)

            Object.keys(form)
                .forEach(key => data.append(key, form[key]))

            const config = {
                onUploadProgress: function (progressEvent) {
                    let successPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total)
                    setProgress(successPercent)
                },
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }

            postProducts(data, config)
                .then((res) => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Produto criado com sucesso!`,
                    showConfirmButton: false,
                    timer: 1500
                }))
                .catch((err) => {
                    setLoading(false)
                    console.log('erro no envio do formulário', err)

                    Swal.fire({
                        position: '',
                        icon: 'error',
                        title: 'Ocorreu um erro ao enviar o formulário',
                        showConfirmButton: false,
                        timer: 3500
                    })
                })


            setForm({})
            setLoading(false)
            setTimeout(() => props.create(), 1500)


        }
    }



return (
    <>
        <h1> Adicionar novo produto</h1>

        <div>
            <Form.Group >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="title" value={form.title || ""} placeholder="" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Descrição</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="description" value={form.description || ""} placeholder="" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Descrição completa</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="complete_description" value={form.complete_description || ""} placeholder="" />
            </Form.Group>

            <Form>
                <Form.Group >
                    <Form.Label>Selecionar Categoria</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange} name="category" value={form.category || ""}>
                        <option disabled value=""> Selecione a categoria</option>
                        {categories.map((ctg, i) => (
                            <option key={i} value={ctg._id}>{ctg.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            <hr />
            <h5> Valores </h5>
            <Form.Group >
                <Form.Label>Preço</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="price" value={form.price || ""} placeholder="" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Preço com desconto</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="discount_price" value={form.discount_price || ""} placeholder="" />
            </Form.Group>

            <Form.Group >
                <Form.Label>% de desconto</Form.Label>
                <Form.Control type="text" onChange={handleChange} name="discount_price_percent" value={form.discount_price_percent || ""} placeholder="" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Imagem do produto</Form.Label>
                <br/>
                <input
                type="file"
                    onChange={handleChange}
                    name="photo"
                />
            </Form.Group>

            <Form.Group>
                <ButtonGroup toggle className="mr-3">
                    <ToggleButton
                        type="checkbox"
                        variant={Boolean(form.highlight) ? "success" : "danger"}
                        name="highlight"
                        onChange={handleChange}
                        checked={Boolean(form.highlight)}>
                        {Boolean(form.highlight) ? <FaCheck /> : <FaTimes />}  Destaque
                        </ToggleButton>
                </ButtonGroup>
                <ButtonGroup toggle className="mr-3">
                    <ToggleButton
                        type="checkbox"
                        variant={Boolean(form.status) ? "success" : "danger"}
                        name="status"
                        onChange={handleChange}
                        checked={Boolean(form.status)}>
                        {Boolean(form.status) ? <FaCheck /> : <FaTimes />}  Status
                        </ToggleButton>
                </ButtonGroup>

            </Form.Group>

            <Button onClick={submitPrd} disabled={!isSubmitValid()} variant="primary" type="submit">
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
            <br />
            <br />
            {progress > 0 ? (<ProgressBar animated now={progress} />) : ""}


        </div>
        <br />

    </>
)}


export default ProductsForm