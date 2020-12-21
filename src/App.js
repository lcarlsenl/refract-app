import './App.css';
import Navbar from './Components/Navbar';
import Inventory from './Components/Inventory';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Agenda from './Components/Agenda';
import Customers from './Components/Customers';

function App() {
  return (
      <div>
          
          <Navbar />
          <br />
          <div id="agen">
              <Calendar />
              <Agenda />
          </div>
          <div id="invin">
              <Inventory />
          </div>
          <div id="info">
              <Customers />
          </div>
    </div>
  );
}

export default App;
