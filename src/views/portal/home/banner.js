import React from 'react'
import styled from 'styled-components'




const BannerHome = () => {
    return (
        <Banner>
            <h1> Esse é o banner </h1>
        </Banner>
    )
}

export default BannerHome

const Banner = styled.div`
height: 400px;
width: 100%;
background: #2f3542;
`