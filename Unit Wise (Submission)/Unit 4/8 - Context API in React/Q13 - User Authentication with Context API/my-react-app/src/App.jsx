import './App.css';
import Login from './components/Login';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <Login />
    </DataProvider>
  );
}

export default App;
