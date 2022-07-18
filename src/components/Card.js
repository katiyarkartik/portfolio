import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../images/1720.jpg";
import { BsGithub } from "react-icons/bs";
import "./Card.css";
function BasicExample() {
  return (
    <Card style={{ width: "18rem", marginLeft: "auto", marginRight: "auto" , marginTop:"40px"}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>
          Card Title{" "}
          {/* <span
              style={{
                marginLeft:"60px",
                color: "#000428",
                fontSize: "14px",
                fontWeight: "500",
                // textDecoration: "underline",
                // textUnderlineOffset: "3px",
                cursor:"pointer",
                backgroundColor:"white",
                padding:"3px",
                borderRadius:"5px"
              }}
            >
              View More
            </span> */}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View Project</Button>
        {/* <Button
            variant="secondary"
            style={{
              marginLeft: "55px",
              right: "0",
              backgroundColor: "#222222",
              borderColor: "white",
            }}
          >
            <BsGithub />
          </Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
