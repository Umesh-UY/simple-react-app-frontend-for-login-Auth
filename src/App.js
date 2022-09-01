import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import Signup from "./components/signup/signup";
import PrivateComponent from "./components/privatecomponent/private";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/logout" element={<h1>logout Page</h1>} />
            <Route path="/contact" element={<h1>contact Page</h1>} />
          </Route>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
