
import { useState } from 'react'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";


function App() {
  const [count, setCount] = useState(0);
  return (

  <div className="page__content">
    <Header />
    <Main />
    <Footer />
  </div>
 );
}

export default App

