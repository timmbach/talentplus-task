import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./LandingPage.scss";
import { CoursesData } from "./CoursesData";
import Course from "./components/Course/Course";
import Footer from "./components/Footer/Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Testimonial from "./components/Testimonial/Testimonial";
import Accordion from "./components/Accordion/Accordion";
// vectors
import Bluezigzag from "../../assets/vectors/blueZigzag.png";
import GreenCircle from "../../assets/vectors/green-circle.png";
import triangleVector from "../../assets/vectors/triangle.png";
import yellowDotVector from "../../assets/vectors/yellow-dot.png";
import curlyArrow from "../../assets/vectors/curly-arrow.png";
import greenTriangle from "../../assets/vectors/greenTriangle.png";
import yellowZigzag from "../../assets/vectors/yellowZigzag.png";
import purpleCircle from "../../assets/vectors/purpleCircle.png";
import leftBlob from "../../assets/vectors/leftBlob.png";
import rightBlob from "../../assets/vectors/rightBlob.png";
import twistVector from "../../assets/vectors/twist.png";
import dropletsVector from "../../assets/vectors/droplets.png";
import greenZigzagVector from "../../assets/vectors/greenZigzag.png";
import largePurpleCircle from "../../assets/vectors/largePurpleCircle.png";
import smallPurpleCircle from "../../assets/vectors/smallPurpleCircle.png";
import crossVector from "../../assets/vectors/crossVector.png";
//  images
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png";
import user4 from "../../assets/images/user-4.png";
import user5 from "../../assets/images/user-5.png";
import heroImage from "../../assets/images/hero-image.png";
import offersImage from "../../assets/images/offersImage.png";
import lightBulb from "../../assets/images/light-bulb.png";
import mediaImage1 from "../../assets/images/mediaImage1.png";
import enrolledStudents from "../../assets/images/enrolledStudents.png";
import mediaImage2 from "../../assets/images/mediaImage2.png";
import worldConnectImage from "../../assets/images/worldConnectImage.png";
// icons
import figmaIcon from "../../assets/images/icons/figma.png";
import wordpressIcon from "../../assets/images/icons/wordpress.png";
import vscodeIcon from "../../assets/images/icons/vscode.png";
import mentorsIcon from "../../assets/images/icons/mentorsIcon.png";
import meetingsIcon from "../../assets/images/icons/meetingsIcon.png";
import zoomIcon from "../../assets/images/icons/zoom.png";
import stripeIcon from "../../assets/images/icons/stripe.png";
import mondayIcon from "../../assets/images/icons/monday.png";
import slackIcon from "../../assets/images/icons/slack.png";
import dropboxIcon from "../../assets/images/icons/Dropbox.png";
import audioIcon from "../../assets/images/icons/audioIcon.png";
import streamIcon from "../../assets/images/icons/streamIcon.png";
import recordIcon from "../../assets/images/icons/recordIcon.png";
import notesIcon from "../../assets/images/icons/notesIcon.png";
import multipleMeetingsIcon from "../../assets/images/icons/multipleMeetingsIcon.png";
import pricesIcon from "../../assets/images/icons/pricesIcon.png";

const accordions = [
  {
    title: "Is there a free trial available?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    title: "Can I change my plan later?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    title: "Are the courses lifetime?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    title: "Do I get certified after taking courses?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    title: "How do I reach out to mentors?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    title: "Do we get job ready after taking courses?",
    description:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
];

const handleDragStart = (e) => e.preventDefault();

const testimonials = CoursesData.map((testimonial) => (
  <Testimonial testimonial={testimonial} key={testimonial.id} />
));

const LandingPage = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [coursesCategory, setCoursesCategory] = useState("");
  const [courseCollection, setCourseCollection] = useState(CoursesData);

  useEffect(() => {
    setCoursesData(CoursesData);
    setCourseCollection(coursesData);
    setCoursesCategory("All Categories");
  }, []);
  useEffect(() => {
    if (coursesCategory !== "All Categories") {
      setCourseCollection(
        coursesData.filter((course) => course.category === coursesCategory)
      );
    }
    if (coursesCategory == "All Categories") {
      // setCoursesCategory("All Categories");
      setCourseCollection(CoursesData);
    }
  }, [coursesCategory]);

  return (
    <div className="landingPage">
      <Header />
      <main className="landingPage__main">
        <section id="home" className="landingPage__heroSection">
          <article className="landingPage__heroSection-left">
            <img id="blueZigzagVector" src={Bluezigzag} alt="zigzag" />
            <img id="circleVector2" src={GreenCircle} alt="circle vector" />
            <h1>Grow your skills to advance your career path</h1>
            <p>
              Build Your Future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className="landingPage__heroSection-buttons">
              <button>
                Get Started Now
                <i className="fa-solid fa-arrow-up fa-beat-fade"></i>
              </button>
              <button>Enroll Now</button>
            </div>
            <div className="landingPage__heroSection-previews">
              <div className="landingPage__heroSection-previews_Img">
                <img src={user1} alt="random user img" />
                <img src={user2} alt="random user img" />
                <img src={user3} alt="random user img" />
                <img src={user4} alt="random user img" />
                <img src={user5} alt="random user img" />
              </div>
              <div className="landingPage__heroSection-previews_Info">
                <h2>255k+</h2>
                <span>Previews</span>
              </div>
            </div>
          </article>
          <div className="landingPage__heroSection-right">
            <img id="heroImage" src={heroImage} alt="hero image" />
            <img id="vscodeIcon" src={vscodeIcon} alt="vscode icon" />
            <img id="bulbIcon" src={lightBulb} alt="bulb icon" />
            <img id="figmaIcon" src={figmaIcon} alt="figma icon" />
            <img id="wordpressIcon" src={wordpressIcon} alt="wordpress icon" />
            <img id="circleVector1" src={GreenCircle} alt="circle vector" />

            <img
              id="triangleVector"
              src={triangleVector}
              alt="triangle vector"
            />
            <img id="dotVector1" src={yellowDotVector} alt="yellow dot" />
            <img id="dotVector2" src={yellowDotVector} alt="yellow dot" />

            <img id="curlyArrowVector" src={curlyArrow} alt="curly arrow" />
          </div>
        </section>
        <section className="landingPage__mediaLinks">
          <ul>
            <li>
              <a target="_blank" href="https://zoom.us/">
                <img src={zoomIcon} alt="zoom" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://stripe.com/">
                <img src={stripeIcon} alt="stripe" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://monday.com/">
                <img src={mondayIcon} alt="monday" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://slack.com/">
                <img src={slackIcon} alt="slack" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.dropbox.com/">
                <img src={dropboxIcon} alt="dropbox" />
              </a>
            </li>
          </ul>
        </section>
        <section className="landingPage__classes">
          <article className="landingPage__classes-left">
            <h1>High quality video, audio & live classes</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <button>View Courses</button>
            <div className="landingPage__classes-resources">
              <button>
                <img src={audioIcon} alt="img" /> Audio Classes
              </button>
              <button>
                <img src={streamIcon} alt="img" /> Live Classes
              </button>
              <button>
                <img src={recordIcon} alt="img" /> Recorded Classes
              </button>
              <button>
                <img src={notesIcon} alt="img" /> 50+ Notes
              </button>
            </div>
          </article>
          <img id="twistVector" src={twistVector} alt="img" />
          <img id="dropletsVector" src={dropletsVector} alt="img" />
          <img id="greenZigzagVector" src={greenZigzagVector} alt="img" />
          <img id="bigPurpleCircleVector" src={largePurpleCircle} alt="img" />
          <img id="smallPurpleCircleVector" src={smallPurpleCircle} alt="img" />
          <div className="landingPage__classes-right">
            <img id="mediaImage1" src={mediaImage1} alt="img" />
            <img id="enrolledStudents" src={enrolledStudents} alt="img" />
            <img id="mediaImage2" src={mediaImage2} alt="img" />
          </div>
        </section>
        <section id="about-us" className="landingPage__offers">
          <article className="landingPage__offers-left">
            <h1>This is why we are best from others</h1>
            <p>
              high-definition video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <img id="offersImage" src={offersImage} alt="image" />
            <img id="greenTriangleVector" src={greenTriangle} alt="img" />
          </article>
          <div className="landingPage__offers-right">
            <article className="landingPage__offers-right_card">
              <img src={mentorsIcon} alt="icon" />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img src={meetingsIcon} alt="icon" />
              <h1>One-On-One Meetings</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img src={multipleMeetingsIcon} alt="icon" />
              <h1>One-On-One Meetings</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img src={pricesIcon} alt="icon" />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <img id="yellowZigzagVector" src={yellowZigzag} alt="icon" />
            <img id="purpleCircleVector" src={purpleCircle} alt="icon" />
          </div>
        </section>
        <section id="courses" className="landingPage__courses">
          <header className="landingPage__courses-heading">
            <h1>Browse Our Popular Courses</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <img id="crossVector" src={crossVector} alt="icon" />
          </header>
          <div className="landingPage__courses-categories">
            <button
              style={{
                backgroundColor:
                  coursesCategory == "All Categories" ? "white" : "inherit",
                color:
                  coursesCategory == "All Categories" ? "#004db3" : "inherit",
                opacity: coursesCategory == "All Categories" ? "1" : "0.4",
              }}
              onClick={() => setCoursesCategory("All Categories")}
            >
              All Categories
            </button>
            <button
              style={{
                backgroundColor:
                  coursesCategory == "Design" ? "white" : "inherit",
                color: coursesCategory == "Design" ? "#004db3" : "inherit",
                opacity: coursesCategory == "Design" ? "1" : "0.4",
              }}
              onClick={() => setCoursesCategory("Design")}
            >
              Design
            </button>
            <button
              style={{
                backgroundColor:
                  coursesCategory == "Development" ? "white" : "inherit",
                color: coursesCategory == "Development" ? "#004db3" : "inherit",
                opacity: coursesCategory == "Development" ? "1" : "0.4",
              }}
              onClick={() => setCoursesCategory("Development")}
            >
              Development
            </button>
            <button
              style={{
                backgroundColor:
                  coursesCategory == "Marketing" ? "white" : "inherit",
                color: coursesCategory == "Marketing" ? "#004db3" : "inherit",
                opacity: coursesCategory == "Marketing" ? "1" : "0.4",
              }}
              onClick={() => setCoursesCategory("Marketing")}
            >
              Marketing
            </button>
          </div>
          <div className="landingPage__courses-container">
            {courseCollection.map((course) => (
              <Course course={course} key={course.id} />
            ))}
          </div>
          <button className="landingPage__courses-explore">
            Explore All Courses
          </button>
        </section>
        <section id="testimonials" className="landingPage__testimonials">
          <header className="landingPage__testimonials-heading">
            <h1>What Our Clients Are Saying</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </header>
          <div className="landingPage__carousel-container">
            <AliceCarousel
              mouseTracking
              items={testimonials}
              disableButtonsControls={true}
              keyboardNavigation={true}
              responsive={{
                0: {
                  items: 1,
                },
                1024: {
                  items: 3,
                  itemsFit: "contain",
                },
              }}
            />
          </div>
        </section>
        <section id="community" className="landingPage__community">
          <article>
            <p>JOIN OUR COMMUNITY</p>
            <h1>
              Are you ready to connect with the future talent od the tech world
            </h1>
            <p>Meet Up With Other Techstars And Grow Together</p>
            <img src={worldConnectImage} alt="img" />
            <button>Join Our Community</button>
          </article>
        </section>
        <section className="landingPage__faq">
          <header className="landingPage__faq-heading">
            <h1>Frequently Asked Questions</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </header>
          <div className="landingPage__accordion">
            {accordions.map((accordion, index) => (
              <Accordion key={index} accordion={accordion} />
            ))}
          </div>
          <img id="leftBlobVector" src={leftBlob} alt="" />
          <img id="rightBlobVector" src={rightBlob} alt="" />
          <img id="yellowZigzagVector2" src={yellowZigzag} alt="" />
          <img id="purpleCircleVector2" src={purpleCircle} alt="" />
          <img id="yellowDotVector2" src={yellowDotVector} alt="" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
