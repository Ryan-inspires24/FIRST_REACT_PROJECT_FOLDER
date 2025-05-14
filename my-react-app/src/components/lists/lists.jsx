import React from 'react'

function DefaultItem(props) {
    console.log(props)
    const{id, name} = props.item
    return (
        <div>
            <p>{id}. {name}</p>
        </div>
    )
}

export default DefaultItem