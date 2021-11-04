import styled from "styled-components";

export const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;

export const LogoContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 130px;
    height: 33px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  gap: 10px;
  text-align: center;
  .ant-btn-primary {
    padding: 0;
    width: 59px;
    height: 30px;
    font-size: 12px;
    background-color: var(--green);
    font-weight: bold;
  }
  .ant-btn-primary:nth-child(2) {
    background-color: var(--black);
    
  }
`;