import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import ProgressBar from "../components/ProgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const initialData = {
    age: "",
    diagnosis: "",
    schoolType: "",
    supportTypes: [],
    frequency: "",
    requirements: "",
    parentName: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.age) newErrors.age = "Child's age is required";
      if (!formData.diagnosis) newErrors.diagnosis = "Diagnosis is required";
      if (!formData.schoolType) newErrors.schoolType = "Select school type";
    }

    if (step === 2) {
      if (formData.supportTypes.length === 0)
        newErrors.supportTypes = "Select at least one support type";
      if (!formData.frequency) newErrors.frequency = "Choose frequency";
    }

    if (step === 3) {
      if (!formData.parentName) newErrors.parentName = "Name is required";
      if (!formData.email) newErrors.email = "Email required";
      if (!formData.phone) newErrors.phone = "Phone required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  const submit = () => {
    if (validateStep()) {
      console.log("Submitted Data:", formData);
      setSubmitted(true);

      // Clear form after submission
      setFormData(initialData);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-green-600">Thank You!</h1>
        <p className="text-gray-600 mt-2">
          Your request has been submitted successfully.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
      <ProgressBar step={step} />

      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 3 && (
        <Step3 formData={formData} setFormData={setFormData} errors={errors} />
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={prev}
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Previous
          </button>
        )}

        {step < 3 ? (
          <button
            onClick={next}
            className="ml-auto px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            className="ml-auto px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;