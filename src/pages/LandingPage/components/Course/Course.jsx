import React from "react";
import "./Course.scss";

const Course = () => {
  return (
    <div class="course__card">
      <img
        id="courseImage"
        src="img_avatar.png"
        alt="Avatar"
        style="width:100%"
      ></img>
      <div class="course__container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Course;
