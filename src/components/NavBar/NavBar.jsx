import React from 'react'
import CartWidgeth from './CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
  <nav className="navbar bg-[url('/public/images/texture.jpg')] " h-px bg-current flex-row flex items-center justify-around justify-items-center bg-cover > 
    
    <div className="Logo"  size-px my-px  mx-px py-px px-px > 
      <img className="imagen" src="../public/images/logo.jpg"  />
    </div>
    
    <div className="secciones" flex flex-row justify-around  >
      
      <a className="link" href="#" my-0 >Notebooks</a> 
        
      <a className="link" href="#">Perifericos</a>
        
      <a className="link" href="#">Hardware</a> 
        
    </div>

    <CartWidgeth/>

  </nav>
)
}

export default NavBar
