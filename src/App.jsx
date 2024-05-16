import { useState } from 'react'
import './App.css'
import './index.css'
import Table from './Table'

import {Users} from './users'

function App() {
  const [query, setQuery] = useState("")
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));

  return (
    <>
     <div className="app flex  item-center justify-center ml-[20rem]">
      <input type="text" placeholder='Search' className='search' name="" id=""
      value={query}
      onChange={(e)=>{setQuery(e.target.value)}}
      />

      <Table
      data={Users}
      query={query}
      
      />


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
