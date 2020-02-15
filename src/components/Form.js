import React, {useState} from 'react'

const Form = (props) =>{

    const [info, setInfo] = useState([{
        title: '',
        contnet: ''
    }])

    const changeHandler = e =>{
        setInfo(...info, e.target.value)
    }

    const handleSubmit= e =>{
e.preventDefault();

    }

console.log(props, '<-props')

    return(<div style={{width: '200px', display: 'inline-block'}}>
        <h2>Hello World</h2>
        <form onSubmit={handleSubmit}> 
        <label>Title</label>
        <input placeholder="Write your title"/>
        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Write your blog" onChange={changeHandler}/>
        <button>Submit</button>
        </form>

        {}
    </div>)
}

export default Form