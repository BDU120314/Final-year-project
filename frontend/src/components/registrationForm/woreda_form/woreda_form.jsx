import React from 'react'
import RegistrationFormate from '../../formate/registrationFormate'

const WoredaRegistration_form = () => {
  return (
    <div>
      <RegistrationFormate typeName="Woreda" dataBaseColumn ="woreda_name" />
    </div>
  );
}

export default WoredaRegistration_form