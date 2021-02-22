import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenses={[expenses[1]]} 
      expenseCount={1}
      expenseTotal={expenses[1].amount}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 2 expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenses={[expenses[0], expenses[1]]} 
      expenseCount={2}
      expenseTotal={expenses[0].amount + expenses[1].amount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});