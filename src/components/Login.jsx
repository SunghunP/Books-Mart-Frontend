import { useState } from 'react'
import styled from 'styled-components'

export default function Login() {
    
    const [login, setLogin] = useState({username: "", password: "",})

    function handleChange(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    function handleClick(e) {
        e.preventDefault()
        console.log(e.target.tagName)
    }

    const StyledDiv = styled.div `
        background: RGBA(96, 67, 55, 0.8);
        border-radius: 40px;
        padding: 40px;
        margin-bottom: 50%;
        display: flex;
        flex-direction: column;
        
        form {
            display: flex;
            flex-direction: column;
            
        }
        .form-child {
            margin: 10px;
        }
    `

    return (
        <StyledDiv className="login-container">
            <form onClick={handleClick}>
                <input 
                    onChange={handleChange} 
                    name="username" 
                    placeholder="UserName"
                    className='form-child'
                />
                <input 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    className='form-child' 
                />
                <button type="submit" className='form-child'>Log In</button>
            </form>
            <button>Create a New Account</button>
        </StyledDiv>
    )
}