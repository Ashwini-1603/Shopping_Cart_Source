import React, { useState } from "react";
import { addToCart } from "../../Features/CartSlice";
import "./ProductCart.css";

import { useSelector, useDispatch } from "react-redux";
function ProductCart() {
  const itemss = useSelector((state) => state.allCartData.items);
  const dispatch = useDispatch();
const[checkadd,setCheckadd]=useState(false)
function addItemToCart(item){
  dispatch(addToCart(item))

}

  return (
    <div>
      <div className="main-product-container">
        <h1 >Menu</h1>

        {itemss.map((item,i) => (
          <div className="card rounded-3 mb-2" key={i}>
            <div className="card-body p-3">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <img
                    src={item.img}
                    className="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
                  <span >{item.title}</span>
                  
                    <span className="text-muted">₹{item.price}</span>
                  
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 "></div>
                <div className="col-md-3 col-lg-3 col-xl-3 text-end">
            
                <button type="button" onClick={()=>addItemToCart(item)} className="btn btn-primary"> Add
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCart;
//   {itemss.map((item) => (
//             <div className="items-container" key={item.id}>
//               <img src={item.img} style={{ width: "100px", height: "100px" }} />
//               <div className="d-flex">
//                 <div>
//                   <p>{item.title}</p>
//                   <p>{item.price}</p>
//                 </div>
//                 <div>
//                   {" "}
//                   <button>add</button>
//                 </div>

//                 {/* <button type="button" onClick={() => dispatch(addToCart(item))} class="btn btn-primary">Add</button> */}
//                 </div>
//                 </div>

//             ))}
