import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MAIN_TYPES = [
  { name: "Seed", subtypes: ["Teff", "Corn", "Barley", "Wheat"], unit: "በኪሎ ግራም" },
  { name: "Fertilizer", subtypes: ["DAP", "UREA"], unit: "በኩንታል" },
  { name: "Chemical", subtypes: ["Pesticide", "Weed killer"], unit: "በሌትር" },
];

function OrderForm() {
  const [formData, setFormData] = useState({
    input_type: null,
    subtypeAmounts: {},
  });
  const [farmer, setFarmer] = useState([]);
  const { input_type, subtypeAmounts } = formData;
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

  const handleMainTypeChange = (e) => {
    const { value } = e.target;
    if (value === input_type) {
      setFormData({ ...formData, input_type: null, subtypeAmounts: {} });
    } else {
      const selectedMainType = MAIN_TYPES.find((type) => type.name === value);
      const subtypeAmounts = {};
      if (selectedMainType) {
        selectedMainType.subtypes.forEach((subtype) => {
          subtypeAmounts[subtype] = "";
        });
      }
      setFormData({ ...formData, input_type: value, subtypeAmounts });
    }
  };

  const handleSubtypeAmountChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      if (value in subtypeAmounts) {
        // Remove the subtype from the subtypeAmounts if unchecked
        const { [value]: _, ...updatedSubtypeAmounts } = subtypeAmounts;
        setFormData((prevFormData) => ({
          ...prevFormData,
          subtypeAmounts: updatedSubtypeAmounts,
        }));
      } else {
        // Add the subtype to the subtypeAmounts if checked
        setFormData((prevFormData) => ({
          ...prevFormData,
          subtypeAmounts: {
            ...prevFormData.subtypeAmounts,
            [value]: "",
          },
        }));
      }
    } else if (type === "number") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subtypeAmounts: {
          ...prevFormData.subtypeAmounts,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedSubtypes = Object.keys(subtypeAmounts).filter((subtype) => subtypeAmounts[subtype] !== "");
      const orderData = {
        fname,
        mname,
        input_type,
        subtypeAmounts: selectedSubtypes.reduce((obj, subtype) => {
          obj[subtype] = subtypeAmounts[subtype];
          return obj;
        }, {}),
        farmers_id,
        kebele_id,
        role,
      };
      const response = await axios.post("http://localhost:5001/api/v1/order", orderData);
      if (response.status === 200) {
        alert("Order successfully placed");
        navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubtypeUnit = (subtype) => {
    const mainType = MAIN_TYPES.find((type) => type.name === input_type);
    if (mainType) {
      return mainType.unit;
    }
    return "";
  };

  return (
    <div className="flex justify-center -mt-20 items-center w-screen h-[100vh] bg-gray-100 flex-col">
      <div className="mt-0">
        <h2 className="text-red-800 font-extrabold leading-10]">
          Order form for farmers
        </h2>
      </div>
      <form
        className="flex flex-col items-center bg-white p-10 gap-10 justify-center w-[70%]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-left flex-col gap-5">
          <label htmlFor="input_type">የግብአት አይነት ዋና ክፍል</label>
          {MAIN_TYPES.map((type) => (
            <div key={type.name} className="">
              <label className="flex justify-center items-center gap-5">
                <input
                  type="checkbox"
                  name="input_type"
                  value={type.name}
                  checked={input_type === type.name}
                  onChange={handleMainTypeChange}
                  className=""
                />
                {type.name}
              </label>
            </div>
          ))}
        </div>

        {input_type && (
          <div className="flex items-start justify-left flex-col gap-5">
            <label htmlFor="subtype">የግብአት ንዑስ ክፍል</label>
            {MAIN_TYPES.map((type) =>
              input_type === type.name
                ? type.subtypes.map((sub) => (
                    <div
                      key={sub}
                      className="flex items-center gap-4 border-2 bg-slate-100 text-gray-400"
                    >
                      <label className="flex justify-center items-center gap-5 mr-2">
                        <input
                          type="checkbox"
                          name="subtype"
                          value={sub}
                          checked={subtypeAmounts[sub] !== ""}
                          onChange={handleSubtypeAmountChange}
                          className=""
                        />
                        {sub}
                      </label>
                      {subtypeAmounts[sub] !== "" && (
                        <input
                          type="number"
                          name={sub}
                          value={subtypeAmounts[sub]}
                          onChange={handleSubtypeAmountChange}
                          className="w-[100px] ml-2 gap-4 border-2 bg-gray-50 text-gray-600"
                        />
                      )}
                      {subtypeAmounts[sub] !== "" && (
                        <span>{getSubtypeUnit(sub)}</span>
                      )}
                    </div>
                  ))
                : null
            )}
          </div>
        )}

        <div className="">
          <button
            className="h-10 flex items-center text-white justify-center my-6 w-[100px] bg-48px rounded-lg text-center hover:bg-green-400 bg-green-600"
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
