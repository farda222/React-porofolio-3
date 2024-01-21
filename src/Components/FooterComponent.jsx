import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>Contact Information</h5>
            <p>Email: info@example.com</p>
            <p>Telepon: (123) 456-7890</p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Social media</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <p>&copy; 2024 Nama Perusahaan. Hak Cipta Dilindungi.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
