import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const navigate = useNavigate();

  
  const handleRegister = (event) => {
    event.preventDefault();

    // Display a success toast
    toast.success('Registration successful!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });

    setTimeout(() => {
      navigate('/');
    }, 2000); 
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className="flex flex-col space-y-4 p-4 border rounded-lg shadow-lg w-md w-1/4 h-1/2" onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' className='p-2 border rounded-md'/>

        <label htmlFor="password">Password</label>
        <input type="text" id='password' className='p-2 border rounded-md'/>

        <button type="submit" className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'>Register</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register
