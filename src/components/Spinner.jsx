import React from 'react'
import  ClipLoader  from 'react-spinners/ClipLoader'

const override = {
    display: 'block',
    margin: '100px auto'
}
const Spinner = ({ loading }) => { // taking loading as a prop
  return (
    <ClipLoader  
    color='#433ca'
    loading={loading}
    cssOveride={override}
    size={150}
     />
  )
}

export default Spinner
