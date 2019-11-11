import React from "react";

const MyCartItem = ({ item, deleteItem }) => {
  return (
    <div className="MyCart-Item">
      <div>
        <img className="MyCart-Image" src={item.image} alt="" />
      </div>
      <div className="MyCart-Item-Container">
        <div>
          <h3>
            <strong>{item.name}</strong>
          </h3>
        </div>
        <div>
          <h4>${item.price}</h4>
        </div>
        <div>
          <h4>Type: {item.type}</h4>
        </div>
        <div>
          <h4>Size: {item.size}</h4>
        </div>
        <div className="MyCart-Customize">
          <button className="MyCart-Like">
            <i className="far fa-heart"></i>
          </button>
          <select name="Item-Quantity" className="MyCart-Quantity">
            <option value="default">{item.quantity}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <i className="fas fa-times" onClick={() => deleteItem(item._id)}></i>
    </div>
  );
};

export default MyCartItem;
