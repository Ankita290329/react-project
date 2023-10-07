import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from './page1';
import { Page2 } from './page2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" >
            <Route index element={< Page1 />} />
            <Route path="/page2" element={< Page2 />} />
          </Route>
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
