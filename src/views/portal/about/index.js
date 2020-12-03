import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import randomguy1 from '../../../assets/images/random_guy_1.jpg'
import randomguy2 from '../../../assets/images/randum_guy_2.jpg'
import chefimg from '../../../assets/images/chef_woman.jpg'


export default () => {
  return (

    <About>
      <TitlePage title="Sobre" sub="Conheça nossa equipe" />

      <Description>
        <Container>
<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, dolor fringilla consectetur vehicula, sem lorem vulputate arcu, eu semper lorem nulla a turpis. In pharetra, erat sed rhoncus gravida, diam nisl volutpat mi, vitae sagittis magna felis non nunc. In tristique sodales metus quis consequat. Sed nisl dolor, pharetra ut tempor sed, sagittis sit amet leo. Vivamus mi leo, accumsan quis lacus ac, consectetur scelerisque est. Sed at lorem eget felis posuere aliquet in vel massa. Sed elit felis, egestas a orci vitae, vehicula venenatis nisl. Cras semper venenatis lectus, sit amet condimentum eros imperdiet at. Fusce venenatis ligula eget venenatis sodales. Suspendisse lectus tellus, ornare sit amet turpis non, tristique accumsan nisi.</h1>
</Container>
      </Description>
      <Collaborators>
      <Container>
        <Row>
          <BoxItem><img src={randomguy1} height="100%" alt=""/>
          <div>
          <h1>João</h1>
          <h2>Co-fundador</h2>
          </div>
          </BoxItem>
          <BoxItem><img src={randomguy2} height="100%" alt=""/>
          <div>
          <h1>José</h1>
          <h2>Co-fundador</h2>
          </div>
          </BoxItem>
          <BoxItem><img src={chefimg} height="100%" alt=""/>
          <div>
          <h1>Carlota</h1>
          <h2>Chef</h2>
          </div>
          </BoxItem>
        </Row>
      </Container>
      </Collaborators>

    </About>
  )
}

const About = styled.div`
display: block;
color: #FFB43E;
`
const Description = styled.div`

height: 200px;
background: #fff4;
width: 100%;
display: flex;
h1{
  margin-top: 1rem;
  font-size: 20px;
}
`

const Collaborators = styled.div`
min-height: 200px;
background: #fff4;
width: 100%;
padding: 20px 0;
`

const BoxItem = styled(Col)`
min-height: 200px;
margin:10px;

img{  
  height: 200px;
border-radius:20%;
}
div{
  h1{
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  }
  h2{
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: 'Josefin Sans', sans-serif;
  }
}

`











