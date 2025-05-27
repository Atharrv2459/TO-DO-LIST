import React from 'react'
const SocialLogin = () => {
    return (
        <div>
            <div className='flex flex-row justify-center gap-3'>
          <button className='flex flex-row gap-2 cursor-pointer items-center justify-center bg-gray-300 hover:bg-gray-400 w-36 h-10 border rounded-xs'>
            <img src={googleLogo} width={22}></img>
            <p>Google</p></button>
            <button className='flex flex-row gap-2 items-center justify-center cursor-pointer bg-gray-300 hover:bg-gray-400 w-36 h-10 border rounded-xs'>
            <img src={appleLogo} width={22}></img>
            <p>Apple</p></button>
        
        </div>
        </div>
    )
}
export default SocialLogin