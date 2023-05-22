import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const ZoneRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Zone Id" dataBaseColumn="zone_id" />
    </div>
  );
};

export default ZoneRegistrationForm;
