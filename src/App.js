import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import Header from "./components/Header";
import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts.filter((amount) => amount > 0).reduce((total, amount) => total += amount, 0);
    const expense = amounts.filter((amount) => amount < 0).reduce((total, amount) => total += amount, 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items])

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }
    }>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact >
              <ReportComponent />
            </Route>
            <Route path="/insert">
              <FormComponent onAddItem={onAddItem} />
              <Transaction items={items} />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
