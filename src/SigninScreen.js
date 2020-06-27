import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const submitHandler = () => {
        alert(`hello world`)
    }
    return <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
                <li>
                    <label for='email'>email
                      </label>
                    <input type='text' name='email' id='email' />
                </li>
                <li>
                    <label for='password'>password
                      </label>
                    <input type='password' name='password' id='password' />
                </li>
                <li>
                    <button type='submit' className='button primary'>Submit</button>
                </li>
                <li> new to amzona?
                </li>
                <li>
                    <Link to={'/signup'} className='button secondart text-center'>create a new account </Link>
                    </li>
            </ul>

        </form>
    </div>
}
export default SignIn