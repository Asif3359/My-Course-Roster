import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './Components/Coursees/Courses'
import Chart from './Components/Chartlist/Chart'

function App() {

  const [courses, setCourses]=useState([]);
  const [chartCourses, setChartCourses]=useState([]);
  const [credit, setCredit]=useState(0);
  const [creditPrice, setCreditPrice]=useState(0);

  useEffect(()=>{

    fetch("/public/courses.json")
    .then(res => res.json())
    .then(data => setCourses(data))
  },[]);
  // console.log(courses);

  const handleSelect = (course,id) =>{

    let totalCredit = course.credit_our ;
    let totalPrice = course.Course_price;
    // console.log(course.credit_our);
    
    const isExist = chartCourses.find( item => item.id === id);

    if(isExist){
      return alert("Already Selected");
    }
    else{  

      chartCourses.forEach( (item) =>{

        totalCredit = totalCredit + item.credit_our;
        totalPrice = totalPrice + item.Course_price 
      });  

      setCredit(totalCredit);
      setCreditPrice(totalPrice);
      setChartCourses([...chartCourses,course]);
    }
     
  }

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center p-2 m-2'>Course Registration</h1>
        <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
          <div className=' w-full md:w-3/4'>
            <Courses courses={courses} handleSelect={handleSelect} ></Courses>
          </div>
          <div className='w-full  md:w-1/4'>
            <Chart chartCourses={chartCourses} credit={credit} creditPrice={creditPrice}></Chart>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
