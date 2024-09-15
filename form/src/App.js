import {useRef} from 'react'




function App(){

  function click(event){
    event.preventDefault();
    console.log(inputValue.current.value);
    inputValue.current.value = '';
   
  }
  
  const inputValue = useRef(null)
  return (
  <form onSubmit={click}>
    <label>Enter a number: </label>
    <input type="text" ref={inputValue}></input>
    <button>Submit</button>
  </form>
 )
}

export default App