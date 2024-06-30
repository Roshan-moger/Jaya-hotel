import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./Components/Routes/Routes";
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <CartProvider>
  
      <Routers />
   
  </CartProvider>
  );
}

export default App;
