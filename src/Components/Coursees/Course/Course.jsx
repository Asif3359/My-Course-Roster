import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
const Course = ({course, handleSelect}) => {
    const {id, cover_image,Course_title, Course_Description, Course_price, credit_our}=course;
    return (
        <div className='flex flex-col justify-between items-start p-5 mb-4 border-2 rounded-lg gap-2'>
            <img className='w-full h-[170px] rounded-lg bg-gray-300' src={cover_image} alt="" />
            <h1 className='font-semibold mt-2'>{Course_title}</h1>
            <p className='mt-2 text-sm text-gray-700 font-light'>{Course_Description}</p>
            <div className='flex  justify-between items-center gap-5 mt-2  '>
                <p className='text-gray-700 font-light'>Price $ {Course_price}</p>
                <span ><FaBookOpen></FaBookOpen></span>
                <p>Credit:{credit_our} hr</p> 
            </div>
            <button onClick={()=>handleSelect(course,id)} className='btn btn-primary w-full mt-2 min-h-0 h-fit py-2 '>Select</button>
        </div>
    );
};

export default Course;