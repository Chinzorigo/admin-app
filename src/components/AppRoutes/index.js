import { Route, Routes } from "react-router-dom";

import AdminDashBoard from "../../pages/AdminDashBoard";
import Users from "../../pages/Users";
import Products from "../../pages/Products";

function AppRoutes() {

    return (
            <Routes>
                <Route path="/" element={<AdminDashBoard />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/products" element={<Products />}></Route>
            </Routes>
    )
}

export default AppRoutes;