import React from "react";
import './News.css';
import { assets } from "./assets/assets.jsx";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { category } from "./assets/assets.jsx";
import ContactCard from './ContactCard.jsx'
import Footer from './Footer.jsx'



const images = [
  assets.female,
  assets.patient_docs,
  assets.testimonials_bac,
  assets.patient_dr
];

const formimages = [
  assets.fm_dr,
  assets.news_patient,
  assets.patient_docs,
  assets.news_doctor,
  assets.news_female,
  assets.pregnant_patient,
];

const News = () => {
  return (
    <div className="news-container">
      <div className='bg-blackdoctors'>
        <img src={assets.blog_post} alt="Black doctors" className="news-img"/>
        <h4>Home/ News</h4>
        <h1>Blog Posts</h1>
      </div>
      <div className="news-cards">
        {images.map((img, index) => (
          <div key={index} className="news-card2">
            <img src={img} alt={`News ${index}`} />
            <pre>Monday 05, September 2021 <span>By Author</span> 68 ❤️ 86 </pre>
            <h1>A passion for putting patients first</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip thank<br></br>scelerisque tortor ornare ornare.than Quisque much<br></br> are ornare Convallis felis vitae tortortry augue very<br></br> in. Consequat faucibus porttitor enim thank very et..</p>
            <button>Read More <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
        ))}
      </div>
      <div className="news-search">
        <input type="text" placeholder="Search"></input>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="news-forms">
        <h1>Recent Posts</h1>
          {formimages.map((img, index) => (
              <div key={index} className="news-form">
                <img src={img} alt={`News ${index}`} />
                <p>Monday 05, September 2021 </p>
                <h3>This Article’s Title goes Here, <br></br> but not too long.</h3>
              </div>
            ))}
      </div>
      <div className="news-forms2">
        <h1>Categories</h1>
        <div className="news-categories">
          {category.map((cat, index) => (
            <div key={index} className="news-category">
              <p>{cat.category}</p>
              <h3>{cat.number}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="at-the-bottom">
        <i class="fa-solid fa-arrow-left"></i>
        <pre>Previous page</pre>
        <h3>1-2-3-4-5</h3>
        <p>Next page</p>
        <span><i class="fa-solid fa-arrow-right"></i></span>
      </div>
      <div className='about-contact' >
        <div className='headers'>
                <h3>GET IN TOUCH</h3>
                <h1>Contact</h1>
              </div>
        <ContactCard />
      </div>
      <div  className='about-footer'>
        <Footer/>
      </div>
    </div>
  );
};

export default News;
