import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Form from './components/Form';
import Post from './components/Post'
import Another from './components/MainPage';
import Header from './components/Header'
import MainPage from './components/MainPage';
import Home from './components/Home';
import Coco from './components/Coco';
import {useLocalStorage} from './Hooks/useLocalStorage'

const blogPost= [{
   id: 1234566789,
  title: 'La Cucaracia',
  content: 'This song was from my early years',
  color: 'purple'
}]



function App() {

  const addNewPost = (post) =>{
    const newBlog ={
      id: Date.now(),
      title: post.title,
      content: post.content, 
      color: post.color
    }

    setData([...data, newBlog])
  }

const [data, setData] = useLocalStorage('info', blogPost)
// const [data, setData] = useState(blogPost)
console.log(data)
  return (
    <div className="App">
      {/* <Header /> */}
      <MainPage/>
     {/* <nav style={{margin: '20px'}}>
       <Link style={{margin: '20px'}} to="/somewhere">Hello World</Link>
       <Link style={{margin: '20px'}} to="/formie">Formie</Link>

       </nav>  */}

      {/* <Form data={data} addNewPost={addNewPost} /> */}
      
      {/* {data.map(item => (<Post key={item.id} item={item} /> ))} */}

      <Switch>
      <Route exact path="/">
        <Home data={data}/>
        </Route>
      {/* <Route exact path="/formie" component={Form} /> */}
      <Route exact path="/formie">
        <Form addNewPost={addNewPost}/>
      </Route>

      <Route exact path="/coco" component={Coco} />
        

      </Switch>
    </div>
  );
}

export default App;
