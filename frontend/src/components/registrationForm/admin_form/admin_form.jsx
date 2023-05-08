import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const AdminRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="admin" dataBaseColumn="kebele_name" />
    </div>
  );
};

export default AdminRegistrationForm;
