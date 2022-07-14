import React from 'react'
import './alert.css'

function Alert(props) {
  return (
    <div className="alert">{props.message}</div>
  )
}

export default Alert