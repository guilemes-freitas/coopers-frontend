
import {
    CustomModal,
    Title,
    Button,
    Form,
    SubTitle,
  } from "./styles";
import "antd/dist/antd.css";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input"
import { useState } from "react";
  
const ModalSignIn = ({ isModalVisible = false, setIsModalVisible }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data)
    api
      .post("login/", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Coopers:token", JSON.stringify(token));
        setIsModalVisible(false);
      })
      .catch((err) =>{
        setIsError(true)
        console.log("username ou senha inválidos")
      });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <CustomModal
      visible={isModalVisible}
      width={500}
      onCancel={handleCloseModal}
      closeIcon={"close"}
      footer={
        <></>
      }
    >
      
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <Title>Sign in</Title>
            <SubTitle>to access your list</SubTitle>

          </div>
          <Input
            register={register}
            name="username"
            label="User:"
            error={errors.username?.message || isError}
          ></Input>
          <Input
            register={register}
            name="password"
            label="Password:"
            type="password"
            error={errors.password?.message}
          ></Input>
          <Button type="submit">Sign-in</Button>
      </Form>
    </CustomModal>
  );
};

export default ModalSignIn;