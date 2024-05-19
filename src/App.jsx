import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Table from './Table'
import axios from 'axios';

// import {Users} from './users'

function App() {
  const [query, setQuery] = useState("")


  const [data,setData]=useState([]);

  console.log[data];
  
  // const keys=["first_name","last_name","email"];

  useEffect(()=>{
    const fetchUsers=async()=>{
      const res =axios.get('http://localhost:5000')
      setData(res.data)

    }

   fetchUsers();
  },
  [])

  // console.log(Users[120]["email"])
  // console.log(Users.filter(user=>keys.some((key)=> user[key].toLowerCase().includes(query))));

  return (
    <>
     <div className="app flex  item-center justify-center ml-[20rem]">
      <input type="text" placeholder='Search' className='search' name="" id=""
      onChange={(e)=>{setQuery(e.target.value).toLowerCase()}}
      />

     {/* {<Table
      data={[data]}
      
      /> */}
// //

      {/* <ul className="list">
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>(
                  <li className="listItem">{user.first_name}</li>

        ))}
      
      </ul> */}
     </div>
    </>
  )
}

export default App
