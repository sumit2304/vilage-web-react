import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./testimonials.css";
import "./about.css";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const openModal = (src, alt) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about">
      
  <h2>About Us</h2>
      <p>
        Welcome to our website! We are a dedicated team of professionals
        passionate about our work and committed to delivering high-quality
        products and services to our customers.
      </p>
      <p>
        Our mission is to provide innovative solutions and outstanding
        customer experiences. With years of experience in the industry, we
        strive to meet and exceed your expectations.
      </p>

      <h3 style={{textAlign:"center", padding:"5px"}}>History</h3>
      <div className="history-section">
       
        <p>
          Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
          Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
           Welcome to our website! We are a dedicated team of professionals
          passionate about our work and committed to delivering high-quality
          products and services to our customers.
       
          Our mission is to provide innovative solutions and outstanding
          customer experiences. With years of experience in the industry, we
          strive to meet and exceed your expectations.
       
      </p>
      <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"  
          alt="History Image"
          className="history-image"
          style={{ width: "100%", maxWidth: "300px" }}/>
        
      </div>


      <div>
      <div>
        <h3 style={{ textAlign: "center" }}>Image Gallery</h3>
        <div className="image-gallery">
          {Array.from({ length: 8 }, (_, index) => (
            <img
              key={index}
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              alt={`Image ${index}`}
              style={{ width: "100%", maxWidth: "300px", cursor: "pointer", padding:"2px" }}
              onClick={() =>
                openModal(
                  "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
                  `Image ${index}`
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" style={{ display: "block" }}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={modalImageSrc} alt={modalImageAlt} />
          <div id="caption">{modalImageAlt}</div>
        </div>
      )}
      </div>




      
  <div>  <MDBContainer className="my-5">
        
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4">Grampanchayat</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                // style={{ backgroundColor: "no" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                  elit.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                // style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody >
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                // style={{ backgroundColor: "no" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                  elit.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                // style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody >
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="testimonial-card">
              <div
                className="card-up"
                
              ></div>
              <div className="avatar mx-auto bg-white">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </div>
    </div>
  );
};

export default About;
