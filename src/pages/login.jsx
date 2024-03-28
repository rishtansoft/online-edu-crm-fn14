import React from 'react'
import { useState } from 'react'
import './login.css'
import actionImg from '../img/action.svg'
import showPwdImg from '../img/show.svg'
import hidePwdImg from '../img/hide.svg'
import vim from '../img/Vim.svg'

function login() {

    function handleClick(e){
        e.preventDefault()
    }

    


    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <div className='container'>
            <div className="form">
                <img src={vim} alt="Vim" />
                <h1>Xush kelibsiz!</h1>
                <h4>Login parolingizni kiritib o'z kabinetingizga kiring.</h4>
                <form >
                    <label htmlFor="Login"><span>Login</span></label><br />
                    <input type="text" id='Login' placeholder='Logingizni kiriting' /><br />
                    <label htmlFor="Parol"><span>Parol</span></label><br />
                    <div className="pwd-container">
                        <input
                            name="pwd"
                            placeholder="Parolingizni kiriting"
                            type={isRevealPwd ? 'text' : 'password'}
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <br />
                        <img
                            title={isRevealPwd ? 'Hide password':'Show password'  }
                            src={isRevealPwd ? showPwdImg : hidePwdImg }
                            onClick={() => setIsRevealPwd((prevState) => !prevState)}
                        />
                    </div>



                    <button onClick = {handleClick} className='btn'><span>Kirish</span></button>

                    <h6>Copyright ©  2024 Vim kompaniyasi</h6>
                </form>
            </div>
            <div className="action">
                <img src={actionImg} alt="Action Img" />
            </div>
        </div>
    )
}

export default login