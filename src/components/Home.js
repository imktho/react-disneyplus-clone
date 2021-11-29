import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'

function Home() {
    return (
        <Container>
            <ImageSlider/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;

    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    
`
