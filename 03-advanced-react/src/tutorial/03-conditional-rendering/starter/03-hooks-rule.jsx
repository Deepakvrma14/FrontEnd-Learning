import { useState, useEffect } from 'react';

const Example = () => {
  // const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  // if (condition) {
  //   return <h2>Hello There</h2>;
  // }
  // // this will also fail
  // useEffect(() => {
  //   console.log('hello there');
  // }, []);
  // return <h2>example</h2>;
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND {text && 'hello world'}</h4>
      <h4>Truthy OR {name || 'hello world'}</h4>
      <h4>Truthy AND {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};

export default Example;