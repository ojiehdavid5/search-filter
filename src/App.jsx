import React from 'react'
import {useState,useEffect} from 'react';
import "./App.css";
import axios from 'axios';



const App = () => {

    
  const [data,setData]=useState([]);


  useEffect(()=>{
    const fetchData=async()=>{
      const res= await axios.get('http://localhost:5000');
      setData(res.data)
      // console.log(res.data)

      

    
    }
    fetchData();
  },[])

    const [query,setQuery]=useState("");



  return (
    <div className='app ml-[15rem]'>

      <input
       type='text' 
       placeholder='Search'
        className='search'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        
        />


<table>
<tr className='mb-9'>
   <th>firstname</th>
   <th>lastname</th>
   <th>email</th>
 </tr>
  {data.filter((item)=> item.first_name.toLowerCase().includes(query)).map(user=>(
 <tbody>
 
 <tr  key={user.id} className='mt-9'>

   <th>{user.first_name}</th>
   <th>{user.last_name}</th>
   <th>{user.email}</th>
 </tr>


</tbody>
  ))}
 
</table> 



      
    </div>
  )
}

export default App
