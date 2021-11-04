import { Container, Description, Icon, Image, ReadMore, Tag, TextContainer} from "./styles";
import Organize from "../../assets/sliderImages/organize.png"
import Mark from "../../assets/sliderImages/mark.png"
import Careful from "../../assets/sliderImages/careful.png"
import icon from "../../assets/images/icon-coopers.svg"


const SliderCard = ({chosenImage, description}) => {
  const images=[Organize,Mark,Careful]
  return (
    <Container>
        <Image image={images[chosenImage]}></Image>
        <Icon src={icon}/>
        <TextContainer>
            <Tag>function</Tag>
            <Description>{description}</Description>
            <ReadMore>read more</ReadMore>
        </TextContainer>
    </Container>
  );
};

export default SliderCard;