import React, { useState, useEffect } from 'react'
import { postProducts, getCategories, patchProducts } from '../../services/admin'
import { Form, Spinner, Button, ProgressBar, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import currencyConfig from '../../config/currency'
import IntlCurrencyInput from 'react-intl-currency-input'


//Create Item
const ProductsForm = (props) => {

    const isEdit = Object.keys(props.edit).length > 0
    const typeReq = (data) => isEdit ? patchProducts(props.edit._id, data) : postProducts(data)
    
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

    const [updatePhoto, setUpdatePhoto] = useState(false)
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [form, setForm] = useState({
        ...props.edit,
        category: props.edit?.category?._id || undefined
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

    const removePhoto = () => {
        setUpdatePhoto(true)
        setForm({
            ...form,
            photo: ""
        })
    }

    const handlePrice = (event, value, maskedValue) => {
        event.preventDefault();
        setForm({
            ...form,
            "price": value
        })
    }

    const handlePriceDiscount = (event, value, maskedValue) => {
        event.preventDefault();
        const percent = value / form.price * 100;
        const percentAllow = percent >= 100 ? 100 : percent
        setForm({
            ...form,
            "discount_price": value,            
            "discount_price_percent": Math.round(percentAllow)
        })
    }

    const handlePercentDiscount = (attr) => {
        const desc = attr.target.value;
        const discountValue = Math.round(form.price * (desc / 100))
        setForm({
            ...form,
            "discount_price": form.price - discountValue,
            "discount_price_percent": desc >= 0 && desc <= 100 ? desc : 0
        })
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

            typeReq(data, config)
                .then((res) => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Produto ${isEdit ? "editado" : "criado" } com sucesso!`,
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
            setTimeout(() => props.create(), 2500)


        }
    }



return (
    <>
        {isEdit ? <h1> Editar produto</h1> : <h1> Adicionar novo produto</h1>}

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
                <IntlCurrencyInput className="form-control" currency="BRL" config={currencyConfig} name="price" value={form.price || ""} placeholder=""
            onChange={handlePrice} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Preço com desconto</Form.Label>               
                <IntlCurrencyInput disabled={!form.price} className="form-control" currency="BRL" config={currencyConfig} name="discount_price" value={form.discount_price || ""} placeholder=""
            onChange={handlePriceDiscount} />
            </Form.Group>

            <Form.Group >
                <Form.Label>% de desconto</Form.Label>
                <Form.Control type="number" disabled={!form.price} onChange={handlePercentDiscount} name="discount_price_percent" max="100" min="0" value={form.discount_price_percent || ""} placeholder="" />
                </Form.Group>

            <Form.Group>
                <Form.Label>Imagem do produto</Form.Label>
                {isEdit && !updatePhoto? (<Thumb>
                <img src={form.photo} alt="thumbnail" />
                <span onClick={removePhoto}>Remover</span>
                </Thumb>) : (<input
                type="file"
                    onChange={handleChange}
                    name="photo"
                />)} 
                <br/>
                
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

const Thumb = styled.div`
display: flex; 
flex-direction: column;
img{
max-height: 200px;
max-width: 200px;
}
span{
    color:red;
    &:hover{
        cursor:pointer;
    }
    
}
`