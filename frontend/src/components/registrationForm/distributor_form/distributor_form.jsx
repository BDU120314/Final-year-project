import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const DistributorRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Kebele Id" dataBaseColumn="kebele_id" />
    </div>
  );
};

export default DistributorRegistrationForm;
