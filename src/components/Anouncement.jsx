import { styled } from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white ;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight:500 ;
`;

const Anouncement = () => {
  return (
    <Container>
        Super Offer! Free Shipping on orders over 100$
    </Container>
  )
}

export default Anouncement