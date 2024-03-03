import {Link } from "react-router-dom"
export default function Header() {
    return (
      <div className="bg-slate-500">
          <div className="flex justify-between items-center  mx-auto p-3">
              <Link to='/'>
                <h1 className="font-bold text-4xl">ShopiX</h1>
                </Link>
              
              <ul className="flex gap-4">

                <Link to='/'><li>Home</li></Link>
                <Link to='/product-listing'><li>Shop Now</li></Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/about'><li>About Us</li></Link>
                        
              </ul>
          </div>
      </div>
    )
  }
  