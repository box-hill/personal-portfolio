import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    let sticky = 0;
    let navbar = document.getElementById('navbar');
    window.onload = () => {
      sticky = navbar.offsetTop;
    }
    window.addEventListener('resize', () => {
      sticky = navbar.offsetTop;
    })
    function stickNavBar() {
      if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky');
      }
    }
    window.onscroll = stickNavBar;
  }, [])

  return (
    <nav id='navbar'>
      <div>Aaron Lim</div>
      <ul id='navbar-container'>
        <li>Nav items </li>
        <li>Nav items </li>
        <li>Nav items </li>
      </ul>
    </nav>
  );
}

export default Navbar;
