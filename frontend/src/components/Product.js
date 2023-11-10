import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to="">
        <Card.Img src="" variant="top" />
      </Link>

      <Card.Body>
        <Link to="">
          <Card.Title as="div" className="product-title">
            <strong>Product Name</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value="" text="reviews" />
        </Card.Text>

        <Card.Text as="h3">Product Price</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
