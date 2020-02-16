import React, {useState} from 'react'

const Form = (props) =>{
    const [info, setInfo] = useState([{
        title: '',
        content: ''
    }])

    const changeHandler = e =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit= e =>{
e.preventDefault();
props.addNewPost(info);
// setInfo({
//     title:'', 
//     content: ''
// })

    }

    console.log('props', props)
    console.log('info', info)

    return(<div style={{width: '200px', display: 'inline-block'}}>
        <h2>Hello World</h2>
        <form onSubmit={handleSubmit}> 
        <label>Title</label>
        <input htmlFor="content" placeholder="Write your title"/>
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