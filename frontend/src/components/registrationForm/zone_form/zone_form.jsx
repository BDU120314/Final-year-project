import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const ZoneRegistration_form = () => {
  return (
    <div>
      <RegistrationFormate typeName="zone" dataBaseColumn="zone_name" />
    </div>
  );
};

export default ZoneRegistration_form;
