import React from 'react'

const MatchRow = ({match}) => {

    return (
    <>
        <tr>
            <td><img src="jimih.png" alt={`${match.username}`} className="profile-img" width="150" ></img></td>
            <th scope="row">{match.username}</th>
            <td>Open Profile</td>
        </tr>
    </>
  )
}

export default MatchRow