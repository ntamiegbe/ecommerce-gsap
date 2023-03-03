import React from 'react'
import styled from 'styled-components'
import Video from '../assets/pexels.mp4'
import { motion } from 'framer-motion'

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
const Title = styled(motion.div)`
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

const container = {
    hidden: {
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 0.3
        }
    },
}

const item = {
    hidden: {
        opacity: 0,
    },
    show:{
        opacity: 1,
    },
}

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title variants={container} initial="hidden" animate="show">
                <div>
                    <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay='0.13'>S</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay='0.09'>t</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay='0.06'>y</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay='0.04'>l</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay='0.02'>e</motion.h1>
                </div>
                <motion.h2 variants={item} data-scroll data-scroll-speed="2" data-scroll-delay='0.04'
                    initial={{
                        opacity: 0,
                        // pathLength: 0
                    }}
                    animate={{
                        opacity: 1,
                        // pathLength: 1
                    }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut'
                    }}
                >
                    Insipre, Create, Believe
                </motion.h2>
            </Title>
            <video src={Video} type='video/mp4' autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo