import React from "react";
import RegistrationFormate from "../../components/formate/registrationFormate";

const AdminRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele" dataBaseColumn="kebele_name" />
    </div>
  );
};

export default AdminRegistrationForm;
