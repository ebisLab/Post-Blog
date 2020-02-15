import React from 'react'

const Form = () =>{
    return(<div style={{width: '200px', display: 'inline-block'}}>
        <h2>Hello World</h2>
        <label>Title</label>
        {/* <input/> */}
        <input placeholder="Write your title"/>
        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Write your blog" />
        <button>Submit</button>
    </div>)
}

export default Form