import {  Route, Routes } from "react-router-dom";
import Menu from "../Menu";
import Beverages from "../Beverages";
import Biryani from "../Biryani";
import FIsh from "../FIsh";
import JayaSpecials from "../JayaSpecials";
import MainCourseNonVeg from "../MainCourseNonVeg";
import MainCourseVeg from "../MainCourseVeg";
import Meals from "../Meals";
import Noodles from "../Noodles";
import Rice from "../Rice";
import Roties from "../Roties";
import Salad from "../Salad";
import Soup from "../Soup";
import VegStarters from "../VegStarters";
import NonVegStarters from "../NonVegStarters";
import Cart from "../Cart";
import Manager from "../Manager/Manager";
import Login from "../Login";
import OrderDetailsPage from "../Manager/navpages/OrderDetailsPage";


const Routers = () => {
  return (
    <Routes>
            <Route path="/manager/*" element={<Manager />} />
            <Route path="/" element={<Login/>} />

      <Route path="/order-details/:tableNumber" element={<OrderDetailsPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/beverages" element={<Beverages />} />
      <Route path="/biryani" element={<Biryani />} />
      <Route path="/fish" element={<FIsh />} />
      <Route path="/jayaSpecials" element={<JayaSpecials />} />
      <Route path="/mainCourseNonVeg" element={<MainCourseNonVeg />} />
      <Route path="/mainCourseVeg" element={<MainCourseVeg />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/noodles" element={<Noodles />} />
      <Route path="/rice" element={<Rice />} />
      <Route path="/roties" element={<Roties />} />
      <Route path="/salad" element={<Salad />} />
      <Route path="/soup" element={<Soup />} />
      <Route path="/vegStarters" element={<VegStarters/>} />
      <Route path="/nonvegStarters" element={<NonVegStarters />} />
      <Route path="/cart" element={<Cart />} /> 


    </Routes>
  );
};

export default Routers;
