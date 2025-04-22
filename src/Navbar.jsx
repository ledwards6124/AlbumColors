import { Link } from 'react-router-dom'
import './css/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link className="nav-link" to="//">Home</Link>
      <Link className="nav-link red" to="/red">Red Album</Link>
      <Link className='nav-link orange' to="/orange">Orange Album</Link>
      <Link className='nav-link yellow' id='yellow' to="/yellow">Yellow Album</Link>
      <Link className='nav-link green' id='green' to="/green">Green Album</Link>
      <Link className='nav-link blue' id='blue' to="/blue">Blue Album</Link>
      <Link className='nav-link purple' id='purple' to="/purple">Purple Album</Link>
      <Link className='nav-link black' id='black' to="/black">Black Album</Link>
      <Link className='nav-link white' id='white' to="/white">White Album</Link>
    </nav>
  )
}
