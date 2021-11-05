import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  z-index: 350;
  min-height: 80px;

  > div {
    position: relative;
    z-index: 350;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  border-radius: 20px;

  margin: 20px 0 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
  }

  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: var(${props => props.color});

  color: var(--green);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 4px 0;
  }
`;

export const Title = styled.h1`
  color: var(--black);
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 28px;
`

export const SubTitle = styled.h2`
  color: var(--green);
  font-family: "Montserrat";
  font-size: 20px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
    font-size: 22px;
    color: var(--white);
    background: var(--green);
    outline: none;
    border: none;
    width: 140px;
    height: 50px;
    margin: 1rem;
`