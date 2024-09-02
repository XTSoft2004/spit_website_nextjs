import { Carousel } from "react-bootstrap";
import './style.css'

interface CarouselProps {
    srcImage: string[];
}

const CarouselItems = ({ srcImage }: CarouselProps) => {
    return (
        <Carousel style={{ height: '100vh !important' }} controls={true} indicators={true} className="h-100">
            {srcImage.map((src, index) => {
                return (
                    <Carousel.Item style={{ height: '100vh !important' }} key={index} className="h-100">
                        <div className="overlay"></div>
                        <img
                            className="d-block w-100 h-100"
                            style={{
                                objectFit: "cover",
                                opacity: 0.75,
                                boxShadow:
                                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                            }}
                            src={src}
                            alt="Image"
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}
export default CarouselItems;