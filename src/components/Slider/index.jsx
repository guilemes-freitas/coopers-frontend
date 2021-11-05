import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SliderCard from "../SliderCard"
import { Container, Title } from './styles';

const Slider = () => {
  const [percentage,setPercentage] = useState(80);
  const updateSize = () => {
    if (window.innerWidth >= 720 ) {
      setPercentage(33);
    } else{
      setPercentage(80);
      
    }
  }
  window.addEventListener('resize', updateSize);
  
  useEffect(()=>{
    if (window.innerWidth >= 720 ) {
      setPercentage(33);
    } else{
      setPercentage(80);
    }
  },[])
  return (
    <Container>
        <Title>good things</Title>
        <Carousel centerMode={true} centerSlidePercentage={percentage} showStatus={false} showThumbs={false} showArrows={false} autoPlay={true} infiniteLoop={true}>
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