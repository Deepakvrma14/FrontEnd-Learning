import Duties from "./Duties";
import React, { useState } from "react";

const JobInfo =({jobs, currentItem})=>{
    const {company, dates, duties, title} = jobs[currentItem];
    return(
        <article className='job-info'>
            <h3>{title}</h3>
            <h5>{company}</h5>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index)=>{
                return(
                    <Duties key={index} duty={duty}/>
                );
            })}
            {/* {duties.map((duty, index) => {
                return (
                    <div key={index} className='job-desc'>
                        <i className='fas fa-angle-double-right job-icon'></i>
                        <p>{duty}</p>
                    </div>
                );
            })} */}
        </article>
    );
};
export default JobInfo;