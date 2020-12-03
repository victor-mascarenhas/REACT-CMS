import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getCategories, getProducts } from '../../../services/admin'
import Loading from '../../../components/loading/loading'
import { Container, CardDeck, Card } from 'react-bootstrap'




const ProductsHome = () => {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        (async () => {
            const c = await getCategories()
            const p = await getProducts()
            setCategories(c.data)
            setProducts(p.data)

        })()

        return () => () => { }
    }, [])


    const mountProducts = () => {

        const prods = products.filter(item => item.highlight === true)

        return (
            <CardDeck>
                {prods.length === 0
                    ? <div> Sem Produtos </div>
                    : (
                        prods.map((prd, i) =>
                            <Card key={i}>
                                <Card.Img variant="top" src={prd.photo} />
                                <Card.Body>
                                    <Card.Title>{prd.title}</Card.Title>
                                    <Card.Text>
                                        {prd.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    )}
            </CardDeck>
        )
    }

    const isEmpty = categories.length === 0






    return (
        <React.Fragment>




            <Products>
                <Container>
                <h2 className="text-center"> Mais Vendidos! </h2>
                    {mountProducts()}
                    <Loading show={isEmpty} />

                </Container>
            </Products>

        </React.Fragment>
    )
}


export default ProductsHome

const Products = styled.div`
min-height: 400px;
width: 100%;

padding: 5rem;

h2{
    padding-bottom: 2rem;
    color: #FFB43E;
}
`
