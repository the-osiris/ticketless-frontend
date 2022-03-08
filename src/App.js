import './App.css';
import { Navbar } from './components/Navbar/Navbar';
// import LoginForm from './components/LoginForm/LoginForm';
import HomeScreen from './screens/HomeScreen/HomeScreen';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <HomeScreen />
    </>
  );
}

export default App;
