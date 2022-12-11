import React, { useState } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar' id='home'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <NavLink to='/reactproject'><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className='gpt3__navbar-links_container'>
          <ul>
            <li><NavLink to="/reactproject"><p>Home</p></NavLink></li>
            <li><NavLink to="/reactproject/whatgpt3"><p>What is GPT3</p></NavLink></li>
            <li><NavLink to="/reactproject/openai"><p>Open AI</p></NavLink></li>
            <li><NavLink to="/reactproject/casestudies/features"><p>Case Studies</p></NavLink></li>
            <li><NavLink to="/reactproject/library"><p>Library</p></NavLink></li>
          </ul>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
            <ul>
            <li><NavLink to="/reactproject"><p>Home</p></NavLink></li>
            <li><NavLink to="/reactproject/whatgpt3"><p>What is GPT3</p></NavLink></li>
            <li><NavLink to="/reactproject/openai"><p>Open AI</p></NavLink></li>
            <li><NavLink to="/reactproject/casestudies/features"><p>Case Studies</p></NavLink></li>
            <li><NavLink to="/reactproject/library"><p>Library</p></NavLink></li>
          </ul>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar