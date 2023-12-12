import { v4 as uuidv4 } from 'uuid';

const Duties = ({duty})=>{
    return(
        <div className='job-desc'>
            <i className='fas fa-angle-double-right job-icon'></i>
            <p>{duty}</p>
        </div>
    );
};

export default Duties;