import React from 'react'

const Post= (props) =>{

    return(<div>
      <p>Title: {props.item.title}</p>
      <p>{props.item.id}</p>
      <p>Content: {props.item.content} </p>
    </div>)
  }

  export default Post