import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { coursesCard } from "../../dummydata";
import "./Course.css";
import { courseData } from "../../dummydata";

const Course = () => {
  const { id } = useParams();

  const course = coursesCard.filter((item) => item.id === +id);

  const [hide, setHide] = useState(false);

  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    } else {
      setselected(i);
    }
  };

  return (
    <>
      <div>Course {id}</div>
      {course.map((item) => (
        <div className="">
          <h1>{item.coursesName}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            inventore nulla quos nemo quas iste facilis odit voluptates officia,
            debitis magni. Perferendis ab voluptatum illum iure, sit maiores
            odio! Dolor voluptates animi labore eaque
          </p>
          <ul className="list">
            {courseData.map((data, i) => (
              <>
                <li className="lsmain" onClick={() => toggle(i)}>
                  {data.name}
                </li>
                <ul className={selected === i ? "show" : "down"}>
                  {data.list.map((val) => (
                    <Link to={`/chapter/${val.cid}`}>
                      <li className="contentls">{val.chpname}</li>
                    </Link>
                  ))}
                </ul>
              </>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Course;
