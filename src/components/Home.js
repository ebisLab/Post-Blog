import React,{useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Another from './Another'
import Form from './Form'

const blogPost= [{
   id: 1234566789,
  title: 'La Cucaracia',
  content: 'This song was from my early years',
}]


const Home= (props) =>{
    const [data, setData] = useState(blogPost)
      const addNewPost = (post) =>{
    const newBlog ={
      id: Date.now(),
      title: post.title,
      content: post.content
    }

    setData([...data, newBlog])
  }


console.log(data)

    return(
    <div>
        This is the home page

         {/* {props.data.map(item => (<Post key={item.id} item={item} /> ))} */}

    </div>)
  }

  export default Home