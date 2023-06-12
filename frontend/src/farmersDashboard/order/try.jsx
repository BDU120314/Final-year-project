// may be good
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MAIN_TYPES = [
//   { name: "Seed", subtypes: ["Teff", "Corn", "Barley", "Wheat"] },
//   { name: "Fertilizer", subtypes: ["DAP", "UREA"] },
//   { name: "Chemical", subtypes: ["Pesticide", "Weed killer"] },
// ];

// function OrderForm() {
//   const [formData, setFormData] = useState({
//     input_type: null,
//     subtypeAmounts: {},
//   });
//   const [farmer, setFarmer] = useState([]);
//   const { input_type, subtypeAmounts } = formData;
//   const navigate = useNavigate();
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const farmers_id = storedUser.farmers_id;
//   const role = storedUser.role;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `http://localhost:5001/api/v1/farmers/${farmers_id}`
//       );
//       setFarmer(response.data);
//     };
//     fetchData();
//   }, [farmers_id]);

//   const fname = farmer.length > 0 ? farmer[0].fname : "";
//   const mname = farmer.length > 0 ? farmer[0].mname : "";
//   const kebele_id = farmer.length > 0 ? farmer[0].kebele_id : "";

//   const handleMainTypeChange = (e) => {
//     const { value } = e.target;
//     if (value === input_type) {
//       setFormData({ ...formData, input_type: null, subtypeAmounts: {} });
//     } else {
//       const selectedMainType = MAIN_TYPES.find((type) => type.name === value);
//       const subtypeAmounts = {};
//       if (selectedMainType) {
//         selectedMainType.subtypes.forEach((subtype) => {
//           subtypeAmounts[subtype] = "";
//         });
//       }
//       setFormData({ ...formData, input_type: value, subtypeAmounts });
//     }
//   };

//   const handleSubtypeAmountChange = (e) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       if (value in subtypeAmounts) {
//         // Remove the subtype from the subtypeAmounts if unchecked
//         const { [value]: _, ...updatedSubtypeAmounts } = subtypeAmounts;
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           subtypeAmounts: updatedSubtypeAmounts,
//         }));
//       } else {
//         // Add the subtype to the subtypeAmounts if checked
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           subtypeAmounts: {
//             ...prevFormData.subtypeAmounts,
//             [value]: "",
//           },
//         }));
//       }
//     } else if (type === "number") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         subtypeAmounts: {
//           ...prevFormData.subtypeAmounts,
//           [name]: value,
//         },
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const selectedSubtypes = Object.keys(subtypeAmounts).filter((subtype) => subtypeAmounts[subtype] !== "");
//       const orderData = {
//         fname,
//         mname,
//         input_type,
//         subtypeAmounts: selectedSubtypes.reduce((obj, subtype) => {
//           obj[subtype] = subtypeAmounts[subtype];
//           return obj;
//         }, {}),
//         farmers_id,
//         kebele_id,
//         role,
//       };
//       const response = await axios.post("http://localhost:5001/api/v1/order", orderData);
//       if (response.status === 200) {
//         alert("Order successfully placed");
//         navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center -mt-20 h-[100vh] bg-gray-100 flex-col">
//       <div className="mt-0">
//         <h2 className="text-black font-extrabold leading-10 py-25">
//           Order form for farmers
//         </h2>
//       </div>
//       <form
//         className="flex flex-col items-center bg-gray-200 p-10 gap-10 justify-center"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex items-start justify-left flex-col">
//           <label htmlFor="input_type">Input Type</label>
//           {MAIN_TYPES.map((type) => (
//             <div key={type.name}>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="input_type"
//                   value={type.name}
//                   checked={input_type === type.name}
//                   onChange={handleMainTypeChange}
//                 />
//                 {type.name}
//               </label>
//             </div>
//           ))}
//         </div>

//         {input_type && (
//           <div className="flex items-start justify-left flex-col">
//             <label htmlFor="subtype">Sub Type</label>
//             {MAIN_TYPES.map((type) =>
//               input_type === type.name ? (
//                 type.subtypes.map((sub) => (
//                   <div key={sub} className="flex items-center">
//                     <label>
//                       <input
//                         type="checkbox"
//                         name="subtype"
//                         value={sub}
//                         checked={subtypeAmounts[sub] !== ""}
//                         onChange={handleSubtypeAmountChange}
//                       />
//                       {sub}
//                     </label>
//                     {subtypeAmounts[sub] !== "" && (
//                       <input
//                         type="number"
//                         name={sub}
//                         value={subtypeAmounts[sub]}
//                         onChange={handleSubtypeAmountChange}
//                         className="w-[100px] ml-2"
//                       />
//                     )}
//                   </div>
//                 ))
//               ) : null
//             )}
//           </div>
//         )}

//         <div className="">
//           <button
//             className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px rounded-lg text-center bg-green-400"
//             type="submit"
//           >
//             እዘዝ
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrderForm;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function OrderForm() {
//   const [formData, setFormData] = useState({
//     input_type: "",
//     subtype: "",
//     amount: "",
//   });
//   const [farmer, setFarmer] = useState([]);
//   const { input_type, subtype, amount } = formData;
//   const navigate = useNavigate();
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const farmers_id = storedUser.farmers_id;
//   const role = storedUser.role;
//   const [showAmountForm, setShowAmountForm] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `http://localhost:5001/api/v1/farmers/${farmers_id}`
//       );
//       setFarmer(response.data);
//     };
//     fetchData();
//   }, [farmers_id]);

//   const fname = farmer.length > 0 ? farmer[0].fname : "";
//   const mname = farmer.length > 0 ? farmer[0].mname : "";
//   const kebele_id = farmer.length > 0 ? farmer[0].kebele_id : "";
//   console.log(kebele_id);

//   const handleChange = (e) => {
//     if (e.target.name === 'subtype') {
//       setShowAmountForm(e.target.value !== '');
//     }
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5001/api/v1/order", {
//         fname,
//         mname,
//         input_type,
//         subtype,
//         amount,
//         farmers_id,
//         kebele_id,
//         role,
//       });
//       if (response.status === 200) {
//         alert("Order successfully placed");
//         navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center -mt-20 h-[100vh]  bg-gray-100  flex-col">
//       <div className="mt-0 ">
//         <h2 className="text-black font-extrabold leading-10 py-25">
//           Order form for farmers
//         </h2>
//       </div>
//       <form
//         className="flex flex-col items-center bg-gray-200  p-10 gap-10 justify-center"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex items-start justify-left flex-col">
//           <label htmlFor="input_type">Input Type</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="input_type"
//                 value="Seed"
//                 checked={input_type === "Seed"}
//                 onChange={handleChange}
//               />
//               Seed
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="input_type"
//                 value="Fertilizer"
//                 checked={input_type === "Fertilizer"}
//                 onChange={handleChange}
//               />
//               Fertilizer
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="input_type"
//                 value="Chemical"
//                 checked={input_type === "Chemical"}
//                 onChange={handleChange}
//               />
//               Chemical
//             </label>
//           </div>
//         </div>

//         {input_type === "Seed" && (
//           <div className="flex items-start justify-left flex-col">
//             <label htmlFor="subtype">Sub Type</label>
//             <select
//               id="subtype"
//               name="subtype"
//               className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//               onChange={handleChange}
//               value={subtype}
//               required
//             >
//               <option value="">Select a sub type</option>
//               <option value="Teff">Teff</option>
//               <option value="Corn">Corn</option>
//               <option value="Barley">Barley</option>
//               <option value="Wheat">Wheat</option>
//             </select>
//           </div>
//         )}

//         {input_type === "Fertilizer" && (
//           <div className="flex items-start justify-left flex-col">
//             <label htmlFor="subtype">Sub Type</label>
//             <select
//               id="subtype"
//               name="subtype"
//               className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//               onChange={handleChange}
//               value={subtype}
//               required
//             >
//               <option value="">Select a sub type</option>
//               <option value="DAP">DAP</option>
//               <option value="UREA">UREA</option>
//             </select>
//           </div>
//         )}

//         {input_type === "Chemical" && (
//           <div className="flex items-start justify-left flex-col">
//             <label htmlFor="subtype">Sub Type</label>
//             <select
//               id="subtype"
//               name="subtype"
//               className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//               onChange={handleChange}
//               value={subtype}
//               required
//             >
//               <option value="">Select a sub type</option>
//               <option value="Pesticide">Pesticide</option>
//               <option value="Weed killer">Weed killer</option>
//             </select>
//           </div>
//         )}

//         {showAmountForm && (
//           <div className="flex items-start justify-left flex-col ">
//             <label htmlFor="amount">Amount</label>
//             <input
//               type="number"
//               id="amount"
//               name="amount"
//               value={amount}
//               onChange={handleChange}
//               className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//               required
//             />
//           </div>
//         )}

//         <div className=" ">
//           <button
//             className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px  rounded-lg text-center bg-green-400 "
//             type="submit"
//           >
//             እዘዝ
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrderForm;


// we can select different sub types

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MAIN_TYPES = [
  { name: "Seed", subtypes: ["Teff", "Corn", "Barley", "Wheat"] },
  { name: "Fertilizer", subtypes: ["DAP", "UREA"] },
  { name: "Chemical", subtypes: ["Pesticide", "Weed killer"] },
];

function OrderForm() {
  const [formData, setFormData] = useState({
    input_type: null,
    subtype: null,
    amount: "",
  });
  const [farmer, setFarmer] = useState([]);
  const { input_type, subtype, amount } = formData;
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const farmers_id = storedUser.farmers_id;
  const role = storedUser.role;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/farmers/${farmers_id}`
      );
      setFarmer(response.data);
    };
    fetchData();
  }, [farmers_id]);

  const fname = farmer.length > 0 ? farmer[0].fname : "";
  const mname = farmer.length > 0 ? farmer[0].mname : "";
  const kebele_id = farmer.length > 0 ? farmer[0].kebele_id : "";
  console.log(kebele_id);

  const handleMainTypeChange = (e) => {
    const { value } = e.target;
    if (value === input_type) {
      setFormData({ ...formData, input_type: null, subtype: null });
    } else {
      const selectedMainType = MAIN_TYPES.find((type) => type.name === value);
      setFormData({
        ...formData,
        input_type: value,
        subtype: selectedMainType ? [] : null,
      });
    }
  };

  const handleSubtypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subtype: [...prevFormData.subtype, value],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subtype: prevFormData.subtype.filter((s) => s !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/v1/order", {
        fname,
        mname,
        input_type,
        subtype,
        amount,
        farmers_id,
        kebele_id,
        role,
      });
      if (response.status === 200) {
        alert("Order successfully placed");
        navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center -mt-20 h-[100vh]  bg-gray-100  flex-col">
      <div className="mt-0 ">
        <h2 className="text-black font-extrabold leading-10 py-25">
          Order form for farmers
        </h2>
      </div>
      <form
        className="flex flex-col items-center bg-gray-200  p-10 gap-10 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-left flex-col">
          <label htmlFor="input_type">Input Type</label>
          {MAIN_TYPES.map((type) => (
            <div key={type.name}>
              <label>
                <input
                  type="checkbox"
                  name="input_type"
                  value={type.name}
                  checked={input_type === type.name}
                  onChange={handleMainTypeChange}
                />
                {type.name}
              </label>
            </div>
          ))}
        </div>

        {input_type && (
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="subtype">Sub Type</label>
            {MAIN_TYPES.map((type) =>
              input_type === type.name ? (
                type.subtypes.map((sub) => (
                  <div key={sub}>
                    <label>
                      <input
                        type="checkbox"
                        name="subtype"
                        value={sub}
                        checked={Array.isArray(subtype) && subtype.includes(sub)}
                        onChange={handleSubtypeChange}
                      />
                      {sub}
                    </label>
                  </div>
                ))
              ) : null
            )}
          </div>
        )}

        <div className="flex items-start justify-left flex-col ">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            required
          />
        </div>
        <div className=" ">
          <button
            className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px  rounded-lg text-center bg-green-400 "
            type="submit"
          >
            እዘዝ
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;



// onunhandledrejection
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function OrderForm() {
//   const [formData, setFormData] = useState({
//     input_type: "",
//     amount: "",
//   });
//   const [farmer, setFarmer] = useState([]);
//   const { amount } = formData;
//   const navigate = useNavigate();
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const farmers_id = storedUser.farmers_id;
//   const role = storedUser.role;

//   useEffect(() => {
//     const fetchedData = async () => {
//       const response = await axios.get(
//         `http://localhost:5001/api/v1/farmers/${farmers_id}`
//       );
//       setFarmer(response.data);
//     };
//     fetchedData();
//   }, [farmers_id]);

//   const fname = farmer.length > 0 ? farmer[0].fname : "";
//   const mname = farmer.length > 0 ? farmer[0].mname : "";
//   const kebele_id = farmer.length > 0 ? farmer[0].kebele_id : "";
//   console.log(kebele_id);
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5001/api/v1/order", {
//         fname,
//         mname,
//         input_type: formData.input_type,
//         amount,
//         farmers_id,
//         kebele_id,
//         role,
//       });
//       if (response.status === 200) {
//         alert("Order successfully placed");
//         navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center -mt-20 h-[100vh]  bg-gray-100  flex-col">
//       <div className="mt-0 ">
//         <h2 className="text-black font-extrabold leading-10 py-25">
//           Order form for farmers
//         </h2>
//       </div>
//       <form
//         className="flex flex-col items-center bg-gray-200  p-10 gap-10 justify-center"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex items-start justify-left flex-col ">
//           <label htmlFor="input_type">Input Type</label>
//           <input
//             list="input_type"
//             id="inputs"
//             name="input_type"
//             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//             onChange={handleChange}
//             value={formData.input_type}
//             required
//           />
//           <datalist id="input_type">
//             <option value="Seed"></option>
//             <option value="DAP"></option>
//             <option value="UREA"></option>
//             <option value="Chemical"></option>
//           </datalist>
//         </div>

//         <div className="flex items-start justify-left flex-col ">
//           <label htmlFor="amount">Amount </label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={amount}
//             onChange={handleChange}
//             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
//             required
//           />
//         </div>
//         <div className=" ">
//           <button
//             className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px  rounded-lg text-center bg-green-400 "
//             type="submit"
//           >
//             እዘዝ
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrderForm;
// //remove async await
