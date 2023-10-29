import React from 'react'

export default function Box(props) {
    console.log(props)
  return (

    <div className='col-md-4'>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
    </div>
  )
}
