import styled from "styled-components";

export const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  margin-bottom: 0.5rem;
  padding: 1rem;
  @media screen and (min-width: 720px) {
    padding: 3rem;
  } 
`;

export const LogoContainer = styled.nav`
  display: flex;
  align-items: center;
  img {
    width: 130px;
    height: 33px;
  }
  @media screen and (min-width: 720px) {
    img {
      width: 217px;
      height: 50px;
    }
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
  @media screen and (min-width: 720px) {
    width: 22%;
    .ant-btn-primary {
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  } 
`;