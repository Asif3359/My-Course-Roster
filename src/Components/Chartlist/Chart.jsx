import React from 'react';
import ChartItem from './Chart/ChartItem';

const Chart = ({chartCourses, credit, creditPrice, remainingCreditHr}) => {

    return (
        <div className='flex flex-col justify-between items-start'> 
            <h1 className='mb-2 font-semibold text-blue-500 text-lg'>Credit Hour Remaining : {remainingCreditHr} hr</h1>
            <hr />
            <div className='py-3 border-t-4 border-gray-400 w-full'>
                <h1 className=' font-semibold text-lg' >Course Name</h1>
                {
                    chartCourses.map((chart,idx) => <ChartItem key={idx} count={idx} chart={chart}></ChartItem>)
                }
            </div>
            <hr />
            <h1 className=' py-3 border-t-4 border-gray-400 w-full '>Total Credit : {credit} hr </h1>
            <hr />
            <h1 className=' py-3 border-t-4 border-gray-400 w-full'>Total Price : ${creditPrice.toFixed(2)}</h1>
            
        </div>
    );
};

export default Chart;