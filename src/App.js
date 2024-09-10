import React from 'react';
import StepForm from './components/StepForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Multi-step Form</h1>
        <StepForm />
        <Toaster/>
      </div>
    </div>
  );
}

export default App;
