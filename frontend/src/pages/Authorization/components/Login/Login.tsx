import React, { useState } from 'react'
import { useAppDispatch } from '../../../../store'
import { loginUser } from '../../../../store/auth/actionCreators'

const Login = () => {
    const dispatch = useAppDispatch()
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     dispatch(loginUser({login, password}))
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="login">Логин</label>
            <input value={login} name="login" type="text" onChange={(e) => setLogin(e.target.value)}  />
            </div>
            <div>
            <label htmlFor="password">Пароль</label>
            <input value = {password} name="password" type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button>Войти</button>
         
      </form>
    </div>
  )
}

export default Login