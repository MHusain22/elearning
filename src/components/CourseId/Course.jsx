import React from 'react'
import { useParams } from 'react-router-dom'
import { coursesCard } from '../../dummydata';

const Course = () => {
  const {id} = useParams();

  const course = coursesCard.filter((item) => item.id === +id);

  return (
    <>
    <div>Course {id}</div>
    {
      course.map((item) => (
        <div className="">
        <h1>{item.coursesName}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore nulla quos nemo quas iste facilis odit voluptates officia, debitis magni. Perferendis ab voluptatum illum iure, sit maiores odio! Dolor voluptates animi labore eaque</p>
        </div>
      ))
    }
    </>
    
  )
}

export default Course