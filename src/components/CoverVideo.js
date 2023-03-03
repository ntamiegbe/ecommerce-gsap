import React from 'react'
import styled from 'styled-components'
import Video from '../assets/pexels.mp4'

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
`
const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${props => props.theme.text};

h1{
    font-family: "Kaushan Script";
    font-size: ${props => props.theme.fontxxxl};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
}

h2{
    font-family: "Kaushan Script";
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};

    font-family: "Sirin Stencil";

}

div{
    display: flex;
    flex-direction: row;
}
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div>
                    <h1 data-scroll data-scroll-speed="4" data-scroll-delay = '0.13'>S</h1>
                    <h1 data-scroll data-scroll-speed="4" data-scroll-delay = '0.09'>t</h1>
                    <h1 data-scroll data-scroll-speed="4" data-scroll-delay = '0.06'>y</h1>
                    <h1 data-scroll data-scroll-speed="4" data-scroll-delay = '0.04'>l</h1>
                    <h1 data-scroll data-scroll-speed="4" data-scroll-delay = '0.02'>e</h1>
                </div>
                <h2 data-scroll data-scroll-speed="2" data-scroll-delay='0.04'>Insipre, Create, Believe</h2>
            </Title>
            <video src={Video} type='video/mp4' autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo