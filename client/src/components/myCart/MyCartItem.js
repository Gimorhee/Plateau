import React, { useState } from "react";

const MyCartItem = ({ item, deleteItem, changeItemQuantity, user }) => {
  const [data, setData] = useState({
    quantity: 1
  });

  const { quantity } = data;

  const onChange = e => {
    setData({ [e.target.name]: e.target.value });

    const itemId = item._id;
    
    changeItemQuantity({ itemId, quantity})

  }

  return (
    <div className="MyCart-Item">
      <div className="MyCart-Info">
        <img className="MyCart-Image" src={item.image} alt="" />
        <div className="MyCart-Item-Container">
          <h3>
            <strong>{item.name}</strong>
          </h3>
          <h4>${item.price}</h4>
          <h4>Type: {item.type[0].toUpperCase() + item.type.slice(1,item.type.length-1)}</h4>
          <h4>Size: {item.size}</h4>
          <div className="MyCart-Customize">
            <button className="MyCart-Like">
              <i className="far fa-heart"></i>
            </button>
            <select name="quantity" className="MyCart-Quantity" onChange={e => onChange(e)}>
              <option value="default">{item.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
      <i className="fas fa-times" onClick={() => deleteItem(item._id)}></i>
    </div>
  );
};

export default MyCartItem;
