import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    width: 80vw;
    min-height: 100vh;
    overflow: hidden;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig}
    font-family: "Kaushan Script";
    font-weight: 400;

    position: absolute;
    top: 1rem;
`

const About = () => {
  return (
    <Section>
        <Title>About Us</Title>
    </Section>
  )
}

export default About