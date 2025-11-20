// src/App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Results from "./components/Results";


function App() {
  const [formData, setFormData] = useState({
    amount: "",
    rate: "",
    term: "",
    type: "fixed",
  });

  const [results, setResults] = useState({
    monthlyPayment: null,
    totalInterest: null,
    schedule: [],
  });

  const calculateFixed = (P, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    if (r === 0) {
      const M = P / n;
      return { monthly: M, totalInterest: M * n - P, schedule: [] };
    }
    const factor = Math.pow(1 + r, n);
    const M = (P * r * factor) / (factor - 1);
    const totalPaid = M * n;
    return { monthly: M, totalInterest: totalPaid - P, schedule: [] };
  };

  const calculateInterestOnly = (P, annualRate) => {
    const r = annualRate / 100 / 12;
    const monthly = P * r; // interest-only payment
    return { monthly, totalInterest: null, schedule: [] };
  };

  const calculateAdjustable = (P, annualRate, years) => {
    // Stub: treat as fixed for now. Later, apply a rate-change array per period.
    return calculateFixed(P, annualRate, years);
  };

  const calculate = () => {
    const P = parseFloat(formData.amount);
    const annualRate = parseFloat(formData.rate);
    const years = parseInt(formData.term, 10);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate < 0 || years <= 0) {
      alert("Please enter valid positive numbers for amount, rate, and term.");
      return;
    }

    let out;
    switch (formData.type) {
      case "interestOnly":
        out = calculateInterestOnly(P, annualRate);
        break;
      case "adjustable":
        out = calculateAdjustable(P, annualRate, years);
        break;
      default:
        out = calculateFixed(P, annualRate, years);
    }

    setResults({
      monthlyPayment: out.monthly,
      totalInterest: out.totalInterest,
      schedule: out.schedule,
    });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="grid-2">
        <InputForm formData={formData} onChange={setFormData} onCalculate={calculate} />
        <Results results={results} />
      </div>
      
    </div>
  );
}

export default App;