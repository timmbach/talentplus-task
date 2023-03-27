import React from "react";
import Header from "./components/Header/Header";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <main className="landingPage__main">
        <section className="landingPage__heroSection">
          <article className="landingPage__heroSection-left">
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
                <img src="src/assets/images/user-1.png" alt="random user img" />
                <img src="src/assets/images/user-2.png" alt="random user img" />
                <img src="src/assets/images/user-3.png" alt="random user img" />
                <img src="src/assets/images/user-4.png" alt="random user img" />
                <img src="src/assets/images/user-5.png" alt="random user img" />
              </div>
              <div className="landingPage__heroSection-previews_Info">
                <h2>255k+</h2>
                <span>Previews</span>
              </div>
            </div>
          </article>
          <div className="landingPage__heroSection-right">
            <img
              id="heroImage"
              src="src/assets/images/hero-image.png"
              alt="hero image"
            />
            <img
              id="vscodeIcon"
              src="src/assets/images/icons/vscode.png"
              alt="vscode icon"
            />
            <img
              id="bulbIcon"
              src="src/assets/images/light-bulb.png"
              alt="bulb icon"
            />
            <img
              id="figmaIcon"
              src="src/assets/images/icons/figma.png"
              alt="figma icon"
            />
            <img
              id="wordpressIcon"
              src="src/assets/images/icons/wordpress.png"
              alt="wordpress icon"
            />
            <img
              id="circleVector1"
              src="src/assets/vectors/green-circle.png"
              alt="circle vector"
            />
            <img
              id="circleVector2"
              src="src/assets/vectors/green-circle.png"
              alt="circle vector"
            />
            <img
              id="triangleVector"
              src="src/assets/vectors/triangle.png"
              alt="triangle vector"
            />
            <img
              id="dotVector1"
              src="src/assets/vectors/yellow-dot.png"
              alt="yellow dot"
            />
            <img
              id="dotVector2"
              src="src/assets/vectors/yellow-dot.png"
              alt="yellow dot"
            />
            <img
              id="blueZigzagVector"
              src="src/assets/vectors/blueZigzag.png"
              alt="zigzag"
            />
            <img
              id="curlyArrowVector"
              src="src/assets/vectors/curly-arrow.png"
              alt="curly arrow"
            />
          </div>
        </section>
        <section className="landingPage__mediaLinks">
          <ul>
            <li>
              <a target="_blank" href="https://zoom.us/">
                <img src="src/assets/images/icons/zoom.png" alt="zoom" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://stripe.com/">
                <img src="src/assets/images/icons/stripe.png" alt="stripe" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://monday.com/">
                <img src="src/assets/images/icons/monday.png" alt="monday" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://slack.com/">
                <img src="src/assets/images/icons/slack.png" alt="slack" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.dropbox.com/">
                <img src="src/assets/images/icons/Dropbox.png" alt="dropbox" />
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
                <img src="src/assets/images/icons/audioIcon.png" alt="img" />{" "}
                Audio Classes
              </button>
              <button>
                <img src="src/assets/images/icons/streamIcon.png" alt="img" />{" "}
                Live Classes
              </button>
              <button>
                <img src="src/assets/images/icons/recordIcon.png" alt="img" />{" "}
                Recorded Classes
              </button>
              <button>
                <img src="src/assets/images/icons/notesIcon.png" alt="img" />{" "}
                50+ Notes
              </button>
            </div>
            <img
              id="twistVector"
              src="src/assets/vectors/twist.png"
              alt="img"
            />
          </article>
          <div className="landingPage__classes-right">
            <img
              id="mediaImage1"
              src="src/assets/images/mediaImage1.png"
              alt="img"
            />
            <img
              id="enrolledStudents"
              src="src/assets/images/enrolledStudents.png"
              alt="img"
            />
            <img
              id="mediaImage2"
              src="src/assets/images/mediaImage2.png"
              alt="img"
            />
            <img
              id="dropletsVector"
              src="src/assets/vectors/droplets.png"
              alt="img"
            />
            <img
              id="greenZigzagVector"
              src="src/assets/vectors/greenZigzag.png"
              alt="img"
            />
            <img
              id="bigPurpleCircleVector"
              src="src/assets/vectors/largePurpleCircle.png"
              alt="img"
            />
            <img
              id="smallPurpleCircleVector"
              src="src/assets/vectors/smallPurpleCircle.png"
              alt="img"
            />
          </div>
        </section>
        <section className="landingPage__offers">
          <article className="landingPage__offers-left">
            <h1>This is why we are best from others</h1>
            <p>
              high-definition video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <img
              id="offersImage"
              src="src/assets/images/offersImage.png"
              alt="image"
            />
            <img
              id="greenTriangleVector"
              src="src/assets/vectors/greenTriangle.png"
              alt="img"
            />
          </article>
          <div className="landingPage__offers-right">
            <article className="landingPage__offers-right_card">
              <img src="src/assets/images/icons/mentorsIcon.png" alt="icon" />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img src="src/assets/images/icons/meetingsIcon.png" alt="icon" />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img
                src="src/assets/images/icons/multipleMeetingsIcon.png"
                alt="icon"
              />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <article className="landingPage__offers-right_card">
              <img src="src/assets/images/icons/pricesIcon.png" alt="icon" />
              <h1>Experienced Mentors</h1>
              <p>
                high-definition video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </article>
            <img
              id="yellowZigzagVector"
              src="src/assets/vectors/yellowZigzag.png"
              alt="icon"
            />
            <img
              id="purpleCircleVector"
              src="src/assets/vectors/purpleCircle.png"
              alt="icon"
            />
          </div>
        </section>
        <section className="landingPage__courses">
          <heading className="landingPage__courses-heading">
            <h1>Browse Our Popular Courses</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </heading>
          <div className="landingPage__courses-categories">
            <button>All categories</button>
            <button>Design</button>
            <button>Development</button>
            <button>Marketing</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
