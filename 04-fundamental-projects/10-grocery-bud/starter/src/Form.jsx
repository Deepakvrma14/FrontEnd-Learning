import { useState } from "react";
import { toast } from "react-toastify";



const Form = ( {addItem} )=>{
    const [newItem, setNewItem] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItem){
            console.log('please provide value');
            return;
        }else{
            addItem(newItem);
            console.log(newItem);
            setNewItem('');
            e.target.reset();
            e.target[0].focus();

        }
    }
    return(
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange= {(e) => setNewItem(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};
export default Form;