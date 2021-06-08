import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import ScrollTop from '../src/components/ScrollTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
      <ScrollTop/>
    </>
  );
}

export default App;
