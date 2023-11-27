import ErrorExample from './tutorial/01-useState/starter/01-error-example';
import UseStateBasics from './tutorial/01-useState/starter/02-useState-basics'
// useState
import UseStateArray from './tutorial/01-useState/starter/03-useState-array'
import UseStateObject from './tutorial/01-useState/starter/04-useState-object'
import UseStateGotcha from './tutorial/01-useState/starter/05-useState-gotcha'
// useEffect
import CodeExample from './tutorial/02-useEffect/starter/01-code-example'
import MultipleEffects from './tutorial/02-useEffect/starter/03-multiple-effects'
import FetchData from './tutorial/02-useEffect/starter/04-fetch-data' 
import CleanupFunction from './tutorial/02-useEffect/starter/05-cleanup-function'
// conditional rendering
import MultipleReturnsBasics from './tutorial/03-conditional-rendering/starter/01-multiple-returns-basics'
import MultipleReturnsFetchData from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data'
import Example from './tutorial/03-conditional-rendering/starter/03-hooks-rule'
import ShortCircuitEvaluation from './tutorial/03-conditional-rendering/starter/05-short-circuit-examples'
import ToggleChallenge from './tutorial/03-conditional-rendering/starter/06-toggle-challenge'
import UserChallenge from './tutorial/03-conditional-rendering/starter/07-user-challenge'



function App() {
  return (
    <div className='container'>
      <h2>Advanced React</h2>
      {/* <h3>useState</h3>
      <ErrorExample />
      
      <hr/>

      <UseStateBasics/>
      <hr/>
      <UseStateArray/>
      <hr/>
      <UseStateObject/>
      <hr />
      <UseStateGotcha/>
      <hr />
      <hr /> */}
      {/* <CodeExample/> */}
      {/* <hr /> */}
      {/* <MultipleEffects/> */}
      {/* <hr /> */}
      {/* <FetchData/> */}
      {/* <CleanupFunction/> */}
      {/* <MultipleReturnsBasics/> */}
      {/* <MultipleReturnsFetchData/> */}
      {/* <Example /> */}
      {/* <ShortCircuitEvaluation/> */}
      {/* <ToggleChallenge/> */}
      <UserChallenge/>
    </div>
  );
}

export default App;
