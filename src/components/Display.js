import React from 'react'

const Display = (props) => {
  let key = props.key; 
  let value = props.value; 
  return (
    <>
    <p>{key}</p>
    <p>{value}</p>
    </>
  )
}

export default Display