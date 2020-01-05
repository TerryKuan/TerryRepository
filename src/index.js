import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/hello'
import Game from './components/game/index.jsx'
// 组件即为函数
// 入参为传递组件数据

let a = { name: 'abc', age: 12 }

ReactDOM.render(
  <div>
    {a.name}
    123 <Hello {...a}> </Hello>
    <Game></Game>
  </div>,
  document.getElementById('app')
)
