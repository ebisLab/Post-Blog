import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Post from './components/Post'

const blogPost= [{
   id: 1234566789,
  title: 'La Cucaracia',
  content: 'This song was from my early years',
}]



function App() {

  const addNewPost = (post) =>{
    const newBlog ={
      id: Date.now(),
      title: post.title,
      content: post.content
    }

    setData([...data, newBlog])
  }

const [data, setData] = useState(blogPost)
console.log(data)
  return (
    <div className="App">
      <Form data={data} addNewPost={addNewPost} />
      {data.map(item => (<Post key={item.id} item={item} /> ))}
    </div>
  );
}

export default App;
