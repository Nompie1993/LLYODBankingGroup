// src/App.js
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';



function App() {
  const [formData, setFormData] = useState({
    amount: '',
    rate: '',
    term: '',
  });

  const [results, setResults] = useState({
    monthlyPayment: null,
    totalInterest: null,
  });

  const calculate = () => {
    const P = parseFloat(formData.amount);
    const annualRate = parseFloat(formData.rate);
    const years = parseInt(formData.term, 10);

    // Basic validation
    if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate < 0 || years <= 0) {
      alert('Please enter valid positive numbers for amount, rate, and term.');
      return;
    }

    const r = annualRate / 100 / 12;   // monthly interest rate
    const n = years * 12;              // total payments

    // Handle zero interest (simple division)
    let M;
    if (r === 0) {
      M = P / n;
    } else {
      const factor = Math.pow(1 + r, n);
      M = (P * r * factor) / (factor - 1);
    }

    const totalPaid = M * n;
    const totalInterest = totalPaid - P;

    setResults({
      monthlyPayment: M,
      totalInterest,
    });
  };

  return (
    <div className="app-container">
      <Header />
      <InputForm formData={formData} onChange={setFormData} onCalculate={calculate} />
      <Results results={results} />
    </div>
  );
  
}

export default App;