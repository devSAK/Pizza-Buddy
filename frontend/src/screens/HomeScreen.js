import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  return (
    <>
      <ProductCarousel />
      <Link to="/" className="btn btn-light mb-4">
        Go Back
      </Link>
      <Meta />
      <h1>Latest Products</h1>
      <Row>
        <Col key="" sm={12} md={6} lg={4} xl={3}>
          <Product product="product" />
        </Col>
      </Row>
      <Paginate pages="" page="" keyword="" />
    </>
  );
};

export default HomeScreen;
