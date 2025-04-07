import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/red">Red Album</Link>
            <Link to="/orange">Orange Album</Link>
            <Link to="/yellow">Yellow Album</Link>
            <Link to="/green">Green Album</Link>
            <Link to="/blue">Blue Album</Link>
            <Link to="/purple">Purple Album</Link>
            <Link to="/black">Black Album</Link>
            <Link to="/white">White Album</Link>
        </div>
    )
}