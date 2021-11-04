import { Container, Label } from "./styles";
import { InputItem } from "./styles";

const Input = ({ register,name,error=false, label, ...rest }) => {
  return(
    <Container>
      <Label isErrored={!!error}>{label}</Label>
      <InputItem
        {...register(name)}
        isErrored={!!error}
        {...rest}
        errored={!!error}
      ></InputItem>
    </Container>
  );
};

export default Input;