import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import StepProcess from "./components/stepprocess/stepprocess"
import Formpayment from "./components/form/formpayment"

import './App.css';
import './components/header/header.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <StepProcess className='d-block d-sm-none' />
      <Formpayment/>
      <Footer/>
    </div>
  );
}

export default App;
