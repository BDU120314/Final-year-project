import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const AdminRegistration_form = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele" dataBaseColumn="kebele_name" />
    </div>
  );
};

export default AdminRegistration_form;
