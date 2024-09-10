import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const PaymentDetails = ({ prevStep, handleSubmit, formData }) => {
  const { register, handleSubmit: hookSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: { 
      paymentMethod: formData.paymentMethod,
      expDate: formData.expDate,
      cvv: formData.cvv
    }
  });

  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const onSubmit = (data) => {
    handleSubmit(data);
    toast.success('Success');
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Payment Details</h2>
      <form onSubmit={hookSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Card Number:</label>
          <input
            type="text"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your card number"
            {...register('paymentMethod', {
              required: 'Card number is required',
              minLength: {
                value: 19, 
                message: 'Card number must be 16 digits long'
              },
              maxLength: {
                value: 19, 
                message: 'Card number must be 16 digits long'
              },
              validate: (value) => /^\d{4} \d{4} \d{4} \d{4}$/.test(value) || 'Card number must be properly formatted'
            })}
            onChange={(e) => {
              const formattedValue = formatCardNumber(e.target.value);
              setValue('paymentMethod', formattedValue);
            }}
          />
          {errors.paymentMethod && (
            <p className="text-red-500 mt-2 text-sm">{errors.paymentMethod.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Expiration Date:</label>
          <input
            type="text"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="MM/YY"
            {...register('expDate', {
              required: 'Expiration date is required',
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: 'Expiration date must be in MM/YY format'
              }
            })}
          />
          {errors.expDate && (
            <p className="text-red-500 mt-2 text-sm">{errors.expDate.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">CVV:</label>
          <input
            type="text"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="CVV"
            {...register('cvv', {
              required: 'CVV is required',
              pattern: {
                value: /^\d{3,4}$/,
                message: 'CVV must be 3 or 4 digits'
              }
            })}
          />
          {errors.cvv && (
            <p className="text-red-500 mt-2 text-sm">{errors.cvv.message}</p>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default PaymentDetails;
