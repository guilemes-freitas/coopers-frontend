import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  position: relative;
  h3 {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .ant-modal-header {
    background-color: var(--white);
  }

  .ant-modal-content {
    background-color: var(--white);
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(--white);
    z-index: 1;
    padding: 24px 24px 12px;
  }

  .ant-modal-footer {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: none;
  }

  
  @media (min-width: 430px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 22px;
    }
  }
`;

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
  height: 300px;
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