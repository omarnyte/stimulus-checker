import './PaymentAmountSection.css';
import React from 'react';

function PaymentAmountSection({ income, filingStatus, numberOfChildren, onStartOverClick }) {
  const calculatePaymentAmount = () => {
    const PAYMENT_PER_CHILD = 500;
    const paymentForChildren = numberOfChildren * PAYMENT_PER_CHILD;

    const hardCutoffs = {
      headOfHousehold: 136500,
      married: 198000,
      single: 99000
    };

    const softCutoffs = {
      headOfHousehold: 112500,
      married: 150000,
      single: 75000
    };

    const maximumPayments = {
      headOfHousehold: 1200,
      married: 2400,
      single: 1200
    };

    if (income < softCutoffs[filingStatus]) {
      return maximumPayments[filingStatus] + paymentForChildren;
    } else if (income < hardCutoffs[filingStatus]) {
      const amountOverSoftCutoff = income - softCutoffs[filingStatus];
      const amountToDeduct = (amountOverSoftCutoff / 100) * 5;
      return (maximumPayments[filingStatus] - amountToDeduct) + paymentForChildren;
    } else {
      return 0;
    }
  }

  const formatPaymentAmount = (paymentAmount) => {
    return `$${paymentAmount.toLocaleString()}`;
  };

  const paymentAmount = calculatePaymentAmount();

  return (
    <div className="payment-amount-section-container">
      <div className="payment-amount-container">
        <span>Your estimated payment is {formatPaymentAmount(paymentAmount)}</span>
      </div>

      <footer className="payment-amount-section-footer">
        <button className="restart-button" onClick={onStartOverClick}>
          Start Over
        </button>
      </footer>
    </div>
  );
}

export default PaymentAmountSection;
