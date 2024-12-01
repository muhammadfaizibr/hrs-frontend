import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/NavbarStyles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const routes = [
  { name: "Home", link: "/" },
  { name: "Hotels", link: "/listing-hotels" },
  { name: "Attractions", link: "/listing-attractions" },
  { name: "Weather", link: "/weather" },
];

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

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
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
        </div>
        <div className="group">
          <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
            {routes.map((e, i) => {
              return (
                <li key={e.name+i}>
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
            
            <li>
              <button onClick={() => {handleNavigate("/login")}} className="parkinsans-sm-highlited-text tertiary-btn">
                Login
              </button>
            </li>
            <li>
              <button onClick={() => {handleNavigate("/signup")}} className="parkinsans-sm-highlited-text primary-btn">
                Sign Up
              </button>
            </li>
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
