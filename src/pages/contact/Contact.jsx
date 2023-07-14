import "./contact.css"
import React from 'react'

export default function Contact() {
    
    return (
        <div className="contact">
            <form>
                <div className="contactform">
                    <h2>Contact<small></small></h2>
                    <div className="formName">
                        <label style={{ fontFamily: 'Helvetica (sans-serif)' }}>Enter your name:
                            <input class="textarea"
                                type="text"
                                name="username"
                            />
                        </label>
                    </div>
                    <div className="formName">
                        <label style={{ fontFamily: 'Helvetica (sans-serif)' }}>Enter your Email:
                            <input class="textarea" 
                                type="text"
                                name="username"
                            />
                        </label>
                    </div>
                    <div className="formArea">
                        <textarea class="textarea" placeholder="e.g. Hey there !"></textarea>
                    </div>
                    <input style={{ fontFamily: 'Helvetica (sans-serif)' }} className="formSubmit" type="submit" />
                </div>
            </form>
        </div>
    );
}
