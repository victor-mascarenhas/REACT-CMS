import React, { useState, useEffect } from 'react'
import { delCategories, getCategories } from '../../services/admin'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { FiTrash2, FiEdit} from 'react-icons/fi'


const CategoryList = (props) => {
    const [categories, setCategories] = useState([])
    const [isUpdate, setUpdate] = useState(false)

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

    const sortCategoriesByName = categories.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });


    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <TableH>Nome</TableH>
                        <TableH>Ações</TableH>
                    </tr>
                </thead>
                <tbody>
                    {sortCategoriesByName.map((ctg, i) => (
                        <tr key={i}>
                            <BodyItem>{ctg.name}</BodyItem>
                            <BodyItem> <Button variant="info" onClick={() => props.edit(ctg)}> <FiEdit/> </Button> | <Button variant="danger" onClick={() => deleteCategory(ctg)}> <FiTrash2/> </Button></BodyItem>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )


}
export default CategoryList

const TableH = styled.th`
background: #666;
color: #eee;


:nth-child(1){
    width: 80%
}
`

const BodyItem = styled.td`
:nth-child(2){
    text-align: center; font-size: 20px;
}
`