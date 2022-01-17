import React, { useState } from "react";
import "./style.css";

export default function AuthModal(props) {
  const [show, setShow] = useState(false);
  const [selectedImng, setSelectedImg] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tags = [];

  const closeModal = (e) => {
    if (e.target.classList.contains("global-modal-container")) {
      setSelectedImg(null);
      document.getElementById("body").classList.remove("body");
    }
  };

  return (
    <div className="global-modal-container" onClick={closeModal}>
      {document.getElementById("body").classList.add("body")}
      <div className="all-modalItems-container">
        <div className="modal-container">
          <img className="modal-element" src={"src"} alt="" />
        </div>
        <div className="PhotosInfoModal">
          <div className="description">
            <p>{"description"}</p>
          </div>

          <div className="button-container">
            <p>Tags: </p>
            {tags.map((props, index) => {
              return (
                <div key={index} className="tag-container">
                  <button className="tag">{props}</button>
                </div>
              );
            })}
          </div>

          <div>
            <p className="tags-p">Reaction: </p>
            <div className="reactions">{"reactions"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
