import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { getCategories, delCategories } from '../../services/admin'
import Swal from 'sweetalert2'


const Category = () => {
    const [categories, setCategories] = useState([])
    const [isUpdate, setUpdate] = useState(false)

    //get list
    useEffect(() => {
        setUpdate(false)
        let get = async () => {
            const c = await getCategories()
            setCategories(c.data)            
        }
        if(!isUpdate){
        get();
        }
        
        return () => get = () => { };
    }, [isUpdate])


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
                    message('success', 'Categoria excluída com sucesso!')})
                .catch(() => message('danger', 'Erro ao tentar excluir categoria.'))
                
            }        
      })
}


return (
    <div>
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
                        <td>Editar | <Button variant="danger" onClick={() => deleteCategory(ctg)}> Excluir </Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>



    </div>


)
}

export default Category

const TableH = styled.th`
background: #666;
color: #eee;


:nth-child(1){
    width: 80%
}
`
