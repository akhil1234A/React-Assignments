import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

function Counter(){
  let [number,setNumber] = useState(1);
  let [userData,setUserData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null)

const fetchUserData = async(id)=>{
  try{
    setLoading(true);
    setError(null);
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUserData(result.data);
    setLoading(false);
  }catch(error){
    setError(error);
    setLoading(false);
  }
}


  useEffect(()=>{
    if(number>0){
      fetchUserData(number);
    }
  },[number])


  return (
    <div className="counter">
      <h1>{number}</h1>
      <div className='buttons'>
      <button onClick={()=>{setNumber(number+1)}}>+</button>
      <button onClick={()=>{setNumber(number>1 ? number-1 : 1)}}>-</button>
      </div>
      {loading && <p className='loading'>Loading</p>}
      {error && <p className='error'>{error.message}</p>}
      {userData && !loading && !error && (<div className="profile_card">
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>)}
    </div>
  )
}

export default Counter