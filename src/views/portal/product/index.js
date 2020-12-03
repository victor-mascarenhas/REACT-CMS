import React, { useEffect, useState } from 'react'
import { Container, Tab, Tabs, CardColumns, Card } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { getCategories, getProducts } from '../../../services/admin'
import Loading from '../../../components/loading/loading'


export default () => {

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

  const mountProducts = (prod) => {

    const prods = products.filter(item => item.category._id === prod._id)

    return (
      <CardColumns>
        {prods.length === 0
          ? <div> Sem Produtos </div>
          : (
            prods.map((prd, i) =>
              <Card key={i}>
                <Card.Img variant="top" src={prd.photo} />
                <Card.Body>
                  <Card.Title>{prd.title}</Card.Title>
                  <Card.Text>
                    {prd.complete_description}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
      </CardColumns>


    )
  }

  const isEmpty = categories.length === 0
  
  return (
    <React.Fragment>

      <Product>
        <TitlePage title="Produtos" sub="Conheça nossos produtos" />

        <Container>
        
          
          <TabBox defaultActiveKey={0} id="uncontrolled-tab-example">
            {categories.map((cat, i) => (
              <Tab eventKey={i} title={cat.name}>
                {mountProducts(cat)}
              </Tab>
            ))}
             
          </TabBox>
          <Loading show={isEmpty} />  
          
        </Container>
      </Product>

    </React.Fragment>
  )
}

const Product = styled.div`
min-height: 500px;
display: block;
.tab-content{
}

`

const TabBox = styled(Tabs)`
background: #fff;
margin-bottom: 1rem;
margin-top: 1rem;
`

