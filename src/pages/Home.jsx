import { Link } from "react-router-dom"
import MainLayout from '../layouts/MainLayout'


const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Link to='/register'>
          <button>Register</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </MainLayout>
  )
}

export default Home
