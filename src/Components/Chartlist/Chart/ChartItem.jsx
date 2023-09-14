import React from 'react';

const ChartItem = ({chart,count}) => {
    // let count=0;
    return (
        <div>
            <h1 className='font-light px-2 py-1'>{count+1}. {chart.Course_title}</h1>
        </div>
    );
};

export default ChartItem;