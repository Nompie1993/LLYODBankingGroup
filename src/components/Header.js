// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mortgage Calculator</h1>
      <p style={styles.subtitle}>Estimate your monthly payment quickly and clearly</p>
    </header>
  );
};

const styles = {
  header: {
    marginBottom: '16px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '28px',
  },
  subtitle: {
    margin: '6px 0 0',
    color: '#555',
  },
};

export default Header;