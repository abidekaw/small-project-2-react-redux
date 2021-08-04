import React from 'react'

const Card = (props) => {
  return (
    <div className={'card' + props.for}>
      {props.children}
    </div>
  )
}

export default Card
