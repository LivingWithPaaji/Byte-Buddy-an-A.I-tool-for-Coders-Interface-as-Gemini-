import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return(
        <div className="main">
            <div className="nav">
                <p>Byte Buddy</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
                {!showResult
                ?<>
<div className="greet">
                    <p><span>Hello, Coder</span></p>
                    <p>How can Byte Buddy help you?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Explain,what are loops in Python?</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>How can I become a FullStack Developer?</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>What is the first language we need to learn for becoming a Software Developer?</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>What is the importance of coding in our life?</p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                </div>

                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt=""/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.code_icon} alt=""/>
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                    </div>
                    }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter any question regarding a Perticular Language"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Byte Buddy may display inaccurate info, including about people, so double check it's responce.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main