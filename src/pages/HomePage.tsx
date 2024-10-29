import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Selamat Datang
                <br />
                <span>Di Website Resmi</span> <br />OSIS SMK wira Informatika Global
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quisquam hic animi rem quidem facilis?
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <h1>img</h1>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default HomePage;
