import React from "react";
import "./Banner.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink, Outlet } from "react-router-dom";
import { MDBRipple } from "mdb-react-ui-kit";
function Banner() {
  return (
    <div class="container text-center">
      <div class="row">
        <div className="col text-container">
          <h1>Built for restaurants. Built for you.</h1>
          <p>Join Our Foodie Community</p>
          <div className="btn-aligns">
            <MDBBtn size="lg" className="me-2 " active>
              Offers
            </MDBBtn>
            <MDBBtn size="lg" tag="a" href="#" color="secondary" active>
              <NavLink to="/ProductCart">Menu</NavLink>
            </MDBBtn>
          </div>
        </div>
        <div className="col img-container">
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="rounded float-start"
              alt="..."
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </MDBRipple>
        </div>
      </div>
    </div>
  );
}
export default Banner;
