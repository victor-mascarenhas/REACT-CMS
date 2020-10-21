import React from 'react'
import { Route } from 'react-router-dom'
import LayoutAdmin from '../../components/Layout/admin'
import Dash from './dash'
import Products from './products'
import { FaImage, FaSwatchbook, FaTools, FaBuffer, FaTachometerAlt } from 'react-icons/fa'


const MenuItens = [
    {
        name: "DashBoard",
        path: '/',
        icon: <FaTachometerAlt />,
        component: () => <Dash />
    },
    {
        name: "Categorias",
        path: '/categories',
        icon: <FaBuffer />,
        component: () => <h1>Categorias</h1>
    },
    {
        name: "Banner",
        path: '/Banner',
        icon: <FaImage />,
        component: () => <h1>Banner</h1>
    },
    {
        name: "Produtos",
        path: '/products',
        icon: <FaSwatchbook />,
        component: () => <Products />
    },
    {
        name: "Serviços",
        path: '/services',
        icon: <FaTools />,
        component: () => <h1>Servicos</h1>
    }
]


export default (props) => {
    return (
        <LayoutAdmin Menu={MenuItens}>
            {MenuItens.map((item, i) => (
                <Route key={i} exact path={props.match.path + item.path} component={item.component} />
            ))}
        </LayoutAdmin>
    )
}
