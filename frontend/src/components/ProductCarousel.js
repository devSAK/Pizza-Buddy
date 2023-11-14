import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      <CarouselItem key="">
        <Link to={`/product/`}>
          <CarouselCaption></CarouselCaption>
        </Link>
      </CarouselItem>
    </Carousel>
  );
};

export default ProductCarousel;
