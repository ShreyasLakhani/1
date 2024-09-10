import React from "react";
import { NotebookPen } from "lucide-react";
import { Mail } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { CreditCard } from 'lucide-react';

const Result = ({ formData }) => {
  return (
    <div>
      <h2 className="text-xl text-center font-semibold mb-4">
        Form Submission Results
      </h2>
      <div className="mb-4">
        <div className="flex items-center">
          <span><NotebookPen size={15} /></span>
          <span className="text-sm font-semibold mx-1 w-[90px]"> Name:</span>
          <span>{formData.name} </span>
        </div>
        <div className="flex items-center">
          <span><Mail size={15}/></span>
          <span className="text-sm font-semibold mx-1 w-[90px]">Email:</span>
          <span>{formData.email} </span>
        </div>
        <div className="flex items-center">
          <span><MapPinHouse size={15}/></span>
          <span className="text-sm font-semibold mx-1 w-[90px]">Address:</span>
          <span>{formData.address}</span>
        </div>
        <div className="flex items-center">
          <span><CreditCard size={15}/></span>
          <span className="text-sm font-semibold mx-1 w-[90px]">Card Number:</span>
          <span>{formData.paymentMethod}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
