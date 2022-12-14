import React from 'react'
import loginImage2 from "../assets/loginImage2.png";
import loginImage from "../assets/loginImage.png";
export default function SignUp(){
  return (
<> 
<div class="flex flex-col h-screen justify-center px-[450px]">
  <form class="bg-[#fff] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Choose a username" required/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter a valid email" required/>
    </div>


    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Choose a password *********" required/>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-[#ffbe76] hover:bg-gray-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up !
      </button>
    </div>
    <p className='text-xs flex justify-end pt-5'> <a href='/signin'> Already have an account ? Click here !</a></p>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Konoha Corp. All rights reserved.
  </p>
</div>
<div className='flex justify-end absolute top-[190px] left-25'> 
<img src={loginImage} alt="Hello :)" style={{width: "300px"}}/>
</div>

<div className='flex justify-end absolute top-[190px] left-[1100px]'> 
<img src={loginImage2} alt="Hello :)" style={{width: "300px"}}/>
</div>
</>
  )
}
