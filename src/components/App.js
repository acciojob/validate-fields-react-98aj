
import React from "react";
import './../styles/App.css';

const App = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

const userNm = (e)=>{
    setEmail(e.target.value)
}

const pass = (e)=>{
    setPassword(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()

    if(email==='' || pass===''){
        setError(true)
    }else{
        setError(false)
    }
}
  return (
    <div>
        {/* Do not remove the main div */}
     <div className='form'>
            <form onSubmit={handleSubmit}>
            <label>Username: </label><input type='email' value={email} onChange={userNm}/><br/>
            <label>Password: </label><input type='password' value={password} onChange={pass}/><br/>
            {error === true ? (<p>Both username and password is required</p>) : (null)}
            <button type='submit'>Login</button>
            
            </form>
        </div>
    </div>
  )
}

export default App
