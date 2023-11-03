// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
 


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
          <Routes>
            <Route path='/' exact element={<Header />} />
            <Route path='/Header' exact element={<Sidebar />} />
            <Route path='/Content' exact element={<Content />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
