import React from 'react'
import './Navbar.css'

import { Link  } from 'react-router-dom';
import { toast } from 'react-toastify';

 const Navbar = ( props) => {
    let isLoggeding = props.isLoggeding;
    let setLoggedin = props.setLoggedin;
  return (
    <div className='container'>
        <Link to='/'> <img src='/homework-8533770_1280.png'  />
        </Link>

        <nav className='navtag'>
            <ul className='list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>contact</Link>
                </li>
                <li>
                    <Link to = '/ToDoApp'>ToDoApp</Link>
                </li>


            </ul>
             </nav>

            
            {/* button login and signup dashbord and logout */}
            <div className='Button'> 
                {!isLoggeding&&
                    <Link to="/Iogin">
                        <button>Iogin</button>
                    </Link>
                }
                {!isLoggeding&&
                    <Link to="/signup" >
                        <button >signup</button>
                    </Link> 
                }
                {isLoggeding&&
                    <Link to="/">
                        <button onClick={ () =>{
                            setLoggedin(false)
                            toast.success("log out ");
                        }}>logout</button>
                    </Link>
                }
                {isLoggeding&&
                    <Link to="/Dashborad">
                        <button>Dashborad</button>
                    </Link>
                }
            </div>
        

    </div> 
  )
}


export default Navbar;