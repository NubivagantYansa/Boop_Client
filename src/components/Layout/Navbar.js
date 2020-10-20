import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log("props", props);
  return (
    <div>
      {<Link to='/'> Logo </Link>}
      {!props.authenticated && <Link to='/login'> Login </Link>}
      {!props.authenticated && <Link to='/signup'> Signup </Link>}
      {props.authenticated && <Link to='/dashboard'> Your dashboard </Link>}
      {props.authenticated && (
        <Link to={"/"} onClick={props.handleLogout}>
          Logout
        </Link>
      )}
    </div>
  );
};

export default Navbar;
