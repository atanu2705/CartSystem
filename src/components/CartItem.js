import React from "react";

export default function CartItem(props) {
  const style = {
    image1: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: "white",
    },
    image2: {
      height: 20,
      width: 20,
      marginRight: 5,
    },
  };

  return (
    <>
    
      <div className="cart-item mx-2 my-2">
        <div className="left-side">
          <img
            alt="Pic"
            style={style.image1}
            src={props.product.productimage}

          />

        </div>
        <div className="right-side mx-2">
          <div style={{ fontSize: 20 }} className="mx-2">
            {props.product.productname}
          </div>
          <div className="mx-2">Price : {props.product.productprice}</div>
          <div className="mx-2">Qty : {props.product.productqty}</div>
          <div className="action">
            <div className="action-icon mx-2">
              <img
                alt="increse"
                style={style.image2}
                className="action-icon"
                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                onClick = {()=>{props.plus(props.product)}}

                
                
              />
              <img
                alt="decrese"
                style={style.image2}
                className="action-icon"
                src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                onClick={()=>{props.minus(props.product)}}
              />
              <img
                alt="reset"
                style={style.image2}
                className="action-icon"
                src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                onClick={()=>{props.reset(props.product)}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
