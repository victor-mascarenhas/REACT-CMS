import React, { useEffect, useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { getCategories, getProducts } from '../../../services/admin'


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

  return () => () => {}
},[])

const mountProducts = (prod) => {

  const prods = products.filter(item => item.category._id === prod._id)

  return (
    <ul>
      {prods.length === 0 
      ?<div> Sem Produtos </div>
    : (
      prods.map((prd, i) => <li key={i}>{prd.title}</li>)
    )}
    </ul>
  )
} 

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
      </Container>
    </Product>

  </React.Fragment>
)
}

const Product = styled.div`
height: 500px;
display: block;
.tab-content{
  background: #eee !important;
}

`

const TabBox = styled(Tabs)`
background: #fff;
`





