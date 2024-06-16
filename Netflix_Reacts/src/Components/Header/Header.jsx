import React, { useEffect, useState } from "react";
import "./Header.css"
import NetflixLogo from "../../assets/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
 function Header() {
  const [show, setShow] = useState(false);
  // show initially  = False , setshow is updator function for show
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // wen scrolls the call back function is executed 
      if (window.scrollY > 100) {
        // if vertical scroll is > 100 show is updated to True
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <>
      <div className={`header_outer_wrapper ${show && "nav__black"}`}>
       {/* it means header_outer_wrapper will work anytime but when show is true then new class
        nav_balck will be added to it so if && indicates if only show is true  */}
        <div className='Header_inner_wrapper'>
            <div className='Header_Left'>
            <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix-Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
         </div>;
            <div className='Header_Right'>
            <ul>
            <li>
              <SearchIcon />
            </li>
            <li>

              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
            </ul>

            </div>

        </div>
      </div>
    </>
  )
}
export default Header;




