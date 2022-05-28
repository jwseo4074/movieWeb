import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  
  const [keyword, setKeyword] = useState('');
  const [counter, setCounter] = useState(0);
  
  function btnClickFunc () {
    setCounter( (counter) => counter + 1 );
  }

  function inputChangeFunc (event) {
    setKeyword(event.target.value);
  }

  console.log("hello");
  // counter 클릭해도 이거 나오고 keyword 바껴도 이거 나와
  // 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링 되거든 그걸 막아주려고 useEffect 하는거야

  // 결론적으로 hello는 뭐가 바뀔 때 마다 그게 뭐든간에 무조건 실행

  useEffect( 
    () => {
      console.log("hello i am useEffect from counter ")
    } 
    , [counter]);

  useEffect( 
    () => {
      if (keyword.length >= 5) {
        // 5자리 이상이여야 됨
        console.log("hello i am useEffect from keyword ")
      }
    } 
    , [keyword]);
    // 키워드에 아무것도 없는데도 실행되잖아? => 조건 걸어주자

  useEffect( 
    () => {
      console.log("hello i am useEffect from counter, keyword ")
    } 
    , [counter, keyword]);

  return (
    <div className="App">
      <p>
      * console.log("hello");  <br/>
        = {'>'} counter 클릭해도 이거 나오고 keyword 바껴도 이거 나와 <br/>
        = {'>'} 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링 되거든 그걸 막아주려고 useEffect 하는거야 <br/>
        = {'>'} 결론적으로 hello는 뭐가 바뀔 때 마다 그게 뭐든간에 무조건 실행 <br/>
      </p> <hr/>
      <p> * Another thing that React Strict Mode does is run certain callbacks/methods twice (in DEV mode ONLY).</p> <hr/>
      <p> 
        * useEffect : [] 으로 인자 주면 웹 처음 렌더링 될 때 딱 한번만 실행되고 그 뒤론 절대 실행 안된다, <br/>
          ={'>'} 리액트가 지켜보고 있을게 아무것도 없으니까 한번만 실행되고 실행 x <br/>
          ={'>'} 그 괄호 [], 리액트가 쳐다보고 있는 그거를, React.DependencyList 라고 한다. 

      </p> <hr/>
      <div>
        Counter : {counter}
        <br/><br/>
        <button onClick={btnClickFunc}>Click !! </button>
      </div> <hr/>
      <div>
        keyword : {keyword} <br/><br/>
      <input
        value = {keyword}
        type = "text"
        onChange={inputChangeFunc}
        placeholder = "Here! "
      />
      </div>
    </div>
  );
}

export default App;
