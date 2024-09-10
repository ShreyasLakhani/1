import React from 'react';
import { useForm } from 'react-hook-form';

const AddressDetails = ({ nextStep, prevStep, formData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { address: formData.address }
  });

  const onSubmit = (data) => nextStep(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Address:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
            Back
          </button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
