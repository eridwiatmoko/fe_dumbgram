import React from "react";
import "./style.css";
import Masonry from "react-masonry-css";
import { Row, Col, Button } from "react-bootstrap";
import { Icons } from "../../../assets";

export default function PostedImages(props) {
  let { dataPosted, isFeed, isExplore, isHero, id } = props;
  const MasonryOptions = {
    default: 3,
    1200: 3,
    1000: 2,
    700: 1,
  };

  const handleDetailFeedModal = (isFeed_) => {
    return console.log("this event is for feed only");
  };

  return (
    <>
      {!isHero && (
        <h1 className="text-white fw-bold mt-3 ps-4">
          {id && `${id}, `}
          {isFeed ? "Feed" : "Explore"}
        </h1>
      )}
      <Masonry
        breakpointCols={MasonryOptions}
        className={isHero ? "my-masonry-grid" : "masonry-grid"}
        columnClassName={
          isHero ? "my-masonry-grid_column" : "masonry-grid_column"
        }
      >
        {isFeed || isExplore
          ? dataPosted.map((post, id) => {
              return (
                <div key={id}>
                  <img
                    src={post.image}
                    alt=""
                    onClick={() => handleDetailFeedModal(isFeed)}
                  />
                  {isFeed && (
                    <Row className="mt-3">
                      <Col md={6}>
                        <div className="d-flex align-items-center">
                          <div
                            className="profile-background"
                            onClick={() => handleDetailFeedModal(isFeed)}
                          >
                            <img
                              src={post.user.profilePicture}
                              alt={post.user.name + "profile_picture"}
                              className="profile-image-sm"
                            />
                          </div>
                          <span
                            className="profile-name-sm"
                            onClick={() => handleDetailFeedModal(isFeed)}
                          >
                            {post.user.username}
                          </span>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="d-flex justify-content-end align-items-center"
                      >
                        <Button variant="secondary">
                          <img
                            src={Icons.Like}
                            alt="like_icon"
                            style={{ width: "20px" }}
                          />
                        </Button>
                        <Button variant="secondary">
                          <img
                            src={Icons.Comment}
                            alt="comment_icon"
                            style={{ width: "20px" }}
                          />
                        </Button>
                        <Button variant="secondary">
                          <img
                            src={Icons.Share}
                            alt="share_icon"
                            style={{ width: "20px" }}
                          />
                        </Button>
                      </Col>
                      <span
                        className="text-end text-muted my-3"
                        style={{ fontSize: "18px" }}
                      >
                        {post.likes.toLocaleString()} Likes
                      </span>
                    </Row>
                  )}
                </div>
              );
            })
          : dataPosted.map((src, id) => {
              return (
                <div key={id}>
                  <img src={src} alt={src.split("/").pop().replace(".", "")} />
                </div>
              );
            })}
        {}
      </Masonry>
    </>
  );
}
