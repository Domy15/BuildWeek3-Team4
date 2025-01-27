import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import Competency from "./Competency";
import AsideSection from "./AsideSection";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
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
