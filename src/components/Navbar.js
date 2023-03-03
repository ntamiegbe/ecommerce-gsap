import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const NavContainer = styled(motion.nav)`
    position: absolute;
    top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    z-index: 50;
    transition: all 0.4s ease;
`

const MenuItems = styled.ul`
    position: relative;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    list-style: none;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    width: 100%;
    padding: 0 10rem;
    `

const MenuLi = styled.li`
    list-style: none;
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    color: ${props => props.theme.body};
    width: 15rem;
    height: 2.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    clip-path: polygon(0 0, 100% 0, 74% 100%, 27% 99%);
    cursor: pointer;
    font-size: ${props => props.theme.fontmd};
    font-weight: 800;
    position: absolute;
    top: 100%;
    right: 50%
    transform: translateX(50%);
    `

const MenuItem = styled.li`
    cursor: pointer;   
    margin: 0 4px;
    
    :hover {
        text-decoration: underline;
    }
`

const Navbar = () => {

    const [click, setClick] = useState(false)

    return (
        <NavContainer click={click}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 1.2,
                ease: 'easeInOut'
            }}
        >
            <MenuItems>
                <MenuLi onClick={() => setClick(!click)}>MENU</MenuLi>
                <MenuItem>HOME</MenuItem>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>SHOP</MenuItem>
                <MenuItem>CONTACT</MenuItem>
            </MenuItems>
        </NavContainer>
    )
}

export default Navbar