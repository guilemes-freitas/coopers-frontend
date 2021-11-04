import { Carousel } from 'react-responsive-carousel';
import SliderCard from "../SliderCard"
import { Container, Title } from './styles';
// import Bitmap from "../../assets/images/bitmap.png"

const Slider = () => {
  return (
    <Container>
        <Title>good things</Title>
        <Carousel showStatus={false} showThumbs={false} showArrows={false} autoPlay={true} infiniteLoop={true} centerMode={true}>
            <SliderCard chosenImage={0} 
            description={"Organize your daily job enhance your life performance"} 
            />
            <SliderCard chosenImage={1} 
            description={"Mark one activity as done makes your brain understands the power of doing"}
            />
            <SliderCard chosenImage={2} 
            description={"Careful with missunderstanding the difference between a list of things and a list of desires."}
            />
            <SliderCard chosenImage={0} 
            description={"Organize your daily job enhance your life performance"} 
            />
            <SliderCard chosenImage={1} 
            description={"Mark one activity as done makes your brain understands the power of doing"}
            />
            <SliderCard chosenImage={2} 
            description={"Careful with missunderstanding the difference between a list of things and a list of desires."}
            />
        </Carousel>
    </Container>
  );
};

export default Slider;