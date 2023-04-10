import logo from './logo.svg';
import './App.css';
import { Route } from './Routes/Route';
import { Stripe } from './Pages/Stripe';


function App() {
  return (
    <div className="bg-[#F5F8FA] absolute w-full h-full">
      <Stripe />
    </div>
  );
}

export default App;
