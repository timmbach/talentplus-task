import React from "react";
import "./Course.scss";
import yellowStarVector from "../../../../assets/vectors/yellowStarVector.png";
import clockIcon from "../../../../assets/images/clockIcon.png";
import bookIcon from "../../../../assets/images/clockIcon.png";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Course = ({ course }) => {
  return (
    <div className="course__card">
      <img id="courseImage" src={course.imageSrc} alt="Avatar"></img>
      <div className="course__container">
        <div className="course__category">
          <span className="course__categoryName">{course.category}</span>
          <div className="course__rating">
            <p>{course.rating}</p>
            <img src={yellowStarVector} alt="img" />
            <p>({course.studentCount})</p>
          </div>
        </div>
        <h1>{course.title}</h1>
        <div className="course__duration">
          <div className="course__length">
            <img src={clockIcon} alt="png" />
            <p>{course.duration}</p>
          </div>
          <div className="course__lesson-count">
            <img src={bookIcon} alt="png" />
            <p>{course.lessonCount} Lessons</p>
          </div>
        </div>
        <div className="course__instructor-fee">
          <div className="course__instructor">
            <img src={course.instructorIcon} alt="img" />
            <p>{course.instructorName}</p>
          </div>
          <span>{USDollar.format(course.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default Course;
