import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/slider';
import slides from './mock.json'
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

  
const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'English');
    return (
        <div className="App">
          <div>
          <Slider slides={slides}/>
          </div>
          <div class="grid-container">
  <div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Locations</h4> : <h4>स्थान</h4>}

{selectedLanguage === 'English' ? <p>gsajgdjsajkdjksajkdjksakdk</p>:<p>नवीन वर्ष २०२३ मध्ये तुमचे स्वागत आहे</p>}
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>


{selectedLanguage === 'English' ? <h4>Locations</h4> : <h4>स्थान</h4>}
<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  

</svg>

</div>
{selectedLanguage === 'English' ? <h4>Hospital</h4> : <h4>रुग्णालय</h4>}
<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>

{selectedLanguage === 'English' ? <h4>Population</h4> : <h4>लोकसंख्या</h4>}
<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Schools</h4> : <h4>लोकसंख्या</h4>}

<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Buisness</h4> : <h4>लोकसंख्या</h4>}

<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Govermante</h4> : <h4>लोकसंख्या</h4>}

<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Population</h4> : <h4>लोकसंख्या</h4>}

<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
<div className="grid-item"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"  className="gridIcons" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />


</svg>

</div>
{selectedLanguage === 'English' ? <h4>Population</h4> : <h4>लोकसंख्या</h4>}

<p>gsajgdjsajkdjksajkdjksakdk</p>
</div>
</div>

<h3 style={{textAlign: 'center'}}>Videos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <div class="cards-list">
  
          <a href="https://www.youtube.com/watch?v=LDXadAS2-PE&t=427s" target="_blank" rel="noopener noreferrer">
  <div class="card 1">
    <div class="card_image">
      <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="Card Image" />
    </div>
    <div class="card_title title-white">
      <p>Card Title</p>
    </div>
  </div>
</a>
  
<a href="https://www.youtube.com/watch?v=LDXadAS2-PE&t=427s" target="_blank" rel="noopener noreferrer">
  <div class="card 1">
    <div class="card_image">
      <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="Card Image" />
    </div>
    <div class="card_title title-white">
      <p>Card Title</p>
    </div>
  </div>
</a>
  
<a href="https://www.youtube.com/watch?v=LDXadAS2-PE&t=427s" target="_blank" rel="noopener noreferrer">
  <div class="card 1">
    <div class="card_image">
      <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="Card Image" />
    </div>
    <div class="card_title title-white">
      <p>Card Title</p>
    </div>
  </div>
</a>
  
<a href="https://www.youtube.com/watch?v=LDXadAS2-PE&t=427s" target="_blank" rel="noopener noreferrer">
  <div class="card 1">
    <div class="card_image">
      <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="Card Image" />
    </div>
    <div class="card_title title-white">
      <p>Card Title</p>
    </div>
  </div>
</a>



</div>

        <div>  <MDBContainer className="my-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
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
      </MDBRow>
    </MDBContainer>
    </div>
  
        </div>
      );
}

export default Home