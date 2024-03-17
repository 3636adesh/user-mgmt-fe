import logo from './logo.svg';
import './App.css';
import MainHeader from './components/main-header/MainHeader';
import Home from './components/home/Home';
import AuthContext from "./components/context/AuthContext";
import {useContext} from "react";
import Login from "./components/login/login";

function App() {

    let ctx = useContext(AuthContext)
  return (
      <>
          <MainHeader />
          <main>
              {!ctx.isLoggedIn && <Login/>}
              {ctx.isLoggedIn && <Home/>}
          </main>
      </>
  );
}

export default App;
