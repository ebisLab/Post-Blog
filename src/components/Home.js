import React,{useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Another from './Another'
import Form from './Form'
import Post from './Post'

const blogPost= [{
   id: 1234566789,
  title: 'La Cucaracia',
  content: 'This song was from my early years',
  color: 'green'
},
{
    id: 1234566784,
   title: 'Johnny Bravo is the bom',
   content: 'Johnny Bravo he\'s into the multiple relationship thing',
   color: 'orange'
 }
]


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


console.log(data, '<--data')

    return(
    <div>
        This is the home page

         {data.map(item => (<Post key={item.id} item={item} /> ))}

    </div>)
  }

  export default Home