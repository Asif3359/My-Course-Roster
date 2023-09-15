# Assignment 7

# Project Feature .
 1. SELECT YOUR REQUIRED COURSE:   
-You can select courses as per your wish but your courses cannot exceed 20 credit hours.

 2. COURSE NAME:  
-When you select a course. Then you can see the names of those courses on the chart. And you can delete it later as you wish. (But that option is not added here).

 3. TOTAL PRICE: 
-When you select your courses. Then the total cost of your courses will be shown on the chart

 4. CREDIT HOUR AND REMAINING CREDIT HOUR:  
-If the remaining credit hour in the chart is below 0 then you cannot select any course after that. And you will get an error alert. Similarly if your credit hour is more than 20 you will be given an error alert.

# Discuss how to managed the state of assignment project

1. Initializing State Variables:

    
  const [courses, setCourses]=useState([]);
  const [chartCourses, setChartCourses]=useState([]);
  const [credit, setCredit]=useState(0);
  const [creditPrice, setCreditPrice]=useState(0);
  const [remainingCreditHr, setRemainingCreditHr]=useState(20);
     


2. Fetching Data and Updating State:
use the useEffect hook to fetch data from a JSON file when the component mounts. Once the data is fetched, you update the courses state variable using setCourses(data). This ensures that your component has access to the course data.

useEffect(()=>{

    fetch("/courses.json")
    .then(res => res.json())
    .then(data => setCourses(data))
  },[]);




3. Updating State on User Interactions:

In the handleSelect function, you update the state based on user interactions.

    
    const handleSelect = (course,id) =>{
    let totalCredit = course.credit_our ;
    let totalPrice = course.Course_price;
    
    const isExist = chartCourses.find( item => item.id === id);

    if(isExist){
      swal({
        title: "Already Selected",
        text: "You can select another course",
        icon: "error",
        button: "ok",
      });
    }
    else{  

      chartCourses.forEach( (item) =>{

        totalCredit = totalCredit + item.credit_our;
        totalPrice = totalPrice + item.Course_price;
 
      });

      if((remainingCredit  < 0) || (totalCredit > 20)){
        swal({
          title: "Already Fill your Credit hour",
          text: "You can select after your courses finished",
          icon: "error",
          button: "ok",
        });
      }

      else{
        remainingCredit = remainingCredit - totalCredit;
        setRemainingCreditHr(remainingCredit); 
        setCredit(totalCredit);
        setCreditPrice(totalPrice);
        setChartCourses([...chartCourses,course]);
      }
    }
  }




4. The handleSelect function in your code is responsible for managing the selection of courses in your course registration application. Here's a brief explanation of how it works:
1.	Initialization:

•	totalCredit and totalPrice are initialized with the values from the selected course (course.credit_our and course.Course_price, respectively).

•	isExist is checked to see if the selected course is already in the chartCourses array. This is done by searching for a course with the same id in the chartCourses array.

2.	Checking If the Course is Already Selected:

•	If isExist is true, it means the course is already in the user's selected courses list. In this case, a notification (using the swal library) is shown to inform the user that they cannot select the same course again.

3.	Selecting a New Course:

•	If the course is not already selected (isExist is false), the code proceeds to calculate the total credits and total price of all the courses in the chartCourses array.

•	It loops through the chartCourses array and accumulates the credits and prices of the selected courses.

4.	Checking Credit Limit:

•	Next, it checks if adding the credits of the newly selected course (totalCredit) to the credits of the courses already in the chart (totalCredit accumulated in the loop) exceeds a credit limit (in this case, 20 credits). It also checks if the remaining credit hours (remainingCredit) fall below zero.

•	If either condition is met (exceeding credit limit or negative remaining credits), a notification is shown to inform the user that they cannot select more courses.

5.	Updating State:

•	If the course selection is valid (within credit limits), it updates the following state variables:

    •	remainingCreditHr: Decreases the remaining credit hours by subtracting the totalCredit.
    •	credit: Updates the total credits based on the new selection.
    •	creditPrice: Updates the total price based on the new selection.
    •	chartCourses: Adds the newly selected course to the chartCourses array.
     



# React
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
