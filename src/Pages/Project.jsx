// ProjectList.js
import { Card, Container, Row, Col } from "react-bootstrap";
import preview1 from "../assets/img/Project/Project1.jpg";
import preview2 from "../assets/img/Project/Project2.jpg";
import preview3 from "../assets/img/Project/Project3.jpg";
import preview4 from "../assets/img/Project/Project4.jpg";

const projects = [
  {
    id: 1,
    title: "Bakarenak",
    description: "The web made by Vanilla HTML and JS and combine with Tailwindcss",
    image: preview1,
    url: "https://bakarenak.vercel.app/#produk", // Ganti dengan URL proyek sesungguhnya
  },
  {
    id: 2,
    title: "Meeet Landing Page",
    image: preview2,
    description: "The web made by Vanilla HTML and JS and combine with Tailwindcss",
    url: "https://project-crytex-5ybh.vercel.app/", // Ganti dengan URL proyek sesungguhnya
  },
  {
    id: 3,
    title: "Portofolio Farda",
    description: "The web portofolio made purely with vanilla HTML CSS JS without framework",
    image: preview3,
    url: "https://final-portofolio-for-pamerin-project.vercel.app/", // Ganti dengan URL proyek sesungguhnya
  },
  {
    id: 4,
    title: "Apple Dummy Web",
    description: "The web i made with HMTL CSS and JS for my pratice frontend skill and di dont public it",
    image: preview4,
    url: "https://apple-ipad-alpha.vercel.app/", // Ganti dengan URL proyek sesungguhnya
  },
  // ... tambahkan proyek lainnya
];

const ProjectList = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank"); // Membuka tautan proyek di tab baru
  };

  return (
    <div className="Project">
      <h1 className="Text-Project">My Project</h1>
      <Container>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <Card id="Card" className="mb-5" onClick={() => handleCardClick(project.url)}>
                <Card.Img variant="top" src={project.image} alt={`Preview for ${project.title}`} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectList;
