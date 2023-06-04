import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const AdminRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele" dataBaseColumn="kebele_id" />
    </div>
  );
};

export default AdminRegistrationForm;
