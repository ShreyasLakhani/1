import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';
import Result from './Result';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleUpdate = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <PersonalDetails nextStep={handleUpdate} formData={formData} />;
    case 2:
      return <AddressDetails nextStep={handleUpdate} prevStep={prevStep} formData={formData} />;
    case 3:
      return <PaymentDetails prevStep={prevStep} handleSubmit={handleSubmit} formData={formData} />;
    case 4:
      return <Result formData={formData} />;
    default:
      return <div className="text-center">Form Complete</div>;
  }
};

export default StepForm;
