import React from 'react'
import './list.css'
function DefaultItem(props) {
    console.log(props)
    const{id, name} = props.item
    return (
        <div className='itemDiv'>
            <p>{id}. {name}</p>
        </div>
    )
}

export default DefaultItem