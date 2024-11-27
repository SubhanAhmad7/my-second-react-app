import React from 'react'

function Listitem(props) {

    return (

        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.item}</td>
            <td>
                <button onClick={() => { props.deleteItem(props.index) }} className="btn btn-danger me-2">Delete</button>
                <button onClick={() => { props.editItem(props.index) }} className="btn btn-info">Edit</button>
            </td>
        </tr>

    )
}

export default Listitem