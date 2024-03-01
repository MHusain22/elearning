  import React from "react";
  import Back from "../common/back/Back";
  import CoursesCard from "./CoursesCard";

  const CourseHome = () => {
    return (
      <>
        <h1 style={{color:"red",background:WebGL2RenderingContext}}>Courses</h1>
        <Back title="Explore Courses" />
        <CoursesCard />
        {/* <OnlineCourses /> */}
      </>
    );
  };

  export default CourseHome;
