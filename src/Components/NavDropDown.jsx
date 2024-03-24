import React from 'react'
import "../Sass/Navbar.scss"
function NavDropDown({hiddenItems}) {
  return (
    <div className='navDropdown'>
        <ul className='dropDownList'>
            {
                hiddenItems.map((el,ind)=>{
                   return <li>{el}</li>
                })
            }
        </ul>
    </div>
  )
}

export default NavDropDown