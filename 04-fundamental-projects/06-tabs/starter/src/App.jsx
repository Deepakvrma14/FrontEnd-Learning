const url = 'https://course-api.com/react-tabs-project';
import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async()=>{
    try{
      const response =await fetch(url);
      const newJobs = await response.json();
      setLoading(false);
      setJobs(newJobs);
    } catch(error){
      console.log(error);
    }
  };
  useEffect(() =>{
    fetchJobs();
  },[]);
  console.log(jobs);
  if(loading){
    return(
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>

    </section>
  );


};
export default App;
