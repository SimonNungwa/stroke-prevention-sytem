import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const RiskFactorForm = () => {
    // Form state
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "",
        heartDisease: "",
        everMarried: "",
        workType: "",
        residenceType: "",
        avgGlucose: "",
        bmi: "",
        smokingStatus: ""
    });

    // Form steps configuration
    const steps = [
        {
            id: "gender",
            title: "What is your gender?",
            options: ["Male", "Female"],
            type: "radio"
        },
        {
            id: "age",
            title: "What is your age?",
            type: "number",
            placeholder: "Enter your age"
        },
        {
            id: "hypertension",
            title: "Do you have hypertension?",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            id: "heartDisease",
            title: "Do you have heart disease?",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            id: "everMarried",
            title: "Have you ever been married?",
            options: ["Yes", "No"],
            type: "radio"
        },
        {
            id: "workType",
            title: "What is your work type?",
            options: ["Private", "Self-employed", "Government", "Children", "Never worked"],
            type: "radio"
        },
        {
            id: "residenceType",
            title: "What is your residence type?",
            options: ["Urban", "Rural"],
            type: "radio"
        },
        {
            id: "avgGlucose",
            title: "What is your average glucose level?",
            type: "number",
            placeholder: "mg/dL"
        },
        {
            id: "bmi",
            title: "What is your BMI?",
            type: "number",
            placeholder: "kg/m²"
        },
        {
            id: "smokingStatus",
            title: "What is your smoking status?",
            options: ["Never smoked", "Formerly smoked", "Currently smokes"],
            type: "radio"
        }
    ];

    // Handle form inputs change
    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    // Navigate between steps
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            // Scroll to top of form when navigating to next step
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            // Scroll to top of form when navigating to previous step
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Submit form handler
    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("Risk factors submitted successfully!");
    };

    // Current step
    const currentStepData = steps[currentStep];

    return (
        <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
            {/* Progress indicator */}
            <div className="mb-6 sm:mb-8">
                <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                        Step {currentStep + 1} of {steps.length}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-blue-500">
                        {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Step content */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">{currentStepData.title}</h2>

                {currentStepData.type === "radio" && (
                    <div className="space-y-2 sm:space-y-3">
                        {currentStepData.options.map(option => (
                            <div
                                key={option}
                                onClick={() => handleChange(currentStepData.id, option)}
                                className={`flex items-center p-3 sm:p-4 border rounded-xl cursor-pointer transition-colors ${formData[currentStepData.id] === option
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <div className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full border flex items-center justify-center ${formData[currentStepData.id] === option
                                        ? "border-blue-500"
                                        : "border-gray-300"
                                    }`}>
                                    {formData[currentStepData.id] === option && (
                                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full"></div>
                                    )}
                                </div>
                                <span className="ml-3 font-medium text-sm sm:text-base text-gray-700">{option}</span>
                            </div>
                        ))}
                    </div>
                )}

                {currentStepData.type === "number" && (
                    <div className="mt-2">
                        <input
                            type="number"
                            value={formData[currentStepData.id]}
                            onChange={(e) => handleChange(currentStepData.id, e.target.value)}
                            placeholder={currentStepData.placeholder}
                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium ${currentStep === 0
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                        }`}
                >
                    <ArrowLeft size={16} className="mr-1 sm:mr-2" />
                    <span className="hidden xs:inline">Previous</span>
                </button>

                {currentStep < steps.length - 1 ? (
                    <button
                        onClick={nextStep}
                        disabled={!formData[currentStepData.id]}
                        className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium ${!formData[currentStepData.id]
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        <span className="hidden xs:inline">Next</span>
                        <ArrowRight size={16} className="ml-1 sm:ml-2" />
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={!formData[currentStepData.id]}
                        className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium ${!formData[currentStepData.id]
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        <span className="hidden xs:inline">Submit</span>
                        <CheckCircle size={16} className="ml-1 sm:ml-2" />
                    </button>
                )}
            </div>

            {/* Form data preview (for development) */}
            {/* Uncomment this to see the form data during development
      <div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
      */}
        </div>
    );
};

export default RiskFactorForm;