import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
top: 1rem;
left: 1rem;

width: 100%;
color: ${props => props.theme.text};
z-index: 5;
 
div{
color: ${props => props.theme.text};
font-family: "Kaushan Script";
}
`

const Logo = () => {
    return (
        <Container>
            <motion.div
                initial={{
                    opacity: 0,
                    // pathLength: 0
                }}
                animate={{
                    opacity: 1,
                    // pathLength: 1
                }}
                transition={{
                    duration: 2.7,
                    ease: 'easeInOut'
                }}
            >
                Logo
            </motion.div>
        </Container>
    )
}

export default Logo