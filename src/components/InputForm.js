// src/components/InputForm.js
import React from 'react';

const InputForm = ({ formData, onChange, onCalculate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <section aria-labelledby="input-form-title" style={styles.section}>
      <h2 id="input-form-title" style={styles.heading}>Mortgage Details</h2>

      <div style={styles.field}>
        <label htmlFor="amount">Loan Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="0"
          placeholder="e.g., 500000"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="rate">Interest Rate (%)</label>
        <input
          id="rate"
          name="rate"
          type="number"
          min="0"
          step="0.01"
          placeholder="e.g., 11.5"
          value={formData.rate}
          onChange={handleChange}
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="term">Term (years)</label>
        <input
          id="term"
          name="term"
          type="number"
          min="1"
          placeholder="e.g., 20"
          value={formData.term}
          onChange={handleChange}
        />
      </div>

      <button style={styles.button} onClick={onCalculate}>
        Calculate
      </button>
    </section>
  );
};

const styles = {
  section: {
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  heading: {
    marginTop: 0,
    fontSize: '20px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#0066cc',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default InputForm;