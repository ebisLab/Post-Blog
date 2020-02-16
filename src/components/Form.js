import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useLocalStorage} from '../Hooks/useLocalStorage'


const Form = (props) =>{
    
    const [info, setInfo] = useLocalStorage('item', [{
        title: '',
        content: '',
        color: ''
    }])
    const history = useHistory();

    const changeHandler = e =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit= e =>{
        
e.preventDefault();
props.addNewPost(info);
setInfo({
    title:'', 
    content: '', 
    color: ''
})
history.push('/')

console.log('info', info)
    }
    

    return(
    
    <div style={{width: '200px', display: 'inline-block'}}>
        <h2>Hello World</h2>
        <form onSubmit={handleSubmit}> 

        
        <label htmlFor="title">Title</label>
        <input  id="title"
        name="title"
        type="text"
        value={info.title}
        onChange={changeHandler}
        placeholder="Write your title"/>

<label htmlFor="color">Color</label>
        <input  id="color"
        name="color"
        type="text"
        value={info.color}
        onChange={changeHandler}
        placeholder="color"/>

        <textarea 
        id="content"
        name="content"
        type="text"
        value={info.content}
        rows="4" cols="50" 
        form="usrform"
        placeholder="Write your blog"
        onChange={changeHandler}/>
        <button>Submit</button>
        </form>


    </div>)
}

export default Form