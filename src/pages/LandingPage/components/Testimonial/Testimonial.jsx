import React from "react";
import "./Testimonial.scss";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial__container">
      <p>
        high-defination video is video of higher resolution and quality than
        standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our
        quality education. the best and largest all-in-one online tutoring
        platform in the worldd definition. high-defination video is video of
        higher resolution and quality than standard definition. build your
        future with our quality education. the best and largest all-in-one
        online tutoring platform in the world
      </p>
      <div className="testimonial__client">
        <img src={testimonial.instructorIcon} alt="img" />
        <div className="testimonial__client-info">
          <p>{testimonial.instructorName}</p>
          <p>{testimonial.instructorProfession}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
