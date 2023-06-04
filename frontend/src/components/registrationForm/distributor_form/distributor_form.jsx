import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const DistributorRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Distributor" dataBaseColumn="kebele_id" />
    </div>
  );
};

export default DistributorRegistrationForm;
