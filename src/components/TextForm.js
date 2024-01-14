import React from 'react'
import { useState } from 'react'
import "./../assets/css/Textform.css"
export default function TextForm(props) {

    const handleUppercase=()=>{
        // console.log("uppercase button clicked");
        let uppercase=text.toUpperCase();
        setText(uppercase);
        props.showalert("Text changed to uppercase","success")

    }
    const handleLowercase=()=>{
        // console.log("lowecase clicked")
        let lowercase=text.toLowerCase();
        setText(lowercase);
        props.showalert("Text changed to Lowercase","success")
    }

    //title case
    const handleTitlecase = () => {
        let lowercase = text.toLowerCase().split(" ");
    
        for (var i = 0; i < lowercase.length; i++) {
            lowercase[i] = lowercase[i].charAt(0).toUpperCase() + lowercase[i].slice(1);
        }
    
        setText(lowercase.join(' '));
        props.showalert("Text changed to Titlecase","success")
    }
    // sentence case 
    const handlSentcase = () => {
        if (text.length > 0) {
            let sentCase= text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            setText(sentCase);
            props.showalert("Text changed to Sentencecase","success")
        }
    }
    
    const handleExtraSpace=()=>{
        let RemoveExtraSpace=text.replace(/\s+/g," ")
        setText(RemoveExtraSpace);
        props.showalert("Extra space is removed","success")

    }

    //copy functionality

    
    const [copie,setCopie]=useState("Copy Text")
    const CopyText=()=>{
        let copytext=document.getElementById("text");
        let Copiedtext=navigator.clipboard.writeText(copytext.value);//used to copy to clipboard
        if (Copiedtext)
        {
            setCopie("Copied")
            props.showalert("Text copied","success")
        }
        
 
        
    }

    // for clearing all text

    const clearText =()=>{
        let clear=document.getElementsByClassName("text").value="";
        setText(clear);
        setCopie("Copy Text")
        props.showalert("Text cleared","success")
        //we can use above method to clear text  or by use settext("") as well as
        // setText("")
    }

    const handleOnChange=(event)=>{//event key word is used to handle the events
        setText(event.target.value)//here event.target.value ,here  it is targetting the value field in the textarea element in html 
        setCopie('Copy Text');//we only used setCopie to change the text (copy text)
    }

    const[text,setText] = useState("");//this is used to change the text fiels to ""
    

    //custom css 
    let margin={

        marginTop:'40px'
    };

    
    

  return (
    <>
    
    <div className="Text-container" style={{color: props.mode==='info'?'black':'white'}} >
        <h2 style={margin} >{props.heading}</h2>
        <div className="mb-3">
            <textarea className="txt-area w-100" style={{backgroundColor: props.mode==='info'?'white':'gray',color: props.mode==='info'?'black':'white'}} name="text" value={text} onChange={handleOnChange} id="text"  ></textarea>
        </div>

        <div className="btn-container">
                <button className="btn btn-info " onClick={handleUppercase} >Convert to Uppper case</button>
                <button className="btn btn-info mx-2" onClick={handleLowercase} >Convert to Lower case</button>
                <button className="btn btn-info " onClick={handleTitlecase}>Convert to Title case</button>
                <button className="btn btn-info mx-2" onClick={handlSentcase}>Convert to Sentence case</button>
                <button className="btn btn-info " onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-info mx-2" onClick={CopyText}>{copie}</button>
                <button className="btn btn-info my-2" onClick={clearText}>Clear</button>
        </div>

    </div>

    <div  className="text-container" style={{color: props.mode==='info'?'black':'white'}} >
        <h4>The summary of your text</h4>

        {/* it calculates the total no of words and its length */}
        <p className="fw-medium" style={{color: props.mode==='info'?'#403D39':'#D5C4AE'}}>Total words: {text.trim().split((/\s+/)).filter(word => word.length > 0).length}  Total Characters: {text.trim().length}</p>

        {/* calculates total time taken for reading text (slow reader) */}
        <p className="fw-medium " style={{color: props.mode==='info'?'#403D39':'#D5C4AE'}}>Minutes to read the above text: {0.008 * text.trim().split(/\s+/).length }</p>

        <h4 >Preview</h4>
        {/* gives preview of above text  */}
        {/* color: text.length > 0 ? 'white' : '#403D39' */}
        <p style={{color: props.mode==='info'?'#403D39':'#D5C4AE' }}>
             {text.length > 0 ? text : 'Enter text in the above Textfield to preview'}
        </p>
        

    </div>
   

    </>
    
  )
}
