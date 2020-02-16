import React from 'react'

const Post= (props) =>{
  console.log(props, '<---Posts props')

    return(<div style={{border: '1px solid black', borderRadius: '10px', margin: '30px', padding: '10px', display: 'flex'}}>
      <div style={{width:'150px', height: '150px', borderRadius: '50%', background: `${props.item.color}`}}></div>
      <div style={{margin: '20px'}}>
      <p>Title: {props.item.title}</p>
      <p>{props.item.id}</p>
      <p>Content: {props.item.content} </p>
        </div>
    </div>)
  }

  export default Post