import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { Logo } from "../../components/atoms";
import {
  // DetailFeedModal,
  // PostedImages,
  SideNavbar,
  UserProfile,
} from "../../components/molecules";
import NavbarComponent from "../../components/molecules/Navbar";

export default function CreatePost() {
  const posts = [
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/1.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/4.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/2.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/5.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/3.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/7.png"),
      likes: 127321,
    },
  ];
  const users = [
    {
      name: "Lisa",
      username: "lalalisa_m",
      profilePicture: require("../../assets/images/avatar/lisa.png"),
      posts: 200,
      followers: 51.2,
      following: 1,
      bio: "Rapper in Black Pink, Brand Ambasador Penshoppe",
    },
    {
      name: "Zayn",
      username: "zayn",
      profilePicture: require("../../assets/images/avatar/zayn.png"),
      posts: 1000,
      followers: 150.1,
      following: 1,
      bio: "Brand Ambasador Penshoppe",
    },
  ];

  const [user, setUser] = useState({
    name: "",
    profilePicture: "",
    username: "",
    posts: "",
    followers: "",
    following: "",
    bio: "",
  });
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [userFeed, setUserFeed] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      const findUser = users.find((u) => u.username === username);
      if (findUser) {
        setIsUser(true);
        const userPosts = posts.filter(
          (post) => post.user.username === username
        );
        setState(true);
        setUserFeed([...userPosts]);
        return setUser({ ...user, ...findUser });
      }
      setMessage(`User ${username} not found`);
      setShow(true);
      return setUser({ ...user, ...users[0] });
    }
    setShow(false);
    setUser({ ...user, ...users[0] });
    setState(false);
  }, [username]);

  console.log(userFeed);

  return (
    <Container fluid>
      <Row className="feed min-vh-100">
        <Col md={3} className="px-0 pb-5">
          <Link to={"/home/feed"}>
            <Logo isSmall className="mt-4 mx-5" />
          </Link>
          <UserProfile
            user={{ user, params: state }}
            show={show}
            setShow={setShow}
            message={message}
            setMessage={setMessage}
          />
          <SideNavbar />
        </Col>
        <Col md={9} className="container-fluid pt-4">
          <NavbarComponent />
          <Container>
            <h1 className="text-white fw-bold mt-5">Create Post</h1>
            <Button size="lg" className="mb-4 mt-5">
              Upload Photos or Videos
            </Button>
            <FloatingLabel controlId="caption" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <div className="ms-auto d-flex justify-content-end">
              <Button size="lg" className="mt-5">
                Upload
              </Button>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
