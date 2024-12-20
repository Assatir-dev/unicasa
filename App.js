import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import furnitureImage1 from './16702569826550-Vanessa.jpg'; 
import furnitureImage2 from './bcb7f0cd-1ad8-4c68-ad06-ef4e5f1705bb.jpg'; 
import furnitureImage3 from './media.webp'; 
import furnitureImage4 from './af64c3c4-0ad5-4eb9-971d-9b3e33499ed2.jpg'; 
import furnitureImage5 from './213474.jpg'; 
import furnitureImage6 from './HZ4J.gif'; 
function App() {
  return (
    <div className="main-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <h1>𝑈𝑛𝑖𝐶𝑎𝑠𝑎</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
              𝐻𝑜𝑚𝑒
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              𝐴𝑏𝑜𝑢𝑡
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              𝑃𝑟𝑜𝑑𝑢𝑐𝑡𝑠 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               
              𝐶𝑜𝑛𝑡𝑎𝑐𝑡
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              𝑅𝑒𝑣𝑖𝑒𝑤𝑠
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero-section d-flex justify-content-center align-items-center text-white text-center position-relative">
        <img 
          src={furnitureImage1} 
          alt="Furniture" 
          className="img-fluid" 
        />
        
      
        <div className="hero-text text-center">
          <div className="text-box p-4 border ">
            <h2>𝑈𝑛𝑖𝐶𝑎𝑠𝑎</h2>
            <p> 𝑜𝑓𝑓𝑒𝑟𝑠 𝑠𝑡𝑦𝑙𝑖𝑠ℎ 𝑎𝑛𝑑 ℎ𝑖𝑔ℎ-𝑞𝑢𝑎𝑙𝑖𝑡𝑦 𝑓𝑢𝑟𝑛𝑖𝑡𝑢𝑟𝑒 𝑓𝑜𝑟 𝑒𝑣𝑒𝑟𝑦 ℎ𝑜𝑚𝑒 𝐹𝑟𝑜𝑚 𝑐𝑜𝑧𝑦 𝑠𝑜𝑓𝑎𝑠 𝑡𝑜 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛𝑎𝑙 𝑡𝑎𝑏𝑙𝑒𝑠,               𝑤𝑒 𝑝𝑟𝑜𝑣𝑖𝑑𝑒 𝑒𝑙𝑒𝑔𝑎𝑛𝑡 𝑑𝑒𝑠𝑖𝑔𝑛𝑠 𝑡ℎ𝑎𝑡 𝑠𝑢𝑖𝑡 𝑦𝑜𝑢𝑟 𝑡𝑎𝑠𝑡𝑒 𝑎𝑛𝑑 𝑛𝑒𝑒𝑑𝑠               𝑎𝑙𝑙 𝑎𝑡 𝑐𝑜𝑚𝑝𝑒𝑡𝑖𝑡𝑖𝑣𝑒 𝑝𝑟𝑖𝑐𝑒𝑠 𝑤𝑖𝑡ℎ 𝑓𝑎𝑠𝑡 𝑑𝑒𝑙𝑖𝑣𝑒𝑟𝑦.</p>
          </div>
        </div>
      </div>



      <div className="cards-container d-flex gap-3 flex-wrap justify-content-center">

    <div className="card shadow-lg">
      <img src= {furnitureImage2} className="card-img-top" />
     
    </div>

   
    <div className="card shadow-lg">
      <img src= {furnitureImage3} alt="What's New" className="card-img-top" />
     
    </div>


    <div className="card shadow-lg">
      <img src={furnitureImage4}  alt="Buy 1 Get 1" className="card-img-top" />
     
    </div>
    <div className="card shadow-lg">
      <img src={furnitureImage5}  alt="Buy 1 Get 1" className="card-img-top" />
     
    </div>
    </div>



    <section class="about">
      <h2><span>About</span> Us</h2>
      <div class="content">
          <div class="image-box">
          <img src= {furnitureImage6} alt="What's New" className="card-img-top" />
              <div class="caption">UniCasa </div>
          </div>
          <div class="text-box">
              <h3>Why Choose Us</h3>
              <p>
              "At UniCasa, we offer high-quality, stylish furniture at affordable prices. Enjoy a wide selection, fast delivery, and exceptional customer service."
                  
              </p>
            
          </div>
      </div>
  </section>




      <header className="header">
        <div className="service">
          <div className="service-item">
            <i className="icon">🚚</i>
            <h3>Free Delivery</h3>
    
          </div>
          <div className="service-item">
            <i className="icon">🎧</i>
            <h3>Support 24/7</h3>
          
          </div>
          <div className="service-item">
            <i className="icon">🔄</i>
            <h3>30 Day Return</h3>
         
          </div>
          <div className="service-item">
            <i className="icon">🛒</i>
            <h3>Secure Shopping</h3>
       
          </div>
        </div>
      </header>






































































      

      <footer className="bg-body-secondary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
              href="#!"
              role="button"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              href="#!"
              role="button"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              href="#!"
              role="button"
              aria-label="Google"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              href="#!"
              role="button"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="#!"
              role="button"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              href="#!"
              role="button"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">UniCasa.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
