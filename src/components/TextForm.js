import React, { useState } from "react";

export default function TextForm(props) {

console.log();

  const handleUpClick = () => {
    //console.log("Uppercase was Clicked : " + text);
    let newText = text.toUpperCase();
    //setText("You have clicked on handleUpClick");
    setText(newText);
    if(text === ""){
      props.showAlert("Please enter the text " , "danger");
    }
    else{
      props.showAlert("Converted to Upper Case " , "success");
    }
  };
  const handleLoClick = () => {
    //console.log("Uppercase was Clicked : " + text);
    let newText = text.toLowerCase();
    //setText("You have clicked on handleUpClick");
    setText(newText);
    if(text === ""){
      props.showAlert("Please enter the text " , "danger");
    }
    else{
      props.showAlert("Converted to Lower Case " , "success");
    }
  };
   const handleClClick = () => {
    
    let newText = '';
   
    setText(newText);
    props.showAlert("Text cleared " , "success")
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard " , "success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    let nText = newText.join(" ");
    if(nText.charAt(0) === ' ' && nText.length > 1){
      nText = nText.slice(1);
    }
    setText(nText);
    props.showAlert("Text Formated " , "success")
  };
  const handlefirstUp = () => {

    let newText = text.split(" ");
    for(let i=0;i<newText.length;i++){
      newText[i]=newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
    }
    setText(newText.join(" "))
    props.showAlert("Converted first letter to capital " , "success");
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const count = (ntext)=>{
    let ar = ntext.split(/\s+/);
    let sum = ar.length;
    if(ntext === ''){
      sum = 0;
    }
    let i = sum-1;
    while(i >= 0){
      if(ar[i] === ""){
        sum--;
      }
      i--;
    }
    return sum;
  }

  const [text, setText] = useState("Enter the text here");

  return (
    <>
      <div className="container"
      style = {{backgroundColor : props.col ,
      color : props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className={`mb-3`}>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode === 'dark' ? '#515151' : 'white' ,color : props.mode === 'dark' ? 'white' : 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={count(text)===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={count(text)===0} className="btn btn-primary my-2" onClick={handleClClick}>
          Clear
        </button>
        
        <button disabled={count(text)===0} className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        
        <button disabled={count(text)===0} className="btn btn-primary my-2" onClick={handleCopy}>
          Copy
        </button>

        <button disabled={count(text)===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        
        <button disabled={count(text)===0} className="btn btn-primary" style={{margin: '8px'}} onClick={handlefirstUp}>
          First letter Upper Case
        </button>
      </div>
      <div className="container"style = {{backgroundColor : props.mode === 'dark' ? props.col : 'white' ,color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>
                {count(text)} words , {text.length} characters</p>
            <p>
                {0.008 * count(text)} Minutes to read.
            </p>
            <h2>Preview</h2>
            <p>{count(text) === 0? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
