import Values from "values.js";
import React, { useState } from "react";
import ColourList from "./ColourList";

import Form from "./Form";
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColour = (color) => {
    try{
      const newColors = new Values(color).all(10);
      setColors(newColors);
    }catch(error){
      toast.error(error.message);
    }
  };
  return (
    
      <main>
        <Form addColour={addColour}/>
      <ColourList colors = {colors} />
      <ToastContainer position='top-center' />
      </main>
    
  );
};

export default App;
