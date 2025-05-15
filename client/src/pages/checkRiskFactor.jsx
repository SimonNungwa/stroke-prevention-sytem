import React from "react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import RiskFactorForm from "../components/RiskFactorForm";

const CheckRiskFactor = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Nav />
            <MobileNav />            
            <main className="container mx-auto px-4 py-6 sm:py-8">
                <div className="max-w-4xl mx-auto">
                    <br />
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Stroke Risk Assessment</h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            Please provide your information to evaluate stroke risk factors.
                        </p>
                    </div>

                    {/* Form Component */}<br />
                    <RiskFactorForm />

                    {/* Info Panel */} 
                    <div className="mt-6 sm:mt-8 bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-100">
                        <h3 className="font-semibold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">Why this information matters</h3>
                        <p className="text-blue-700 text-xs sm:text-sm">
                            Your responses help us assess your stroke risk based on established medical indicators.
                            All information is kept confidential and used only for your health assessment.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckRiskFactor;