// src/components/InputForm.js
import React from "react";

const InputForm = ({ formData, onChange, onCalculate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <section className="panel" aria-labelledby="mortgage-details-title">
      <h2 id="mortgage-details-title">Mortgage Details</h2>

      <div className="input-group">
        <label htmlFor="amount">Loan Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="e.g., 500000"
          aria-describedby="amount-help"
          value={formData.amount}
          onChange={handleChange}
        />
        <small id="amount-help" className="muted">Total amount you plan to borrow.</small>
      </div>

      <div className="input-group">
        <label htmlFor="rate">Interest Rate (%)</label>
        <input
          id="rate"
          name="rate"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          placeholder="e.g., 11.5"
          aria-describedby="rate-help"
          value={formData.rate}
          onChange={handleChange}
        />
        <small id="rate-help" className="muted">Annual interest rate (nominal).</small>
      </div>

      <div className="input-group">
        <label htmlFor="term">Term (years)</label>
        <input
          id="term"
          name="term"
          type="number"
          inputMode="numeric"
          min="1"
            placeholder="e.g., 20"
            aria-describedby="term-help"
            value={formData.term}
            onChange={handleChange}
          />
          <small id="term-help" className="muted">Loan duration in years.</small>
      </div>

      <div className="input-group">
        <label htmlFor="type">Mortgage Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="fixed">Fixed Rate</option>
          <option value="adjustable">Adjustable Rate</option>
          <option value="interestOnly">Interest-Only</option>
        </select>
      </div>

      <button className="btn" onClick={onCalculate}>Calculate</button>
    </section>
  );
};

export default InputForm;