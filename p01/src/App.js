import React, {useState} from 'react'

export const App = () => {
//  const [details, setDetails] = useState({counter: 0, name: ""});
  const [counter, setCounter]= useState(0);
  const [name, setName] = useState("")

  // function increaseCounter(){
  //   setDetails((prev)=>({
  //     ...prev,
  //     counter: prev.counter + 1,
  //   }));

        function increaseCounter(){
    setCounter(counter+1);

  
  }


  return (
    <div>
      <input type='text' onChange={(e)=> setName(e.target.value)} />
      <h1 className='bg'>{name} has cliked {counter} times..! </h1>
      <button className='btn' onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default App;



