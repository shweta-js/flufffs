import React from 'react'
import "./Upload.css"
import { Textarea } from 'evergreen-ui'
const Upload = () => {
    const [summary, setSummary] = React.useState('')
    function handleSubmit(e) {
        e.preventDefault();    console.log('You clicked submit.');
      }
    return (
        <div className="upload">
           <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
     
      <Textarea
        className="text-area"
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Enter your summary of poem"
      /> <br></br>
      Summary: {summary}
      
    </div> <form onSubmit={handleSubmit}>
      <button  className="btn" type="submit">Submit</button>
    </form>
        </div>
    )
}

export default Upload
