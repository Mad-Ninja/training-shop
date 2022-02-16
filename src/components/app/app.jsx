import { MainPage }  from "../../pages/main-page";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../../pages/product-page";
import { ProductsPage } from "../../pages/products-page";
import { Footer } from "../footer";
import { Header } from "../header";

import "./app.css";

export const App = () => {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
          
        
        <Route exact path="/women" element={<ProductsPage productType="women"/>} />
          
        
        <Route exact path="/men" element={<ProductsPage productType="men"/>} />
         
        <Route path="/women/:id" element={<ProductPage productType="women"/>} />
         
        <Route path="/men/:id" element={<ProductPage productType="men"/>}  />
         
      </Routes>
      <Footer />
    </div>
  );
};
