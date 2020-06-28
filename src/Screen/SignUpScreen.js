import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {signUp} from '../reducer/action/authAction'
import {useDispatch,useSelector} from 'react-redux'
function SignUpScreen(props){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState({})
    const dispatch = useDispatch()
     const handleValidation = () => {
        let error = {}
        let flag = false
        if (name === '') {
            flag = true
            error[`name`] = ` required fill`
        }
       setError(error)
        return  flag
    }
    
   
    const submitHandler = (e) => {
        e.preventDefault()
       
        if(!handleValidation()){
            const body= {
               name,
               password,
               email
            }
            dispatch(signUp(body))
            props.history.push('/')
        }
    }
    return <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
                <li>
                    <label for='email'>email
                      </label>
                    <input type='text' name='email' id='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </li>
                <li>
                    <label for='email'>Username
                      </label>
                    <input type='text' name='name' id='email' onChange={(e)=>setName(e.target.value)} value={name}/>
                  {error['name']}
                </li>
                <li>
                    <label for='password'>password
                      </label>
                    <input type='password' name='password' id='password'  onChange={(e)=>setPassword(e.target.value)}/>
                </li>
                <li>
                    <label for='password'>Confirm password
                      </label>
                    <input type='password' name='password' id='password'  onChange={(e)=>setPassword(e.target.value)}/>
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
export default SignUpScreen