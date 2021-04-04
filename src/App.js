import logo from './logo.svg';
import './App.css';
import Totals from './containers/totals/totals';
import AllExpenses from './containers/all-expenses/all-expenses';
import AddExpense from './containers/add-expense/add-expense';
import {AppProvider} from './context/AppContext';



const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Totals/>
        <AddExpense/>
        <AllExpenses/>
      </div>
    </AppProvider>
  );
}

export default App;
