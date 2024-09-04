import "./style.css";
import dataCarouselCards from "../../data/Home/dataCarouselCards.json";

import Slider from "react-slick";
import { Card } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselCardProps {
  title: string;
  srcImage: string;
}

const CarouselCard = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {dataCarouselCards.map((card: CarouselCardProps, index: number) => {
          return (
            <Card
              key={index}
              className="card-fixed-size"
              style={{ borderRadius: "50px" }}
            >
              <Card.Img
                variant="top"
                src={card.srcImage}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselCard;
