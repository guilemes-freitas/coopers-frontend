
import {
    Title,
    Button,
    Form,
    SubTitle,
  } from "./styles";
import "antd/dist/antd.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input"
  
const SendEmail = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Insert an username!"),
    password: yup.string().required("Insert a password!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords didn't match")
      .required("Confirm your password!"),
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
          <div>
            <Title>Sign up</Title>
            <SubTitle>to start organizing</SubTitle>

          </div>
          <Input
            register={register}
            name="username"
            label="User:"
            error={errors.username?.message}
          ></Input>
          <Input
            register={register}
            name="password"
            label="Password:"
            type="password"
            error={errors.password?.message}
          ></Input>
          <Input
            register={register}
            name="passwordConfirm"
            label="Confirm password:"
            type="password"
            error={errors.passwordConfirm?.message}
          ></Input>
          <Button type="submit">Sign-in</Button>
      </Form>
  );
};

export default SendEmail;