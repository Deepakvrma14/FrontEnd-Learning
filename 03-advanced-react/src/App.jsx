import ErrorExample from './tutorial/01-useState/starter/01-error-example';
import UseStateBasics from './tutorial/01-useState/starter/02-useState-basics'
import UseStateArray from './tutorial/01-useState/starter/03-useState-array'
function App() {
  return (
    <div className='container'>
      <h2>Advanced React</h2>
      <ErrorExample />
      
      <hr/>

      <UseStateBasics/>
      <hr/>
      <UseStateArray/>
    </div>
  );
}

export default App;
