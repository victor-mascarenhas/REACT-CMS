import React, { useState, useEffect } from 'react'
import { delProducts, getProducts } from '../../services/admin'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import {AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { FiTrash2, FiEdit} from 'react-icons/fi'


const ProductsList = (props) => {
    const [products, setProducts] = useState([])
    const [isUpdate, setUpdate] = useState(false)

    //Get List
    useEffect(() => {
        setUpdate(false)
        let get = async () => {
            const p = await getProducts()
            setProducts(p.data)
        }
        if (!isUpdate) {
            get();
        }

        return () => get = () => { };
    }, [isUpdate])

    //Delete Item
    const deleteProduct = async (prd) => {

        const message = (type, message) => Swal.fire({
            title: message || 'Produto excluído com sucesso!',
            text: "",
            icon: type || 'success'
        })

        Swal.fire({
            title: `Deseja excluir o produto "${prd.title}"?`,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, excluir!'
        }).then((result) => {

            if (result.isConfirmed) {

                delProducts(prd._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', 'Produto excluído com sucesso!')
                    })
                    .catch(() => message('danger', 'Erro ao tentar excluir produto.'))

            }
        })
    }

    const sortProductsByName = products.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });


    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <THItem>Status</THItem>
                        <THItem>Highlight</THItem>
                        <THItem>Nome</THItem>
                        <THItem>Categoria</THItem>
                        <THItem>Preço</THItem>
                        <THItem>Desconto</THItem>
                        <THItem>% Desc</THItem>
                        <THItem>Ações</THItem>
                    </tr>
                </thead>
                <tbody>
                    {sortProductsByName.map((prd, i) => (
                        <NewTr key={i}>
                            <BodyItem>{prd.status ? <AiOutlineCheckCircle/> : <AiOutlineCloseCircle/> }</BodyItem>
                            <BodyItem>{prd.highlight ? <AiOutlineCheckCircle/> : <AiOutlineCloseCircle/> }</BodyItem>
                            <BodyItem>{prd.title}</BodyItem>
                            <BodyItem>{prd.category?.name}</BodyItem>
                            <BodyItem>{prd.price}</BodyItem>
                            <BodyItem>{prd.discount_price}</BodyItem>
                            <BodyItem>{prd.discount_price_percent}</BodyItem>
                            <BodyItem>  <NewButton variant="info"  onClick={() => props.edit(prd)}> <FiEdit/> </NewButton>   <Button variant="danger" onClick={() => deleteProduct(prd)}> <FiTrash2/> </Button></BodyItem>
                        </NewTr>
                    ))}

                </tbody>
            </Table>
        </>
    )


}
export default ProductsList

const THItem = styled.th`
background: #666;
color: #eee;
:nth-child(7){
    text-align: center;
}
`
const NewTr = styled.tr`
background-color: #eee !important;
:hover{
    color: #eee !important;
    background-color: #6BB38E !important;
}
`

const BodyItem = styled.td`
    :nth-child(1){  width: 5%; text-align: center; font-size: 20px; }
    :nth-child(2){  width: 5%; text-align: center; font-size: 20px; }
    :nth-child(3){  width: 30%; }
    :nth-child(4){  width: 15%; }
    :nth-child(5){  width: 10%; }
    :nth-child(6){  width: 10%; }
    :nth-child(7){  width: 10%; }
    :nth-child(8){  width: 15%; text-align: center; font-size: 20px; }
`
const NewButton = styled(Button)`
background-color: #A4C972;
border: none;
:hover{
    color: #eee !important;
    background-color: #DF5D2E !important;
}
`

