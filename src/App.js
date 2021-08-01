import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import { createContext, useState } from "react";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Shipment from "./component/Shipment/Shipment";
import Dashboard from "./component/Dashboard/Dashboard";
import MainDashboard from "./component/MainDashboard/MainDashboard";
import OrderManagement from "./component/OrderManagement/OrderManagement";
import OwnOrder from "./component/OwnOrder/OwnOrder";
import Admin from "./component/Admin/Admin";
import ShowAdmin from "./component/ShowAdmin/ShowAdmin";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        {/* <h1>hello{loggedInUser.email}</h1>
        {console.log(";lkj", loggedInUser.email)} */}
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/main-dashboard">
            <MainDashboard></MainDashboard>
          </PrivateRoute>
          <PrivateRoute path="/own-order">
            <OwnOrder></OwnOrder>
          </PrivateRoute>
          <PrivateRoute path="/add-Admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/whoAdmin">
            <ShowAdmin></ShowAdmin>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/order-management">
            <OrderManagement></OrderManagement>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
