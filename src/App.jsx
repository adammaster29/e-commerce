
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductsDetails from "./components/pages/ProductsDetails";
import Login from "./components/pages/Login";
import Purchases from "./components/pages/Purchases";
import NavBarw from "./components/NavBarw";
import LoadinScreen from "./components/LoadinScreen";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  const isloading = useSelector((state) => state.isloading);

  return (
    <div className="App">
      <HashRouter>
        <NavBarw />
        {isloading && <LoadinScreen />}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
         
            <Route path="/" element={<Home />} />
            <Route path="/Products/:id" element={<ProductsDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
