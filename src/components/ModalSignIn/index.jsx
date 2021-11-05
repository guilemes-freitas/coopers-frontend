
import {
    CustomModal,
    Title,
    Button,
    Form,
    SubTitle,
    Image,
    TitleContainer,
  } from "./styles";
import "antd/dist/antd.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input"
import { useUser } from "../../providers/User";
import { useTask } from "../../providers/Task";
import modalImage from "../../assets/images/modalImage.png";
  
const ModalSignIn = ({ isModalVisible = false, setIsModalVisible }) => {
  const {Login} = useUser()
  const {initializeTasks} = useTask()
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({username,password}) => {
    const user = {username,password}
    setIsModalVisible(Login(user))
    initializeTasks();
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
          <TitleContainer>
            <Image src={modalImage}></Image>
            <div>
              <Title>Sign in</Title>
              <SubTitle>to access your list</SubTitle>
            </div>

          </TitleContainer>
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
          <Button type="submit">Sign-in</Button>
      </Form>
    </CustomModal>
  );
};

export default ModalSignIn;