import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div claseName="expense-item">
      <div>March 28 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
