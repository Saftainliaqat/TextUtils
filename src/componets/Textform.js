import React,{useState} from 'react'

export default function Textform(props) {
    const[text, setText]=useState("");
    const handleupClick=()=>{
        // console.log("handle up click");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>{
        // console.log("handle up click");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleonChange=(event)=>{
// console.log("on Changeee");
setText(event.target.value);
    }
    const handleCleartext=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleExtraSpaces=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra spaces are removed!","success");
    }
const handleCopyText=()=>{
var text=document.getElementById("myBox");
 text.select();
 navigator.clipboard.writeText(text.value);
 props.showAlert("Text Copied!","success");
}
    
    return (
    
    <div
        className="abc" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>{props.title}</h4>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control my-3" style={{backgroundColor:props.mode==='dark'?'rgb(72 55 211)':'white', color:props.mode==='dark'?'white':'black'}} value={text}onChange={handleonChange} id="myBox" rows="8"></textarea>

          <button className="btn btn-primary"onClick={handleupClick}> Convert to uppercase</button>
          <button className="btn btn-primary mx-3"onClick={handleLoClick}> Convert to lowerercase</button>
          <button className="btn btn-primary mx-3"onClick={handleCleartext}> Clear text</button>
          <button className="btn btn-primary mx-3"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-3"onClick={handleCopyText}>Copy Text</button>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>Text Summary</h3>
          <p>{text.split(" ").length} words {text.length} characters </p>
          <p>{0.008 *  text.split(" ").length} minutes to read</p>
          <h3>Preview </h3>
          <p>{text.length>0? text:"Enter something above to preview it here"}</p>
          <p>{text}</p>
        </div>
    </div>
    )
}
