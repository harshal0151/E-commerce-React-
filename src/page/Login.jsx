import { Link } from "react-router-dom"



function Login() {
  return (
   <div className='p-10 w-[50%] m-auto'>
     <form class="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"> 
    <h1 class="text-xl font-semibold lg:text-2xl mb-8">Login</h1>
    
   
    <div class="">
      <label class=""> Email Address </label>
      <input type="email" placeholder="Info@example.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
    </div>
    <div>
      <label class=""> Password </label>
      <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
    </div>
  
    <div>
      <button type="button" class="mt-5 mb-5  w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Get Started</button>
    </div>
   <Link to= "/register" className="text-center ">
   <p>Create New Account</p>
   </Link>
  </form>
   </div>
  
  )
}

export default Login