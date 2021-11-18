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
      <ul id='navbar-container'>
        <li><a href="#intro-section">Introduction</a></li>
        <li><a href="https://github.com/box-hill">Github</a></li>
        <li><a href="mailto:aaronlim314@gmail.com">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
