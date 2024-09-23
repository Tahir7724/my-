import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>ALTAHIR</b> Ibrahim{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>SR . UI UX Designer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                    Hello, my name is ALTAHIR Ibrahim, and I am a Senior UI/UX Designer with over 6 years of experience in the tech industry.
                     I specialize in delivering powerful solutions across UI/UX design, web and mobile development, data analytics using machine
                      learning (ML), and AWS infrastructure. My expertise lies in crafting intuitive, user-centered digital 
                      experiences, deploying scalable applications, and leveraging branding strategies that drive business growth.
                       I build responsive websites and user-friendly mobile apps, provide data-driven insights through ML analytics, 
                       design secure AWS solutions, and create compelling brand identities that resonate with audiences.
                    </p>
                  </div>
                  <div className="social-links">
                  <a target="_blank" rel="nofollow" href="https://www.behance.net/tahirsharief">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a>
                <a target="_blank" rel="nofollow" href="http://www.dribbble.com/tahir_ux">
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>

                <a target="_blank" rel="nofollow" href="https://www.instagram.com/tahir_ux?igsh=MWtybmdia2IzM2U5dg==">
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>

                <a target="_blank" rel="nofollow" href="https://wa.me/message/XP5DDC7TD3EOI1">
                  <i aria-hidden="true" className="fab fa-whatsapp" />
                </a>
                  </div>
                </div>
                {/* <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1nCODGEUGQg0sLLQjprQY-uqMaKaJA2wv/view?usp=drive_link"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div> */}
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile3.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        +6 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">16</span>
                      <span className="value">
                        Completed <strong> Freelance Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}

        <div className="v-line v-line-right">
          <div className="container">
            
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">    
                <div className="services-item">
                  <div className="service-icon">
                   <img src="assets/images/icons/ux.png" alt="" />
                  </div>

                  {/* <div className="icon" /> */}
                  <h5 className="lui-title">
                    <span> UI UX Design </span>
                  </h5>

                  <div className="lui-text">
                    <div>
                      {" "}
                      UI/UX design for Mobile app & Websites  focused on creating intuitive, user-centered interfaces that enhance user experience and business outcomes.
                                            {" "}
                    </div>
                  </div>

                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>   

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">      
              <div className="services-item">
                <div className="service-icon">
                   <img src="assets/images/icons/web.png" alt="" />
                  </div>
                  <h5 className="lui-title">
                    <span> Website Development </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      By building responsive, high-performing websites with clean code, optimized user experience, and modern technologies.
                      </p>
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>  

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">    
                <div className="services-item services-item-card">
                <div className="service-icon">
                   <img src="assets/images/icons/app.png" alt="" />
                  </div>
                  <h5 className="lui-title">
                    <span> Mobile Development</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      By Creating user-friendly, responsive apps with seamless performance across iOS and Android platforms using modern technologies.                      .{" "}
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
         
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">     
                <div className="services-item">
                  {/* <div className="icon" /> */}
                  <div className="service-icon">
                   <img src="assets/images/icons/data.png" alt="" />
                  </div>
                  <h5 className="lui-title">
                    <span> Data Analyst - ML </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      I offer data analytics services using machine learning to uncover insights, optimize decision-making, and drive data-driven business strategies.
                      .{" "}
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
                </div> 
             

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">   
                <div className="services-item">
                <div className="service-icon">
                   <img src="assets/images/icons/mdi_aws.png" alt="" />
                  </div>
                  <h5 className="lui-title">
                    <span> AWS Infrastructre </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      AWS infrastructure services, designing scalable, secure cloud solutions using best practices in automation, networking, and cost optimization..</p>
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">   
                <div className="services-item">
                  <div className="service-icon">
                   <img src="assets/images/icons/design.png" alt="" />
                  </div>
                  <h5 className="lui-title">
                    <span>Branding</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      creating compelling brand identities that resonate with audiences through cohesive visual design and strategic messaging.

                      .{" "}
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
           </div>
              
            <div className="lui-bgtitle">
              <span> Services </span>
            </div> 
          </div>
        </div>
       
      </section>

      {/* Section - Skills */}
      {/* <section className="lui-section lui-gradient-center" id="skills-section">
      
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}

                </span>
               
              </div>
              <p>Explore a range of services tailored to elevate your project. From UX/UI design and research to information architecture and prototyping</p>
            </div>
          </div>
        </div> 
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Design Tools & Software</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Figma (+5 years) Adobe XD (+5 years) Adobe Creative
                          Suite (+5 years).
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "95%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        95 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> UI Design & Development </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          UI Design, Prototyping, User-Centric Design, User
                          Persona Design, User Flow, User Journey, Wireframing,
                          Complex Interaction UI, HTML & CSS, Bootstrap CSS,
                          Tailwind CSS,React JS Next JS.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "97%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        97 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> UX Design </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          UX Research, User Journey, User Perona, User Design
                          Design Thinking, Requirements Analysis,
                          Problem-solving, Critical Thinking.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Project Management & Collaboration </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Jira Agile, Teamwork, Microsoft Teams,
                          <br />
                          Slack, Trello.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> No-Coding </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>Webflow and Framer</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section> */}
 
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases Studies</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section> 
      <Resume /> 
      
  
      
      <section className="lui-section lui-gradient-bottom pt-5" id="contact-section">
      
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span>Dubai , United Arab Emirates</span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelance </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> tahir.sh771@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> (+971) 50 212 6086 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" required/>
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" required/>
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" required />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={""} required />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <a
                            href="#"
                            className="btn"
                            onclick="$('#cform').submit(); return false;"
                          >
                            <span>Send Message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
