import styled from 'styled-components'

import image1 from '../assets/Images/1.webp'
import image3 from '../assets/Images/3.webp'
import image8 from '../assets/Images/8.webp'

const Section = styled.section`
    position: relative;
    width: 80vw;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: "Kaushan Script";
    font-weight: 400;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`

const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 20%;
`

const Right = styled.div`
    width: 50%;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    .small-img-1{
        width: 40%;
        position: absolute;
        right: 95%;
        bottom: 10%;
    }

    .small-img-2{
        width: 40%;
        position: absolute;
        left: 80%;
        bottom: 30%;
    }
`

const About = () => {
    return (
        <Section id="fixed-target">
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                About Us
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                We are a fashion studio located in <b>Nigeria</b> that specializes in designing unique and innovative fashion pieces, including jewelry. Our focus is on creating artful designs that are sure to captivate our clients.

                <br />
                <br />

                At our studio, we take great pride in our work, and we are dedicated to crafting high-quality products. We offer a diverse range of styles that appeal to a wide audience. Our goal is to provide unique and creative fashion pieces that will bring joy and satisfaction to our customers.

                <br />
                <br />

                As a fashion label, we are committed to expanding our vision and creating exceptional experiences for all of our clients. We continuously strive to develop designs that are accessible to everyone, and we are always looking for ways to improve our products.
            </Left>
            <Right>
                <img src={image1} data-scroll data-scroll-speed="5" className='small-img-1' alt="About Us Images" />
                <img src={image3} data-scroll data-scroll-speed="-2" className='small-img-2' alt="About Us Images" />
                <img src={image8} alt="About Us Images" />
            </Right>
        </Section>
    )
}

export default About