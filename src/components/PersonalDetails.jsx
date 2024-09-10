import React from "react";
import { useForm } from "react-hook-form";

const PersonalDetails = ({ nextStep, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: formData.name, email: formData.email },
  });

  const onSubmit = (data) => nextStep(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
