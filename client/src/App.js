import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/global/navbar/Navbar";
import Home from "./scenes/home/Home";
import Footer from "./scenes/global/footer/Footer";



function App() {
  /*const handleCallbackResponse = (response) => {
    console.log(`Encoded JWT ID token ${response.credential}`);
  }
useEffect(() => {*/
    /* global google */
   /* google.accounts.id.initialize({
      client_id: "11469275268-3rcca9k00jlujgicp0m8i2k06m1gd3pm.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  }, []);
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {
      theme: "outline", 
      size: "large"
    }
  )*/
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
