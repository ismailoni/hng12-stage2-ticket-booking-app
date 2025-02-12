"use client";

import { useState, useEffect } from "react";
import TicketSelection from "@/components/TicketSelection";
import AttendeeForm from "@/components/AttendeeForm";
import TicketDisplay from "@/components/TicketDisplay";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    ticketAmount: "1",
    fullName: "",
    email: "",
    message: "",
    avatar: "",
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Save current step in localStorage
  useEffect(() => {
    localStorage.setItem("currentStep", step);
  }, [step]);

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {step === 1 && <TicketSelection onNext={handleNext} formData={formData} />}
      {step === 2 && <AttendeeForm onNext={handleNext} onPrev={handlePrev} formData={formData} />}
      {step === 3 && <TicketDisplay userData={formData} onPrev={handlePrev} />}
    </div>
  );
};

export default MultiStepForm;
