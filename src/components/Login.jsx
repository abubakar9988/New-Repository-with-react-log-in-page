import React from 'react'
import "./Login.css"
const login = () => {
  return (
    <div>
        <div class="container">
        <div class="form">
            <div class="fromcontent">
                <input type="text" placeholder="User name"/>
                <input type="password" placeholder="password"/>
                <input type="submit" value="LOGIN" class="submit"/>
            </div>
       
        <div class="footer">
            <p class="register">Now registered?</p>
            <p class="link">Create an Account</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default login