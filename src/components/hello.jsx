import React from 'react'
export default function Hello(props) {
  console.log(props)
  return (
    <div>
      {' '}
      Hello 组件 --- {props.name} --- {props.age}
    </div>
  )
}
