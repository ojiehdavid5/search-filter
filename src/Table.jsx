import React from 'react'

const Table = ({data,query}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>SurName</th>
                <th>Email</th>
            </tr>
            {data.filter(user=>user.first_name.toLowerCase().includes(query) || user.last_name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)).map((user)=>(

<tr key={user.id}>
<td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>

</tr>
            ))}

        </tbody>
      
    </table>
  )
}

export default Table
