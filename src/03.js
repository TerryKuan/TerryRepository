//
// console.log('oook')

import React from 'react'
import ReactDOM from 'react-dom'

// 创建dom元素
// 参数1 创建元素类型，字符串，表示元素名称
// 参数2 是一个对象或者null， 表示这个dom元素的属性
// 参数3 子节点（包括其他 虚拟DOM 获取 文本子节点）
// 参数n 其他子节点

// const h1 = React.createElement(
//   'h1', {
//     id: 'myh1',
//     title: '我的标题'
//   },
//   ' 这个一个h1'
// )
// const myDiv = React.createElement('div', null, '这是一个div元素', h1)
let a = 10
let str = 'hahaha'
const strArr = ['名字一', '名字二', '名字三', '名字4']
let nameArr = []
strArr.forEach(item => {
  let h5 = <h5>{item}</h5>
  nameArr.push(h5)
})
let nameArr2 = strArr.map(itm => {
  return <h6>{itm}</h6>
})
const myDiv = (
  <div id="mydiv" title="aaa">
    {a}
    <hr />
    {str}
    <hr />
    {nameArr}
    <hr />
    {nameArr2}
    <div className="hahah">!!!!!</div>
  </div>
)

// arg1 要渲染的DOM元素
// arg2 指定页面上的一个容器，只能放dom元素
ReactDOM.render(myDiv, document.getElementById('app'))
