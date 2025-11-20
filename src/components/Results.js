// src/components/Results.js
import React from 'react';

const Results = ({ results }) => {
  const { monthlyPayment, totalInterest } = results || {};

  return (
    <section aria-labelledby="results-title" style={styles.section}>
      <h2 id="results-title" style={styles.heading}>Results</h2>

      {monthlyPayment == null ? (
        <p style={styles.placeholder}>Run a calculation to see your results here.</p>
      ) : (
        <div style={styles.grid}>
          <div style={styles.card}>
            <span style={styles.label}>Monthly Payment</span>
            <strong style={styles.value}>
              {monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </strong>
          </div>
          <div style={styles.card}>
            <span style={styles.label}>Total Interest</span>
            <strong style={styles.value}>
              {totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </strong>
          </div>
        </div>
      )}
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
  placeholder: {
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  card: {
    background: '#f8fafc',
    borderRadius: 8,
    padding: 12,
    border: '1px solid #e5e7eb',
  },
  label: {
    color: '#555',
  },
  value: {
    fontSize: '18px',
  },
};

export default Results;