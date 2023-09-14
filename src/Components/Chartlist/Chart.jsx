import React from 'react';
import ChartItem from './Chart/ChartItem';

const Chart = ({chartCourses}) => {

    return (
        <div> 
            <h1 className='mb-2 font-semibold'>Credit Hour Remaining :</h1>
            <hr />
            <div className=' my-4'>
                <h1 className=' font-semibold' >Course Name</h1>
                {
                    chartCourses.map((chart,idx) => <ChartItem key={idx} count={idx} chart={chart}></ChartItem>)
                }
            </div>
            <hr />
            <h1 className='mt-2 mb-2'>Total Credit :</h1>
            <hr />
            <h1 className='mt-2 mb-2'>Total Price : </h1>
            
        </div>
    );
};

export default Chart;