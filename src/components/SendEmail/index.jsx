
import {
    Title,
    Button,
    Form,
    SubTitle,
    FlexContainer,
    TopImage,
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
            error={errors.name?.message}
          ></Input>
          <Input
            register={register}
            name="email"
            label="Email*"
            type="email"
            error={errors.email?.message}
          ></Input>
          <Input
            register={register}
            name="telephone"
            label="Telephone*"
            placeholder="(  ) ____-____"
            error={errors.telephone?.message}
          ></Input>
          <Button type="submit">SEND NOW</Button>
      </Form>
  );
};

export default SendEmail;