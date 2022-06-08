import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Sheard/Header/Header";
import Footer from "./pages/Sheard/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/Sheard/NotFound/NotFound";
import Blog from "./pages/Home/Blog/Blog";
import "./App.css";
import Login from "./pages/Links/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Links/Register/Register";
import InventoryDetails from "./pages/Home/InventoryDetails/InventoryDetails";
import RequireAuth from "./pages/Sheard/RequireAuth/RequireAuth";
import ManageItems from "./pages/Home/ManageItems/ManageItems";
import AddProduct from "./pages/Home/AddProduct/AddProduct";
import MyItem from "./pages/Home/MyItem/MyItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageItem"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
