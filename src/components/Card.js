import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import img1 from "../images/1720.jpg";
import img2 from "../images/projects/vsa0.png";
import img3 from "../images/projects/tca0.png";
import img4 from "../images/projects/ec.png";
import img5 from "../images/projects/wa.png";
import { BsGithub } from "react-icons/bs";
import "./Card.css";
import CardData from "../components/CardData";
function BasicExample() {
  const [data, setData] = useState(CardData);
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
        }}
      >
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>
            Twitter Clone App
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
            Tech Stack used : ReactJs, MongoDB, NodeJs, ExpressJs Authentication
            using Nodejs , BcryptJs and JWT
          </Card.Text>
          <a href="https://github.com/katiyarkartik/Twitter-clone-app">
            <Button variant="primary">View Project</Button>
          </a>
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
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
        }}
      >
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>
            Ecommerce App
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
            Tech Stack Used: ReactJs ,MongoDB , NodeJs , ExpressJs
            Authentication functionality User can Add Items to cart
          </Card.Text>
          <a href="https://github.com/katiyarkartik/EcommerceProject">
            <Button variant="primary">View Project</Button>
          </a>
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

      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
        }}
      >
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>
            Video Sharing App
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
            Tech Stack used : ReactJs, Firebase, ChakraUi Authentication
            functionlity using firebase and google account User can upload
            Videos
          </Card.Text>
          <a href="https://github.com/katiyarkartik/Video_sharing_app_ReactJs_Firebase">
            <Button variant="primary">View Project</Button>
          </a>
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

      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
        }}
      >
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>
            Card Title
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
          <a href="https://github.com/katiyarkartik/WeatherApp-Reactjs">
            <Button variant="primary">View Project</Button>
          </a>
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
    </>
  );
}

export default BasicExample;
