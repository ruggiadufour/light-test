import { useEffect } from "react";
import axios from "axios";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { useAppState } from "./context/app";
import Search from "./components/Search";
import MyCart from "./components/MyCart";
import Banner from './assets/images/banner.png'
function App() {
  const { dispatch, state } = useAppState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(state.api_url);
      dispatch({ type: "setInitial", payload: response.data });
    }
    getData();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <img src={Banner} width="100%" alt="" />
              <div className="container-app mt-5">
                <Search />
                <Cards />
              </div>
            </Route>
            <Route path="/my-cart">
              <div className="container-app">
                <MyCart />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
