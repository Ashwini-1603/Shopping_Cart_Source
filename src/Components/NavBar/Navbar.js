import React, { useEffect } from "react";
import "./Navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn, MDBInputGroup, MDBNavbarLink
} from 'mdb-react-ui-kit';
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../Features/CartSlice";
import { MDBIcon } from 'mdb-react-ui-kit';
function Navbar() {
  const { totalQuantity, cart } = useSelector((state) => state.allCartData);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getCartTotal()) }, [cart])
  return (
    <div className="a">
      <ul>
        <div>
          <NavLink to="/ShoppingCart" >  <h1>Foody</h1></NavLink>
        </div>
        <div className="list-items">
          <ul>
            <li> <NavLink to="/ProductCart">Home</NavLink></li>
            <li> <NavLink to="/ShoppingCart">Blog</NavLink></li>
            <li> <NavLink to="/ShoppingCart">Contact</NavLink></li>
            <li> <NavLink to="/Checkout">Checkout({totalQuantity})</NavLink> </li>
          </ul>
        </div>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
