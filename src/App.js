import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

const blogPost= [{
   id: 1234566789,
  title: 'La Cucaracia',
  content: 'This song was from my early years'
}]

const Posts= (props) =>{
  console.log('props in Posts', props)

  return(<div>
    <p>Title: {props.item.title}</p>
    <p>Content: {props.item.content} </p>
  </div>)
}

function App() {

const [data, setData] = useState(blogPost)

  return (
    <div className="App">
      <Form data={data}/>
      {data.map(item => (<Posts key={item.id} item={item} /> ))}
    </div>
  );
}

export default App;
