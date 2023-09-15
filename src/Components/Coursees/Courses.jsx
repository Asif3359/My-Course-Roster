import React from 'react';
import Course from './Course/Course';

const Courses = ({courses, handleSelect  }) => {
    // console.log(courses);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    courses.map( course=> <Course key={course.id} course={course} handleSelect={handleSelect} ></Course>)
                }
            </div>
            
        </>
    );
};

export default Courses;