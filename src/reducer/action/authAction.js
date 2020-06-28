import axios from 'axios'

export const signUp = (data)=>async(dispatch,getState) =>{
    try {
        const res = await axios({
            method:'post',
            url:'http://localhost:5000/api/v1/users/signup',
            data: data
        })
       localStorage.setItem('userData',JSON.stringify(data))
        
    } catch (error) {
        console.log(error)
    }
}