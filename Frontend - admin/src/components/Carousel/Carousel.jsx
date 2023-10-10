import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Items from '../carouselitems/items';

const Carousel1 = () => {
    return(
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container1"
    dotListClass=""
    draggable
    focusOnSelect
    infinite={false}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
        desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
        },
        mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
        },
        tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
        }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl
    shouldResetAutoplay
    showDots
    sliderClass=""
    slidesToSlide={2}
    swipeable
    >
    <Items
        description="Especialidad en Medicina Interna"
        headline="Dr. Juan Camilo Arango"
        image="src/assets/Doctor1.jpg"
    />
    <Items
        description="Especialidad en Pediatría"
        headline="Dr. Marco Antonio"
        image="src/assets/Doctor2.jpg"
    />
    <Items
        description="Enfermera Jefe"
        headline="Catalina Gómez"
        image="src/assets/Doctor3.jpeg"
    />
    <Items
        description="Especialidad en Medicina Interna"
        headline="Dra. Isabel Cristina Gómez"
        image="src/assets/Doctor4.png"
    />
    <Items
        description="Anestesióloga"
        headline="Dra. Ana María Rodríguez"
        image="src/assets/Doctor5.png"
    />
    <Items
        description="Enfermero"
        headline="Mateo Restrepo"
        image="src/assets/Doctor6.png"
    />
    <Items
        description="Especialidad en Medicina Interna"
        headline="Dr. Camilo Rendón"
        image="src/assets/personalces.png"
    />
    </Carousel>
    );
};

export default Carousel1;