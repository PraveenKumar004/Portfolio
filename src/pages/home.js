import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import '../styles/style.css'
import Resume from '../assets/Resume.pdf'

function TopNavbar() {

  const [mobile, setMobile] = useState("hide");

  const openl = () => {
    const op = document.getElementById("open");
    op.style.display = "none";
  }

  return (
    <>
      {mobile === "show" && (

        <div className='mobilenav' onHide={mobile}>
          <span className='inmob'><Navbar.Brand href="#home" className='m-3 p-2 backf h6' >Praveen Kumar</Navbar.Brand><p className='me-2 mt-1 p-2 backf' onClick={() => { setMobile("hide") }} style={{ fontSize: "26px" }}><IoClose /></p></span>
          <Nav.Link href="#home" className='m-3 p-2 backf' onClick={() => { setMobile("hide") }}>Home</Nav.Link>
          <Nav.Link href="#about" className='m-3 p-2 backf' onClick={() => { setMobile("hide") }}>About</Nav.Link>
          <Nav.Link href="#skills" className='m-3 p-2 backf' onClick={() => { setMobile("hide") }}>Skills</Nav.Link>
          <Nav.Link href="#interest" className='m-3 p-2 backf' onClick={() => { setMobile("hide") }}>Interests</Nav.Link>
          <Nav.Link href="#contact" className='m-3 p-2 backf' onClick={() => { setMobile("hide") }}>Contact</Nav.Link>
        </div>
      )}
      <div className='home'>
        <div className='nav'>
          <div className='insidenav'>
            <Navbar.Brand href="#home" className='m-3 p-2 back h6' >Praveen Kumar</Navbar.Brand>
            <div className='tobehide'>
              <Nav.Link href="#home" className='m-3 p-2 back'>Home</Nav.Link>
              <Nav.Link href="#about" className='m-3 p-2 back'>About</Nav.Link>
              <Nav.Link href="#skills" className='m-3 p-2 back'>Skills</Nav.Link>
              <Nav.Link href="#interest" className='m-3 p-2 back'>Interests</Nav.Link>
              <Nav.Link href="#contact" className='m-3 p-2 back'>Contact</Nav.Link>
            </div>
          </div>
          <div className='m-3'>
            <div className='pe-2 backf tog text-white' onClick={() => { setMobile("show") }} style={{ fontSize: '20px' }}><FaBars /></div>
          </div>
        </div>
        <div className='navcontent'>
          {/* <div className='h1'>IMG</div> */}
          <div className='h1 name'>Praveen Kumar</div>
          <div className='fs-5'>Frontend Developer & Youtuber</div>
        </div>
      </div>
      <section id="about">
        <div className=' second margin'>
          <div className='about'>
            <div className='m-5'>
              <h className='h2'>About me</h>
              <p className='mt-4 font'>Hello there! 👋 I'm Praveen Kumar, a passionate second-year college student delving into the dynamic world of web development. With a focus on front-end technologies, I find joy in crafting engaging and user-friendly interfaces that captivate and delight users.</p>
            </div>
          </div>

          <div className='find'>
            <div className='m-5'>
              <h className='h2'>Find me here</h>
              <div className='mt-4 w-100 d-flex flex-wrap'>
                <div className='logowid mb-3'>
                  <a href='https://www.linkedin.com/in/praveenkumarv8112004/' target="_blank" className='logoname' >
                    <span className='logo font'><FaLinkedinIn /></span>
                    <span className='ms-3 font'>Linked In</span>
                  </a>
                </div>
                <div className='logowid mb-3'>
                  <a href='https://twitter.com/praveen_8_11' target="_blank" className='logoname' >
                    <span className='logo font'><BsTwitterX /></span>
                    <span className='ms-3 font'>Twitter</span>
                  </a>
                </div>
                <div className='logowid mb-3'>
                  <a href='https://www.youtube.com/@PK_TECH' target="_blank" className='logoname' >
                    <span className='logo font'><FaYoutube /></span>
                    <span className='ms-3 font'>Youtube</span>
                  </a>
                </div>
                <div className='logowid mb-3'>
                  <a href='https://github.com/PraveenKumar004' target="_blank" className='logoname' >
                    <span className='logo font'><FaGithub /></span>
                    <span className='ms-3 font'>Github</span>
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '17px' }} className='mt-4'>Download Resume, <a href={Resume} download style={{ color: '#fff' }}>Click here</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skills'>
        <div className='skills margin'>
          <div className='h2 mt-3' style={{ fontSize: '30px' }}>Skills</div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>HTML</div><div>95%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '95%' }}></div></div>
          </div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>css</div><div>87%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '87%' }}></div></div>
          </div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>Javascript</div><div>83%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '83%' }}></div></div>
          </div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>React</div><div>85%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '85%' }}></div></div>
          </div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>Figma</div><div>90%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '90%' }}></div></div>
          </div>
          <div className='skillcontent mt-4'>
            <div className='d-flex justify-content-between  barh'><div>Canva</div><div>93%</div></div>
            <div className='bar m-3 '><div className='inbar' style={{ width: '93%' }}></div></div>
          </div>
        </div>
      </section>
      <sction id="project" >
        <div className=' margin' >
          <div className='text-center pt-4 h1' style={{  color: 'rgba(111, 0, 61, 1)' }}>Projects</div>
          <div className='homethird mt-5'>
            <div className='eightleft m-3 mb-0' style={{ backgroundColor: '#FFE6F3' }}>
              <div className='m-4'>
              <div style={{ fontSize: '38px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }} className='mt-2 mb-2'><FaFolder /></div>
                <h style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Recipe Book</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474', lineHeight: '1.5' }}> Developed a user-friendly recipe book web application, allowing users to browse, search, and save their favorite recipes effortlessly</p>
                <a href='https://github.com/PraveenKumar004/Recipe-Book-Application' target="_blank" className='color'>Github Repository Link</a>
              </div>
            </div>
            <div className='eightcenter m-3 mb-0' style={{ backgroundColor: '#FFE6F3' }}>
              <div className='m-4'>
              <div style={{ fontSize: '38px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }} className='mt-2 mb-2'><FaFolder /></div>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>IPL Auction </h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Created a dynamic web application for simulating IPL auctions, providing real-time updates on player bidding and team compositions</p>
                <a href='https://github.com/PraveenKumar004/IPL_Auction' target="_blank" className='color'>Github Repository Link</a>
              </div>
            </div>
            <div className='eightright m-3 mb-0' style={{ backgroundColor: '#FFE6F3' }}>
              <div className='m-4'>
                <div style={{ fontSize: '38px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }} className='mt-2 mb-2'><FaFolder /></div>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Portfolio</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Designed and implemented a personalized portfolio website showcasing my skills, projects, and experiences, demonstrating proficiency in web development and design</p>
                <a href='https://github.com/PraveenKumar004/Portfolio' target="_blank" className='color'>Github Repository Link</a>
              </div>
            </div>
          </div>
        </div>
      </sction>
      <section id="intern">
        <div className=' h1 intern_head'>Internship/Experience</div>
        <div className='conwi'> <div className='mt-4 internn_con'>In my academic journey, I had the opportunity to intern at Statix.pro, a dynamic company specializing in web development solutions and Digital Marketing. During my two-month internship at Statix.pro, I served as a front-end web developer, contributing to various projects under the guidance of experienced professionals. My responsibilities included translating design mock-ups into responsive web pages using HTML, CSS, and JavaScript, ensuring optimal user experience across devices. I actively participated in team meetings, offering insights and suggestions to improve project efficiency. Through rigorous testing and debugging, I ensured the quality and reliability of our deliverables. This experience not only enhanced my technical skills but also fostered teamwork and communication abilities. Overall, my time at Statix.pro was incredibly rewarding, providing me with practical experience and invaluable insights into the world of web development.</div></div>
      </section>
      <sction id="interest" >
        <div className=' margin' style={{ backgroundColor: '#FFE6F3' }}>
          <div className='text-center pt-4' style={{ fontSize: '30px', color: 'rgba(111, 0, 61, 1)', fontWeight: '600' }}>Area of Interest</div>
          <div className='homethird'>
            <div className='eightleft m-3 mb-0'>
              <div className='m-4'>
                <h style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Web Development</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474', lineHeight: '1.5' }}>Process of creating, maintaining, and building websites and web applications</p>
              </div>
            </div>
            <div className='eightcenter m-3 mb-0'>
              <div className='m-4'>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Web Design</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>The process of planning, creating, and implementing a website that is functional and user-friendly</p>
              </div>
            </div>
            <div className='eightright m-3 mb-0'>
              <div className='m-4'>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>UI/UX</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>UI is the look and feel of a product, while UX is the user's overall experience with that product</p>
              </div>
            </div>
            <div className='eightleft m-3'>
              <div className='m-4'>
                <h style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Digital Marketing</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Business strategy that uses digital communication to promote brands and connect with potential customers</p>
              </div>
            </div>
            <div className='eightcenter m-3'>
              <div className='m-4'>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Content Creation</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Generating ideas for topics that appeal to a specific audience, then creating written or visual content</p>
              </div>
            </div>
            <div className='eightright m-3'>
              <div className='m-4'>
                <h className='mt-1' style={{ fontSize: '22px', color: 'rgba(111, 0, 61, 1)', fontWeight: '500' }}>Problem Solving</h>
                <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Process of finding solutions to difficult or complex issues</p>
              </div>
            </div>
          </div>
        </div>
      </sction>
      <section id="contact">
        <div className='contact mt-5 '>
          <div className='lrcontact'>
            <div className='leftcontact mb-5'>
              <div className='mt-5 h2' style={{ fontSize: '36px' }}>Contact me</div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}><IoCall /> Call me</span><span className='mt-2 ps-4' style={{ fontSize: "18px" }}>9363335266</span></div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}><MdOutlineEmail /> Email</span><span className='mt-2 ps-4' style={{ fontSize: "18px" }}>praveenkumarv989@gmail.com</span></div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}><MdOutlineLocationOn /> Location</span><span className='mt-2 ps-4' style={{ fontSize: "18px" }}>Tiruppur, Tamil Nadu</span></div>
            </div>
            <div className='rightcontact mt-4 mb-4'>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}>Name</span><input className='mt-2 coninput' style={{ fontSize: "18px" }} /></div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}>Email</span><input className='mt-2 coninput' style={{ fontSize: "18px" }} /></div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}>Subject</span><input className='mt-2 coninput' style={{ fontSize: "18px" }} /></div>
              <div className='leftcon mt-4'><span style={{ fontSize: '20px', fontWeight: '500' }}>Message</span><textarea rows="4" className='mt-2 coninput' style={{ fontSize: "18px" }} /></div>
              <div className='mt-4'><button className='but ps-3 pe-3'><IoSendSharp /> Send</button></div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div>
          <div>

          </div>
        </div>
      </section>

    </>

  );
}

export default TopNavbar;
