import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const AdminRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele Id" dataBaseColumn="kebele_id" />
    </div>
  );
};

export default AdminRegistrationForm;
