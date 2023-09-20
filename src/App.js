// import './App.css';
import { Routes, Route} from 'react-router-dom'
import styled from 'styled-components'


function App() {
  return (
    <div>
    <h2>hello world!</h2>
    <Routes>
      <Route exact path='/' />
      <Route path='*'/>
    </Routes>
    </div>
  );
}

export default App;
