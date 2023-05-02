import React from "react";
import './order.css'
const OrderFOrm = () => {
  return (
    <div className="orderForm">
      <div className="text">
        <h2>Order form for farmers</h2>
      </div>
      <form action="" className="forms">
        <div className="input_label">
          <div className="lables">
            <label htmlFor="firstName">First name </label>
          </div>
          <div className="inputs">
            <input type="text" name="fname" id="firstName" />
          </div>
        </div>
        <div className="input_label">
          <div className="lables">
            <label htmlFor="middle name">Father name </label>
          </div>
          <div className="inputs">
            <input type="text" name="mname" id="middle name" />
          </div>
        </div>
        <div className="input_label">
          <div className="lables">
            <label htmlFor="inputs">Input Type</label>
          </div>
          <div className="inputs">
            <input list="input_type" id="inputs" name="inputType" />
            <datalist id="input_type">
              <option value="Seed"></option>
              <option value="DAP"></option>
              <option value="UREA"></option>
              <option value="Chemical"></option>
            </datalist>
          </div>
        </div>
        <div className="input_label">
          <div className="lables">
            <label htmlFor="cluster">ጉድኝት</label>
          </div>
          <div className="inputs">
            <input  id="cluster" name="clusterName" type="text" />
          </div>
        </div>
        <div className="input_label">
          <div className="lables">
            <label htmlFor="woreda">Woreda Name</label>
          </div>
          <div className="inputs">
            <input  id="woreda" name="woredaName" type="text" />
          </div>
        </div>
        <div className="input_label">
          <div className="lables">
            <label htmlFor="id">ID </label>
          </div>
          <div className="inputs">
            <input  id="id" name="id" type="number" />
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderFOrm;
