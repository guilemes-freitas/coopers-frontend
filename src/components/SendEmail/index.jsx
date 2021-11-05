
import {
    Title,
    Button,
    Form,
    SubTitle,
    FlexContainer,
    TopImage,
    InputWrapper,
  } from "./styles";
import "antd/dist/antd.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input"
import iconMail from "../../assets/images/icon-mail.svg"
import Tatiana from "../../assets/images/tatiana.png"
  
const SendEmail = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Invalid email").required("Insert you email!"),
    telephone: yup.string().required("Insert your telephone number!"),
    message: yup.string().required("Write a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = () => {
  };

  return (
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <TopImage image={Tatiana}>
              <div></div>
          </TopImage>
          <FlexContainer>
            <img src={iconMail} alt="" />
            <div>
                <Title>GET IN</Title>
                <SubTitle>TOUCH</SubTitle>
            </div>
          </FlexContainer>

          <Input
            register={register}
            name="name"
            label="Your name"
            placeholder="type your name here..."
            error={errors.name?.message}
          ></Input>
          <InputWrapper>
            <Input
                register={register}
                name="email"
                label="Email*"
                type="email"
                placeholder="example@example.com"
                error={errors.email?.message}
            ></Input>
            <Input
                register={register}
                name="telephone"
                label="Telephone*"
                placeholder="(  ) ____-____"
                error={errors.telephone?.message}
            ></Input>
          </InputWrapper>
            <Input
                register={register}
                name="message"
                label="Message*"
                type="text"
                placeholder="Type what you want to say to us"
                error={errors.message?.message}
            ></Input>
          <Button type="submit">SEND NOW</Button>
      </Form>
  );
};

export default SendEmail;