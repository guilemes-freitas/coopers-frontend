import { Button } from "antd";
import Logo from "../../assets/images/logo.svg";
import { Container,LogoContainer, ButtonContainer } from "./styles";
import ModalSignIn from "../../components/ModalSignIn";
import { useState } from "react";
import ModalSignUp from "../ModalSignUp";

const Header = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Coopers"></img>
      </LogoContainer>
      <ButtonContainer>
        <Button type="primary" onClick={()=>setIsSignUpVisible(true)}>Sign-up</Button>
        <Button type="primary" onClick={()=>setIsSignInVisible(true)}>Sign-in</Button>
      </ButtonContainer>
      <ModalSignIn
        isModalVisible={isSignInVisible}
        setIsModalVisible={setIsSignInVisible}
      ></ModalSignIn>
      <ModalSignUp
        isModalVisible={isSignUpVisible}
        setIsModalVisible={setIsSignUpVisible}
      ></ModalSignUp>
    </Container>
  );
};

export default Header;