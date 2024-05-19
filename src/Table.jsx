import React from 'react'

const Table = ({data}) => {
  console.log(data)
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>SurName</th>
                <th>Email</th>
            </tr>
            {data.map((user)=>(

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
