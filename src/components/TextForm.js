import React, {useState} from 'react';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
*/
const TextForm = (props) => {
        const [text, setText]=useState('');
        
        const handleUpClick = () =>{
            //console.log("Uppercase Clicked");
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase !!","success")
        }

        const handleLoClick = () =>{
            //console.log("Uppercase Clicked");
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase !!","success")
        }

        const handleClearClick =() =>{
            setText('');
            props.showAlert("Text Cleared !!","success")
        }
         
        const handleOnChange = (event) =>{
            //console.log("On change");
            setText(event.target.value);
        }

        const handleCopyClick =() =>{
            let txt=document.getElementById("myBox");
            txt.select();
            navigator.clipboard.writeText(txt.value);
            props.showAlert("Text Copied !!","success")
        }

        const handleExtraSpaces =() =>{
            let newText=text.split(/[  ]+/);
            setText(newText.join(" ")); 
            props.showAlert("Extra Spaces Removed !!","success")
        }
        function wordCount(content){
            if(content===""){
              return 0;
            }
            let arr = content.split(" ");
            let len = arr.length;
            let count=0;
            
            for(let i=0;i<len;i++){
              if(arr[i]==='' || arr[i]===' '){
                 count++;
              }
            }
            return len-count;
          }

    return (
        <>
    <div className='container'style={{color: (props.mode==='dark'?'white':'black')}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode==='dark'?'#495057':'white') , color: (props.mode==='dark'?'white':'black')}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: (props.mode==='dark'?'white':'black')}}>
        <h1>Your Text Summary</h1>
        <p>{wordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * wordCount(text)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview !!"}</p>
    </div>
        </>
    )
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;