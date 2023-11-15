import React from "react";

export default function About(props) {
    return (
        <>
            <div className="container ">
                {/* <h2 style={{color:props.mode==='info'? 'black':'white',}}>About Us</h2> */}
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item " style={{ marginTop: "30px" }}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={{ backgroundColor: props.mode === "info" ? "white" : "gray" ,color:props.mode==='info'?'black':'white'}}
                            >
                                About Us
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div
                                className="accordion-body"
                                style={{
                                    backgroundColor: props.mode === "info" ? "white" : "gray",
                                    color: props.mode === "info" ? "black" : "white",
                                }}
                            >
                                <strong>Welcome to TextUtils  Your Text Manipulation Hub! </strong>At TextUtils, our mission
                                is to provide a convenient platform for users to perform various text operations with ease.
                                Whether you need to convert text to uppercase or lowercase, remove extra spaces, or analyze
                                the word count, TextUtils has got you covered. <br />
                                <strong>Key Features:</strong> <br />
                                <ol>
                                        <li><strong>Text Case Conversion:</strong> Quickly convert text to uppercase,lowercase, title case, or sentence case.</li>

            
                                        <li>
                                            <strong>Whitespace Management:</strong> Remove extra spaces and ensure clean and well-formatted text.
                                        </li>

                                        <li><strong>Word Count:</strong>   Get insights into the number of words and characters in your text.</li>
                                        <li>
                                            <strong>Copy to Clipboard:</strong> Easily copy the manipulated text to your clipboard for quick sharing
                                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
