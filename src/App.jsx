import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Farming from "./Farming";
import Buisness from "./Buisness";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
import Modal from "react-modal";
import WeatherPopup from "./components/WeatherPopup";

const App = () => {
  const theme = {

    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);

  const openWeatherModal = () => {
    setIsWeatherModalOpen(true);
  };

  const closeWeatherModal = () => {
    setIsWeatherModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Farming" element={<Farming />} />
          {/* <Route path="/Buisness" element={<Buisness />} /> */}
        </Routes>
        
        <Footer />
      </BrowserRouter>
   
      <a className="float" target="_blank" onClick={openWeatherModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="cloud"><g><g><ellipse cx="24" cy="45.2" fill="#45413c" opacity=".15" rx="13.5" ry="1.5"></ellipse><g><g><g><path fill="#8ca4b8" d="M46.5 16.8c0-2.2-1.5-4-3.6-4.4 0-.2.1-.4.1-.6 0-2.5-2-4.5-4.5-4.5-.9 0-1.8.3-2.5.8v-.3c0-2.5-2-4.5-4.5-4.5-1.2 0-2.4.5-3.2 1.3-.5-1.9-2.3-3.3-4.3-3.3s-3.8 1.4-4.3 3.3c-.8-.8-1.9-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5v.3c-.7-.5-1.6-.8-2.5-.8C7 7.3 5 9.3 5 11.8c0 .2 0 .4.1.6-2 .4-3.6 2.2-3.6 4.4s1.6 4.1 3.8 4.4c-.2.5-.3 1-.3 1.6 0 2.5 2 4.5 4.5 4.5.9 0 1.8-.3 2.5-.8v.3c0 2.5 2 4.5 4.5 4.5 1.4 0 2.6-.6 3.4-1.6.7 1.5 2.3 2.6 4.1 2.6s3.4-1.1 4.1-2.6c.8 1 2 1.6 3.4 1.6 2.5 0 4.5-2 4.5-4.5v-.3c.7.5 1.6.8 2.5.8 2.5 0 4.5-2 4.5-4.5 0-.6-.1-1.1-.3-1.6 2.2-.3 3.8-2.1 3.8-4.4z"></path><path fill="#627b8c" d="M44 15.1c.2.5.3 1.1.3 1.7 0 2.7-2.1 4.8-4.8 4.8-1 0-1.9-.3-2.7-.8v.3c0 2.7-2.1 4.8-4.8 4.8-1.5 0-2.8-.7-3.7-1.7-.8 1.6-2.4 2.8-4.3 2.8s-3.6-1.1-4.3-2.8c-.9 1-2.2 1.7-3.7 1.7-2.7 0-4.8-2.1-4.8-4.8v-.3c-.8.5-1.7.8-2.7.8-2.7 0-4.8-2.1-4.8-4.8 0-.6.1-1.2.3-1.7-.7-.1-1.3-.4-1.8-.7-.5.7-.7 1.5-.7 2.4 0 2.2 1.6 4.1 3.8 4.4-.2.5-.3 1-.3 1.6 0 2.5 2 4.5 4.5 4.5.9 0 1.8-.3 2.5-.8v.3c0 2.5 2 4.5 4.5 4.5 1.4 0 2.6-.6 3.4-1.6.7 1.5 2.3 2.6 4.1 2.6s3.4-1.1 4.1-2.6c.8 1 2 1.6 3.4 1.6 2.5 0 4.5-2 4.5-4.5v-.3c.7.5 1.6.8 2.5.8 2.5 0 4.5-2 4.5-4.5 0-.6-.1-1.1-.3-1.6 2.2-.3 3.8-2.2 3.8-4.4 0-.9-.3-1.7-.7-2.4-.6.3-1.2.6-1.8.7z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M46.5 16.8c0-2.2-1.5-4-3.6-4.4 0-.2.1-.4.1-.6 0-2.5-2-4.5-4.5-4.5-.9 0-1.8.3-2.5.8v-.3c0-2.5-2-4.5-4.5-4.5-1.2 0-2.4.5-3.2 1.3-.5-1.9-2.3-3.3-4.3-3.3s-3.8 1.4-4.3 3.3c-.8-.8-1.9-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5v.3c-.7-.5-1.6-.8-2.5-.8C7 7.3 5 9.3 5 11.8c0 .2 0 .4.1.6-2 .4-3.6 2.2-3.6 4.4s1.6 4.1 3.8 4.4c-.2.5-.3 1-.3 1.6 0 2.5 2 4.5 4.5 4.5.9 0 1.8-.3 2.5-.8v.3c0 2.5 2 4.5 4.5 4.5 1.4 0 2.6-.6 3.4-1.6.7 1.5 2.3 2.6 4.1 2.6s3.4-1.1 4.1-2.6c.8 1 2 1.6 3.4 1.6 2.5 0 4.5-2 4.5-4.5v-.3c.7.5 1.6.8 2.5.8 2.5 0 4.5-2 4.5-4.5 0-.6-.1-1.1-.3-1.6 2.2-.3 3.8-2.1 3.8-4.4z"></path></g></g><g><ellipse cx="16.9" cy="17.7" fill="#627b8c" rx="1.3" ry=".8"></ellipse><g><path fill="#ffb0ca" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M27.2 19.8c.5 0 1 .5.8 1-.5 1.8-2.1 3.1-4.1 3.1s-3.6-1.3-4.1-3.1c-.1-.5.3-1 .8-1h6.6z"></path><path fill="#ff87af" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M24 23.9c1.3 0 2.5-.6 3.3-1.6-.8-.5-2-.9-3.3-.9s-2.5.3-3.3.9c.8 1 2 1.6 3.3 1.6z"></path></g><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.5 16c0-.7.6-1.3 1.3-1.3s1.2.6 1.2 1.3"></path><ellipse cx="31.1" cy="17.7" fill="#627b8c" rx="1.3" ry=".8"></ellipse><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M31.5 16c0-.7-.6-1.3-1.3-1.3S29 15.3 29 16"></path></g></g><g><path fill="#c0dceb" d="M31.8 44c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .4.9 1.3 2.8 1.3 3.4z"></path><path fill="#e8f4fa" d="M30.2 44.6c-.7 0-1.2-.4-1.5-1-.1.2-.1.4-.1.5 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.1 0-.3-.1-.5-.2.5-.8 1-1.5 1z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M31.8 44c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .4.9 1.3 2.8 1.3 3.4z"></path></g><g><path fill="#c0dceb" d="M36.7 37.2c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .5.9 1.3 2.8 1.3 3.4z"></path><path fill="#e8f4fa" d="M35.2 37.7c-.7 0-1.2-.4-1.5-1-.1.2-.1.4-.1.5 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.1 0-.3-.1-.5-.3.6-.8 1-1.5 1z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M36.7 37.2c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .5.9 1.3 2.8 1.3 3.4z"></path></g><g><path fill="#c0dceb" d="M16.2 44c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.6-.8-2.5-1.3-3.4-.1-.2-.4-.2-.6 0-.4.9-1.3 2.8-1.3 3.4z"></path><path fill="#e8f4fa" d="M17.8 44.6c.7 0 1.2-.4 1.5-1 .1.2.1.4.1.5 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.1 0-.3.1-.5.2.5.8 1 1.5 1z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.2 44c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.6-.8-2.5-1.3-3.4-.1-.2-.4-.2-.6 0-.4.9-1.3 2.8-1.3 3.4z"></path></g><g><path fill="#c0dceb" d="M11.3 37.2c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.6-.8-2.5-1.3-3.4-.1-.2-.4-.2-.6 0-.5.9-1.3 2.8-1.3 3.4z"></path><path fill="#e8f4fa" d="M12.8 37.7c.7 0 1.2-.4 1.5-1 .1.2.1.4.1.5 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.1 0-.3.1-.5.3.6.8 1 1.5 1z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M11.3 37.2c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.6-.8-2.5-1.3-3.4-.1-.2-.4-.2-.6 0-.5.9-1.3 2.8-1.3 3.4z"></path></g><g><path fill="#c0dceb" d="M25.6 40.6c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .4.9 1.3 2.8 1.3 3.4z"></path><path fill="#e8f4fa" d="M24 41.1c-.7 0-1.2-.4-1.5-1-.1.2-.1.4-.1.5 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.1 0-.3-.1-.5-.3.6-.8 1-1.5 1z"></path><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M25.6 40.6c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.6.8-2.5 1.3-3.4.1-.2.4-.2.6 0 .4.9 1.3 2.8 1.3 3.4z"></path></g></g></g></svg>

        </a>
        <WeatherPopup isOpen={isWeatherModalOpen} onRequestClose={closeWeatherModal} />
    
    </ThemeProvider>
  );
};


export default App;



