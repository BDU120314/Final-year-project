import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const DistributorRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Cluster" dataBaseColumn="cluster_name" />
    </div>
  );
};

export default DistributorRegistrationForm;
