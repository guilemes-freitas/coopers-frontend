import styled from "styled-components";

export const Title = styled.h1`
  color: var(--black);
  font-family: "Montserrat";
  font-size: 24px;
`

export const SubTitle = styled.h2`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 24px;
`

export const Form = styled.form`
  width: 80%;
  max-width: 700px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 3rem;
  margin-top: 20rem;
  box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
  div{
    width: 80%;
  }
  div label{
    font-size: 16px;
    font-weight: normal;
  }
  div input{
    border-radius: 4px;
  }
  div input::placeholder{
    color: #9A9A9A;
  }
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--green);
  outline: none;
  border: none;
  width: 90%;
  height: 50px;
  margin: 1rem;
  margin-bottom: 5rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.08em;
  box-shadow: 0px 16px 24px rgba(6, 21, 43, 0.12);
  @media (min-width: 1030px) {
    width: 80%;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  align-self: flex-start;
  padding-left: 2rem;
  @media (min-width: 1030px) {
    padding-left: 4rem;
  }
`;

export const TopImage = styled.section`
    width: 191px;
    height: 191px;
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -39%;
    div{
      width: 166px;
      height: 33px;
      background-color: var(--green);
      bottom: 45%;
      right: 50%;
      z-index: -1;
      position: absolute;
    }
`;

export const InputWrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    gap: 2rem;
  @media (min-width: 1030px) {
    flex-direction: row;
    width: 80%;
  }
`;