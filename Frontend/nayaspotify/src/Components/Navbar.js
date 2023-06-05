import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { loginWithRedirect, logout,user, isAuthenticated } = useAuth0();

  return (
    <>
        <nav className="navbar navbar-expand-lg"  style={{backgroundColor: '#4a83ad'}}>
  <div className="container-fluid">
    <img className='mx-2' style={{maxWidth:'60px', height: 'auto'}} src='https://f-droid.org/repo/oss.krtirtho.spotube/en-US/icon_EaTkEc16Bx_7Z1cLOx4QsbZ7Em7NHK8-yEtLNBh5ixE=.png' alt='Logo'/>
    <Link className="navbar-brand text-light fw-bold" to="/">FALAH KI SPOTIFY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {isAuthenticated && (

          <Link className="nav-link text-light" aria-current="page" to="/mypage">My page</Link>
        )}
        </li>
      </ul>
      {isAuthenticated && (
        <div className='mx-3'>
            <p className='text-light'> {user.email} </p>
        </div>
      )}
      {isAuthenticated ? (
          <button className="btn btn-light  rounded-5"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Log Out</button>
      ):( 
        <button className="btn btn-light mx-2  rounded-5" onClick={() => loginWithRedirect()}>Artist Login</button>
      )}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar