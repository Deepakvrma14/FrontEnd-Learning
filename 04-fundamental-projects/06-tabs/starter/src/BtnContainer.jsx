
const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
    return(
        <div className='btn-container'>
            {jobs.map((job, index) =>{
                return(
                    <button key={job.id} className={`job-btn ${index === currentItem && 'active-btn'}`} onClick={()=>setCurrentItem(index)}> {job.title} </button>
                );
            })}
        </div>
    );
      
};
export default BtnContainer;