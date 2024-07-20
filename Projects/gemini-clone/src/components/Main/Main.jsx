import React from 'react'
//
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);  
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Hello</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Hello</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Hello</p>
                        <img src={assets.question_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Hello</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>

                    </div>
                    <p className="bottom-info">
                        asdfasfasfasdfasdfasdf
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Main