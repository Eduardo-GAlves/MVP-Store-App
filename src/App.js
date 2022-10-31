import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Workplace from './components/layout/Workplace'
import CarrinhoProvider from './context/CarrinhoContext';

function App() {
  return (
    <BrowserRouter> 
      <CarrinhoProvider>
        <Navbar />
        <Workplace/>
        <Footer />
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
