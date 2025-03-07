import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import Competency from "./Competency";
import AsideSection from "./AsideSection";
import HeroSection from "./HeroSection";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSection />
          <Experience />
          <Competency />
        </Col>
        <Col md={4} className="d-none d-md-block">
          <AsideSection />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
