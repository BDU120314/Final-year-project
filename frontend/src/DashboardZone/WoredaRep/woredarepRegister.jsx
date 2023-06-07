import React from 'react'
import RegistrationFormate from '../../components/formate/registrationFormate'

const WoredaRegistrationForm = () => {
  return (
    <div>
      <RegistrationFormate typeName="Woreda" dataBaseColumn ="woreda_name" />
    </div>
  );
}

export default WoredaRegistrationForm