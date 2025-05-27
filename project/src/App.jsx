import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import googleLogo from './assets/google.svg'
import appleLogo from './assets/apple.svg'
import './index.css'
import Password from './components/InputField'
import InputField from './components/InputField'
function App() {

  return (
    <>
  
      <div className='bg-white flex flex-col items-center rounded-xl m-auto w-max p-8'>
        <p className='text-black text-2xl my-4 font-bold'>Log in with</p>
        <div className='flex flex-row justify-center gap-3'>
          <button className='flex flex-row gap-2 cursor-pointer items-center justify-center bg-gray-300 hover:bg-gray-400 w-36 h-10 border rounded-xs font-bold'>
            <img src={googleLogo} width={22}></img>
            <p>Google</p></button>
            <button className='flex flex-row gap-2 items-center justify-center cursor-pointer bg-gray-300 hover:bg-gray-400 w-36 h-10 border rounded-xs font-bold'>
            <img src={appleLogo} width={22}></img>
            <p>Apple</p></button>
        
        </div>
        
        
        <p className='text-gray-400 my-4'>or</p>
 
 
  <form action="#" className='flex flex-col items-center gap-4 w-full'>
  <InputField type="email" placeholder="Email address" icon="mail" />
  <InputField type="password" placeholder="Password" icon="lock" />
  <a href="#">Forgot password?</a>
</form>

                <button className='bg-violet-500 w-xs cursor-pointer rounded-xs  my-4 p-3 hover:bg-purple-700 font-bold' >Log in</button>
        <div
        className='flex flex-row gap-1 my-2'>
          <p> Don't have an account?</p>
          <a href="#" className='text-purple-700 hover:underline font-bold'>Sign up</a>
        </div>
        
      </div>
    </>
  )
}

export default App
