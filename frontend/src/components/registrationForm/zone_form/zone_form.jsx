import React from "react";
import RegistrationFormate from "../../formate/registrationFormate";

const ZoneRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Zone" dataBaseColumn="zone_name" />
    </div>
  );
};

export default ZoneRegistrationForm;
