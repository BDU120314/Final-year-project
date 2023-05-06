import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const DistributorRegistration_form = () => {
  return (
    <div>
      <RegistrationFormate typeName="Cluster" dataBaseColumn="cluster_name" />
    </div>
  );
};

export default DistributorRegistration_form;
