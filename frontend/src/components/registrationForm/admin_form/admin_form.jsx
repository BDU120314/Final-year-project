import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const AdminRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele" dataBaseColumn="kebele_name" />
    </div>
  );
};

export default AdminRegistrationForm;
