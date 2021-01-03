import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4';

const initialExpenses = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"car payment",amount:400},
  {id:uuid(),charge:"credit card bill",amount:1200}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <main>
      <Navbar />

      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total Spending : <span className="total">
          $ {expenses.reduce((acc,curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
      <TourList />
    </main>
  );
}

export default App;
