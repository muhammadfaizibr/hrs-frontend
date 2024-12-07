import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/NavbarStyles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { unSetUserToken, setUserInfo } from "../features/userSlice";
import { getToken,removeToken } from "../services/localStorageService";
import generateUniqueKey from "../features/uniqueKey";
const routes = [
  { name: "Home", link: "/" },
  { name: "Hotels", link: `/listings?query=${encodeURIComponent("best hotels in karachi")}&city=karachi&place_type=hotel&sort_by=recommendations` },
  { name: "Attractions", link: `/listings?query=${encodeURIComponent("best attractions in karachi")}&city=karachi&place_type=attraction&sort_by=recommendations` },
  { name: "Weather", link: "/weather" },
];

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const dispatch = useDispatch()
  const { access_token } = getToken()
  if (access_token){
    routes.push({ name: "Favourites", link: "/favourites" })
  }

  const handleLogout = () =>{
    removeToken()
    dispatch(unSetUserToken({access_token: null}))
    dispatch(setUserInfo({name: "", email: "", designation: ""}))
    navigate('/')

    
  }
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    return () => {
      document.body.style.overflow = 'auto';  
    };
  }, [isMobile]);

  const handleNavigate = (link) => {
    navigate(link)
    setIsMobile(false);

  }
  return (
    <nav>
      <div className="nav-container">

        <div className="group">
          <div className="logo">
            <img
              src="/logo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="group">
          <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
            {routes.map((e, i) => {
              return (
                <li key={generateUniqueKey("nav-links"+e.name+i)}>
                  <button onClick={() => {handleNavigate(e.link)}}  className={`parkinsans-sm-highlited-text ${location.pathname === e.link ? 'active' : ''}`}>
                    {e.name}
                  </button >
                </li>
              );
            })}
          </ul>
        </div>
        <div className="group">
                
          <ul>
            
            { access_token ?<> <button onClick={() => {handleNavigate("/add-place")}} className="parkinsans-sm-highlited-text primary-btn">
                Add Place
              </button><button onClick={handleLogout} className="parkinsans-sm-highlited-text tertiary-btn">
                Logout
              </button></> : <><li>
              <button onClick={() => {handleNavigate("/login")}} className="parkinsans-sm-highlited-text tertiary-btn">
                Login
              </button>
            </li>
            <li>
              <button onClick={() => {handleNavigate("/signup")}} className="parkinsans-sm-highlited-text primary-btn">
                Sign Up
              </button>
            </li></> }
            <div className="burger" onClick={toggleMobileMenu}>
      <RxHamburgerMenu />
      </div>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
